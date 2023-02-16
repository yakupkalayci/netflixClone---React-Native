// Import React
import { Dispatch, SetStateAction, useContext } from 'react';
import { View, ViewStyle } from 'react-native';

// Import Redux
import { useSelector } from 'react-redux';
import { RootState } from 'src/store/store';

// Import i18next
import { t } from 'i18next';

// Import Icons
import MaterialIcon from 'react-native-vector-icons/MaterialCommunityIcons';

// Navigation Context
import { NavigationContext } from '@react-navigation/native';

// Import Constants
import { CUSTOM_COLORS, CUSTOM_COLORS_TYPE } from 'src/common/constants/colors/customColors';
import { CUSTOM_ICON_SIZES } from 'src/common/constants/icon/iconSizes';

// Import Utils
import { addMovie } from 'src/common/utils/addMovie';
import { openMovieDetailPage } from 'src/common/utils/openMovieDetailPage';

// Import Components
import CustomButton from 'src/components/cta/button/CustomButton';
import AddButton from 'src/components/cta/add-button/AddButton';

// Import Types
import { MoviesWGenreData, TrendingMoviesData } from 'src/store/actions/movies/_types/apiTypes';
import { MovieListData } from 'src/screens/home/_types/movieListData';

interface ActionButtonsProps {
  containerStyle: ViewStyle;
  movieListCheck: boolean;
  setShowContent: Dispatch<SetStateAction<boolean>>;
  data: MoviesWGenreData | TrendingMoviesData;
  genre: { name: string; id: number } | undefined;
  movieList: MovieListData[] | undefined;
}

function ActionButtons(props: ActionButtonsProps): JSX.Element {
  // destruct props
  const { containerStyle, movieListCheck, setShowContent, data, genre, movieList } = props;

  // destruct data
  // useSelector
  const user = useSelector((state: RootState) => state?.user);

  // variables
  const title = data.title;
  const desc = data.overview;
  const vote = data.vote_average;
  const id = data.id;
  const imgLink = 'https://image.tmdb.org/t/p/w500' + data.poster_path;
  const userID = user?.uid;
  const navigation = useContext(NavigationContext);

  return (
    <View style={containerStyle}>
      <CustomButton
        title={
          movieListCheck ? t('GLOBAL.COMPONENTS.BUTTON.TITLES.ADDED') : t('GLOBAL.COMPONENTS.BUTTON.TITLES.MY_LIST')
        }
        icon={
          <AddButton
            iconName="plus"
            added={movieListCheck}
            iconColor={movieListCheck ? CUSTOM_COLORS.GREEN : CUSTOM_COLORS.WHITE}
          />
        }
        textColor={movieListCheck ? CUSTOM_COLORS_TYPE.GREEN : CUSTOM_COLORS_TYPE.WHITE}
        bgColor={CUSTOM_COLORS_TYPE.MAIN_BACKGROUND_COLOR}
        onPress={() => {
          addMovie(title, desc, imgLink, id, vote, movieList, genre, userID);
          setTimeout(() => setShowContent(false), 1000);
        }}
        extraStyles={{ padding: 3 }}
      />
      <CustomButton
        title={t('GLOBAL.COMPONENTS.BUTTON.TITLES.DETAILS')}
        icon={<MaterialIcon name="page-next-outline" color={CUSTOM_COLORS.WHITE} size={CUSTOM_ICON_SIZES.SEMIMEDIUM} />}
        textColor={CUSTOM_COLORS_TYPE.WHITE}
        bgColor={CUSTOM_COLORS_TYPE.MAIN_BACKGROUND_COLOR}
        onPress={() => {
          openMovieDetailPage(navigation, { title, genre, desc, imgLink, vote, id, userID });
          setTimeout(() => setShowContent(false), 1000);
        }}
        extraStyles={{ padding: 3 }}
      />
    </View>
  );
}

export default ActionButtons;
