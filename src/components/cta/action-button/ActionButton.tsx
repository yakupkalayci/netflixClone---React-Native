// Import React
import { ReactElement } from 'react';
import { StyleProp, TouchableOpacity, ViewStyle } from 'react-native';

interface ActionButtonProps {
  children: ReactElement;
  style: StyleProp<ViewStyle>;
  onPressFunction: () => void;
}

function ActionButton(props: ActionButtonProps): JSX.Element {
  // destruct props
  const { style, onPressFunction, children } = props;

  return (
    <TouchableOpacity onPress={onPressFunction} style={style}>
      {children}
    </TouchableOpacity>
  );
}

export default ActionButton;
