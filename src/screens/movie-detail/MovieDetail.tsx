// Import React
import { useState, useEffect } from 'react';
import { SafeAreaView, View, Text, ScrollView, FlatList } from 'react-native';

// Import Redux
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from 'src/store/store';
import { getComments } from 'src/store/actions/comments/getComment';
import { addComment } from 'src/store/actions/comments/addComment';
import { deleteComment } from 'src/store/actions/comments/deleteComment';

// Import Constants
import { CUSTOM_COLORS } from 'src/common/constants/colors/customColors';

// Import utils
import { listenDB } from 'src/common/utils/listenDB';
import { checkMovieList } from 'src/common/utils/checkMovieList';
import { fetchGenre } from 'src/common/utils/fetchGenre';
import { showToast } from 'src/common/utils/showToast';

// Import i18next
import { t } from 'i18next';
import { withTranslation } from 'react-i18next';

// Import Icon
import Icon from 'react-native-vector-icons/FontAwesome';

// Import Partials
import MovieDetails from './_partials/MovieDetails';
import CommentForm from './_partials/CommentForm';
import Comment from './_partials/Comment';

// Import Components
import Header from '../../components/header/Header';

// Import Alert Types
import { ALERT_TYPE } from 'react-native-alert-notification';

// Import Data Types
import { MovieListData } from 'src/screens/home/_types/movieListData';

// Import Screen Types
import { MovieDetaiProps } from 'src/routes/types';

// styles
import styles from 'src/assets/styles/MovieDetail.style';

function MovieDetail({ route, navigation }: MovieDetaiProps): JSX.Element {
  // destruct params
  const { title, genre, desc, imgLink, vote, id, userID } = route.params;

  // variables
  const dispatch = useDispatch();
  const comments = useSelector((state: RootState) => state?.globalReducer?.getComments?.success?.data);

  // useState
  const [movieList, setMovieList] = useState<MovieListData[]>();
  const [movieListCheck, setMovieListCheck] = useState<boolean>(false);
  const [fetchedGenre, setFetchedGenre] = useState<{ name: string; id: number }>();
  const [showComments, setShowComments] = useState(false);
  const [comment, setComment] = useState<string>('');
  const [commentList, setCommentList] = useState<[]>();

  // method for adding comment
  const handleAddComment = () => {
    if (comment) {
      dispatch(addComment({ userID, comment: { movieID: id, comment } }));
      setComment('');
    } else {
      showToast(
        ALERT_TYPE.WARNING,
        t('GLOBAL.COMPONENTS.ALERT.TITLES.WARNING'),
        t('GLOBAL.COMPONENTS.ALERT.MESSAGES.ADD_COMMENT')
      );
    }
  };

  // method for getting comment belongs to the movie which has written by this user
  const handleGetComments = () => {
    const allComments = comments?.filter((item) => item.userID === userID);
    const lastComments = allComments?.filter((item) => item.comment.movieID === id);

    setCommentList(lastComments?.map((item) => [{ id: item.id, comment: item.comment.comment }]));
  };

  const handleDeleteComment = (id) => {
    dispatch(deleteComment(id));
  };

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
          <MovieDetails
            desc={desc}
            fetchedGenre={fetchedGenre}
            genre={genre}
            id={id}
            imgLink={imgLink}
            movieList={movieList}
            movieListCheck={movieListCheck}
            title={title}
            vote={vote}
            userID={userID}
          />
          <View style={styles.commentContainer}>
            <Icon
              name="comment"
              color={CUSTOM_COLORS.WHITE}
              size={20}
              style={styles.commentIcon}
              onPress={() => setShowComments(!showComments)}
            />
            {showComments ? (
              <CommentForm comment={comment} setComment={setComment} handleAddComment={handleAddComment} />
            ) : null}
          </View>
        </View>
      </ScrollView>
      {commentList?.length ? (
        <View>
          <Text style={[styles.title, styles.commentTitle]}>{t('GLOBAL.LABELS.COMMENTS')}</Text>
          <FlatList
            data={commentList}
            renderItem={({ item }) => <Comment comment={item} handleDeleteComment={handleDeleteComment} />}
          />
        </View>
      ) : null}
    </SafeAreaView>
  );
}

export default withTranslation()(MovieDetail);
