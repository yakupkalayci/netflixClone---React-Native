// Import Constants
import { CUSTOM_COLORS } from 'src/common/constants/colors/customColors';

// Import i18next
import { t } from 'i18next';

// Import React-Navigation
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

// Import Icon
import Icon from 'react-native-vector-icons/Entypo';
import ProfileIcon from 'react-native-vector-icons/Ionicons';

// Import Routes
import { tabRoutes } from 'src/routes/routes';

// Import Type
import { TabParamList } from './types';

// Constant Variables
const Tab = createBottomTabNavigator<TabParamList>();

const TabNavigator = () => (
  <Tab.Navigator
    screenOptions={({ route }) => ({
      tabBarIcon: ({ focused, color, size }) => {
        let iconName;

        color = focused ? CUSTOM_COLORS.TAB_BAR_ICON_ACTIVE_COLOR : CUSTOM_COLORS.TAB_BAR_ICON_INACTIVE_COLOR;

        if (route.name === 'Home') {
          iconName = 'home';

          return <Icon name={iconName} size={size} color={color} />;
        } else if (route.name === 'Profile') {
          iconName = 'person';

          return <ProfileIcon name={iconName} size={size} color={color} />;
        }
      },
      tabBarActiveTintColor: CUSTOM_COLORS.TAB_BAR_ICON_ACTIVE_COLOR,
      tabBarInactiveTintColor: CUSTOM_COLORS.TAB_BAR_ICON_INACTIVE_COLOR,
      tabBarActiveBackgroundColor: CUSTOM_COLORS.BLACK,
      tabBarInactiveBackgroundColor: CUSTOM_COLORS.BLACK,
      headerShown: false
    })}
  >
    {tabRoutes.map((route) => (
      <Tab.Screen key={route.name} name={route.name} component={route.component} />
    ))}
  </Tab.Navigator>
);

export default TabNavigator;
