// Import React
import { Text } from 'react-native';

// Import Icon
import Icon from 'react-native-vector-icons/Entypo';

// styles
import styles from 'src/assets/styles/AddButton.style';

interface AddButtonProps {
  iconName: string;
  iconSize?: number;
  iconColor: string;
  text: string;
  added: boolean;
}

function AddButton(props: AddButtonProps) {
  // destruct props
  const { iconName, iconSize, iconColor, text, added } = props;

  return (
    <>
      <Icon name={iconName} size={iconSize ? iconSize : 30} color={iconColor} />
      <Text style={added ? [styles.actionText, styles.added] : styles.actionText}>{text}</Text>
    </>
  );
}

export default AddButton;
