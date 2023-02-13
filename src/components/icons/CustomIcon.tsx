// Import React
import React, { ReactElement } from 'react';

// Import Constants
import { CUSTOM_ICON_SIZES } from 'src/common/constants/icon/iconSizes';
import { CUSTOM_COLORS } from 'src/common/constants/colors/customColors';

export interface IconProps {
  status: CUSTOM_COLORS;
  size?: CUSTOM_ICON_SIZES | number;
  name: ReactElement;
}

CustomIcon.defaultProps = {
  size: CUSTOM_ICON_SIZES.MEDIUM,
  status: CUSTOM_COLORS.GRAY
};

function CustomIcon(props: IconProps) {
  // Descturct Props
  const { size, name, status } = props;

  return (
    <>
      {React.cloneElement(name, {
        width: size,
        height: size,
        color: `${status}`
      })}
    </>
  );
}

export default CustomIcon;
