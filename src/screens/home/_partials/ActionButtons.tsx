// Import React
import { View, ViewStyle } from 'react-native';

// Import Components
import ActionButton from 'src/components/cta/action-button/ActionButton';

interface ActionButtonsProps {
  actionButtonData: any;
  viewStyle: ViewStyle;
}

function ActionButtons(props: ActionButtonsProps): JSX.Element {
  // destruct props
  const { actionButtonData, viewStyle } = props;

  return (
    <View style={viewStyle}>
      {actionButtonData.map((item) => (
        <ActionButton key={item.id} onPressFunction={item.onPressFunction} style={item.style}>
          {item.children}
        </ActionButton>
      ))}
    </View>
  );
}

export default ActionButtons;
