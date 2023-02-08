// Import React
import { useState, useEffect, useContext } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';

// Import Navigation Context
import { NavigationContext } from '@react-navigation/native';

// Import i18next
import { t } from 'i18next';

// Import Constants
import { CUSTOM_COLORS, CUSTOM_COLORS_TYPE } from 'src/common/constants/colors/customColors';
import { CUSTOM_ICON_SIZES } from 'src/common/constants/icon/iconSizes';

// Import Icons
import Icon from 'react-native-vector-icons/Entypo';
import MaterialIcon from 'react-native-vector-icons/MaterialCommunityIcons';

// Import Utils
import { addMovie } from 'src/common/utils/addMovie';
import { openMovieDetailPage } from 'src/common/utils/openMovieDetailPage';
import { fetchGenre } from 'src/common/utils/fetchGenre';
import { checkMovieList } from 'src/common/utils/checkMovieList';

// Import Components
import InfoModal from 'src/components/info-modal/InfoModal';
import CustomButton from 'src/components/button/CustomButton';

// styles
import styles from 'src/assets/styles/Details.style';

// Import Types
import { MovieListData } from 'src/screens/home/_types/movieListData';

interface DetailsProps {
  contentType: 'preview' | 'movie';
  title: string;
  genres: number[];
  desc: string;
  imgLink: string;
  id: number;
  vote: number;
  movieList: MovieListData[];
  userID?: string;
}

const Details = (props: DetailsProps) => {
  // destruct props
  const { contentType, title, genres, desc, imgLink, id, vote, movieList, userID } = props;

  // variables
  const navigation = useContext(NavigationContext);

  // useState
  const [genre, setGenre] = useState();
  const [modalVisible, setModalVisible] = useState<boolean>(false);
  const [movieListCheck, setMovieListCheck] = useState<boolean>(false);


  // useEffect
  useEffect(() => {
    // method for getting the genre name according to genre id
    const getGenre = async () => {
      setGenre(await fetchGenre(genres[0]));
    };

    getGenre();
    checkMovieList(id, movieList, setMovieListCheck);
  }, []);

  useEffect(() => {
    checkMovieList(id, movieList, setMovieListCheck);
  }, [movieList]);

  return (
    <View
      style={contentType === 'movie' ? styles.detailsContainer : [styles.detailsContainer, styles.playButtonContainer]}
    >
      {contentType === 'movie' ? (
        <>
          <View style={styles.header}>
            <View>
              <Text style={styles.title} numberOfLines={1}>
                {title}
              </Text>
              <Text style={styles.genre}>{genre?.name}</Text>
            </View>
          </View>
          <View style={styles.actionButtons}>
            <CustomButton
              title={movieListCheck ? t('GLOBAL.COMPONENTS.BUTTON.TITLES.ADDED') : t('GLOBAL.COMPONENTS.BUTTON.TITLES.MY_LIST')}
              icon={<Icon name="plus" size={CUSTOM_ICON_SIZES.MEDIUM} color={movieListCheck ? CUSTOM_COLORS.GREEN : CUSTOM_COLORS.WHITE} />}
              textColor={movieListCheck ? CUSTOM_COLORS_TYPE.GREEN : CUSTOM_COLORS_TYPE.WHITE}
              bgColor={CUSTOM_COLORS_TYPE.MAIN_BACKGROUND_COLOR}
              onPress={() => addMovie(title, desc, imgLink, id, vote, movieList, genre)}
            />
            <CustomButton
              title={t('GLOBAL.COMPONENTS.BUTTON.TITLES.DETAILS')}
              icon={<MaterialIcon name="page-next-outline" color={CUSTOM_COLORS.WHITE} size={CUSTOM_ICON_SIZES.SEMIMEDIUM} />}
              textColor={CUSTOM_COLORS_TYPE.WHITE}
              bgColor={CUSTOM_COLORS_TYPE.MAIN_BACKGROUND_COLOR}
              onPress={() => openMovieDetailPage(navigation, { title, genre, desc, imgLink, vote, id, userID, movieList })}
            />
          </View>
        </>
      ) : (
        <TouchableOpacity onPress={() => setModalVisible(!modalVisible)}>
          <MaterialIcon name="play-circle-outline" color="#fff" size={37} />
          <InfoModal
            type="video"
            isVisible={modalVisible}
            setIsVisible={setModalVisible}
            title={title}
            imgLink={imgLink}
          />
        </TouchableOpacity>
      )}
    </View>
  );
};

export default Details;
