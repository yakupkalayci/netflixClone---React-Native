// Import React
import { useState, useEffect } from 'react';
import { SafeAreaView, View, Text, TextInput, Button, TouchableOpacity, ScrollView } from 'react-native';

// Import Redux
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../store/store';
import { getComments } from '../../store/actions/comments/getComment';
import { addComment } from '../../store/actions/comments/addComment';

// Import Constants
import { CUSTOM_COLORS } from '../../common/constants/colors/customColors';

// Import utils
import { addMovie } from '../../common/utils/addMovie';
import { listenDB } from '../../common/utils/listenDB';
import { checkMovieList } from '../../common/utils/checkMovieList';
import { fetchGenre } from '../../common/utils/fetchGenre';

// Import i18next
import { t } from 'i18next';

// Import React-native-video
import Video from 'react-native-video';

// Import Icon
import Icon from 'react-native-vector-icons/FontAwesome';

// Import Components
import Header from '../../components//header/Header';
import AddButton from '../../components/add-button/AddButton';

// Import Screen Types
import { MovieDetaiProps } from '../../navigators/types';

// styles
import styles from '../../assets/styles/MovieDetail.style';

function MovieDetail({ route, navigation }:MovieDetaiProps): JSX.Element {
  // destruct params
  const { title, genre, desc, imgLink, vote, id, userID } = route.params;

  // variables
  const dispatch = useDispatch();
  const comments = useSelector((state: RootState) => state?.globalReducer?.getComments?.success?.data);

  // useState
  const [movieList, setMovieList] = useState([]);
  const [movieListCheck, setMovieListCheck] = useState<boolean>(false);
  const [fetchedGenre, setFetchedGenre] = useState();
  const [showComments, setShowComments] = useState(false);
  const [comment, setComment] = useState<string>();
  const [commentList, setCommentList] = useState();

  const handleAddComment = () => {
    dispatch(addComment({ userID, comments: [{ movieID: id, comment }] }));
  }

  const handleGetComments = () => {
  }

  // useEffects
  useEffect(() => {
    listenDB(userID, setMovieList);
    checkMovieList(id, movieList, setMovieListCheck);
    dispatch(getComments());
  }, []);

  useEffect(() => {
    checkMovieList(id, movieList, setMovieListCheck);
  }, [movieList]);

  useEffect(() => {
    handleGetComments();
  }, [comments]);

  useEffect(() => {
    console.log(commentList);
  }, [commentList]);

  useEffect(() => {
    if (Array.isArray(genre)) {
      // method for getting the genre name according to genre id
      const getGenre = async () => {
        setFetchedGenre(await fetchGenre(genre[0]));
      };

      getGenre();
    }
  }, [genre]);

  return (
    <SafeAreaView style={styles.container}>
      <Header navigation={navigation} />
      <ScrollView>
        <View style={styles.innerContainer}>
          <View style={styles.videoContainer}>
            <Video
              source={{ uri: 'http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4' }}
              controls={true}
              resizeMode={'cover'}
              poster={imgLink}
              style={styles.video}
            />
          </View>
          <View style={styles.movieDetails}>
            <Text style={[styles.text, styles.title]}>{title}</Text>
            <View style={styles.upperDetails}>
              <View style={styles.upperLeft}>
                <View style={styles.voteContainer}>
                  <Icon name="star" color={CUSTOM_COLORS.YELLOW} size={20} />
                  <Text style={[styles.text, styles.voteText]}>{vote}</Text>
                </View>
                <Text style={[styles.text, styles.genreText]}>{fetchedGenre ? fetchedGenre?.name : genre?.name}</Text>
              </View>
              <TouchableOpacity
                style={styles.actionButton}
                onPress={() => addMovie(title, desc, imgLink, id, vote, movieList, genre)}
              >
                {movieListCheck ? (
                  <AddButton
                    iconName="plus"
                    iconColor={CUSTOM_COLORS.GREEN}
                    iconSize={30}
                    added={true}
                    text={t('GLOBAL.COMPONENTS.BUTTON.TITLES.ADDED')}
                  />
                ) : (
                  <AddButton
                    iconName="plus"
                    iconColor={CUSTOM_COLORS.GREEN}
                    iconSize={30}
                    added={false}
                    text={t('GLOBAL.COMPONENTS.BUTTON.TITLES.MY_LIST')}
                  />
                )}
              </TouchableOpacity>
            </View>
            <View>
              <Text style={[styles.text, styles.describtionText]}>{desc}</Text>
            </View>
          </View>
          <View style={styles.commentContainer}>
            <Icon name="comment" color={CUSTOM_COLORS.WHITE} size={20} onPress={() => setShowComments(!showComments)} />
            {showComments && (
              <View>
                {/* <Text style={styles.label}>{t('GLOBAL.LABELS.COMMENT')}</Text> */}
                <TextInput value={comment} onChangeText={setComment} placeholder={'comments'} style={styles.input} />
                <Button
                  title={t('GLOBAL.COMPONENTS.BUTTON.TITLES.ADD_COMMENT')}
                  color={CUSTOM_COLORS.RED}
                  onPress={() => handleAddComment()}
          />
              </View>
            )}
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

export default MovieDetail;
