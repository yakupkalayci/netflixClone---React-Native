// Import React
import { View, Text } from 'react-native';

// Import Vector Close Icon
import IconClose from 'react-native-vector-icons/Ionicons';

// Import styles
import styles from 'src/assets/styles/Comment.style';

interface CommentProps {
  comment: [];
  handleDeleteComment: (id) => void;
}

function Comment(props: CommentProps): JSX.Element {
  // destruct props
  const { comment, handleDeleteComment } = props;

  return (
    <View style={styles.container}>
      <Text style={styles.comment}>{comment[0].comment}</Text>
      <IconClose
        name="remove-circle-outline"
        color="red"
        size={20}
        onPress={() => handleDeleteComment(comment[0].id)}
      />
    </View>
  );
}

export default Comment;
