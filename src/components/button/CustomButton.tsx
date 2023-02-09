// Import React
import { ReactElement } from 'react';
import { TouchableOpacity, Text, ViewStyle } from 'react-native';

import { CUSTOM_BG_COLORS_TYPE, CUSTOM_COLORS_TYPE } from 'src/common/constants/colors/customColors';

// Import styles
import styles from 'src/assets/styles/CustomButton.styles';

interface CustomButtonProps {
  title: string;
  icon?: ReactElement;
  textColor: CUSTOM_COLORS_TYPE;
  bgColor: CUSTOM_COLORS_TYPE | CUSTOM_BG_COLORS_TYPE;
  onPress: any;
  extraStyles?: any;
}

function CustomButton(props: CustomButtonProps): JSX.Element {
  // destruct props
  const { title, icon, textColor, bgColor, onPress, extraStyles } = props;

  // combining extra styles with component stylesheet
  const finalStyle = { ...styles, extraStyles };

  return (
    <TouchableOpacity
      style={
        bgColor
          ? [finalStyle.container, finalStyle.extraStyles, finalStyle[bgColor]]
          : [finalStyle.container, finalStyle.extraStyles]
      }
      onPress={() => onPress()}
    >
      {icon}
      <Text style={textColor ? [styles.text, finalStyle[textColor]] : styles.text}>{title}</Text>
    </TouchableOpacity>
  );
}

export default CustomButton;
