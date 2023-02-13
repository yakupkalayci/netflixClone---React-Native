// Import React
import { TouchableOpacity, Text, TextStyle } from 'react-native';

interface NavigationItemProps {
  onPress?: () => void;
  style: TextStyle | TextStyle[];
  target: string;
}

function NavigationItem(props: NavigationItemProps): JSX.Element {
  // destruct props
  const { onPress, style, target } = props;

  return (
    <TouchableOpacity onPress={onPress}>
      <Text style={style}>{target}</Text>
    </TouchableOpacity>
  );
}

export default NavigationItem;
