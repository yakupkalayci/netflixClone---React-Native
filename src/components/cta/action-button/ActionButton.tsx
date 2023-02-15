// Import React
import { ReactElement } from 'react';
import { View, StyleProp, TouchableOpacity, ViewStyle } from 'react-native';

interface ActionButtonProps {
  children: ReactElement;
  style: StyleProp<ViewStyle>;
  onPressFunction: () => void;
}

function ActionButton(props: ActionButtonProps): JSX.Element {
  // destruct props
  const { style, onPressFunction, children } = props;

  return (
    <View>
      <TouchableOpacity onPress={onPressFunction} style={style}>
        {children}
      </TouchableOpacity>
    </View>
  );
}

export default ActionButton;
