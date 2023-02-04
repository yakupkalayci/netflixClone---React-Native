// Import i18next
import { t } from 'i18next';

// Import React-Navigation
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

// Import Icon
import Icon from 'react-native-vector-icons/Entypo';
import ProfileIcon from 'react-native-vector-icons/Ionicons';

// Import Routes
import { tabRoutes } from '../routes/routes';

// import {TabParamList} from '../screenTypes';

// Constant Variables
const Tab = createBottomTabNavigator();

const TabNavigator = () => (
  <Tab.Navigator
    screenOptions={({ route }) => ({
      tabBarIcon: ({ focused, color, size }) => {
        let iconName;

        color = focused ? '#fff' : '#555';

        if (route.name === t('PAGE_TITLES.HOME')) {
          iconName = 'home';

          return <Icon name={iconName} size={size} color={color} />;
        } else if (route.name === t('PAGE_TITLES.PROFILE')) {
          iconName = 'person';

          return <ProfileIcon name={iconName} size={size} color={color} />;
        }
      },
      tabBarActiveTintColor: '#fff',
      tabBarInactiveTintColor: 'gray',
      tabBarActiveBackgroundColor: '#000',
      tabBarInactiveBackgroundColor: '#000',
      headerShown: false
    })}
  >
    {tabRoutes.map((route) => (
      <Tab.Screen key={route.name} name={route.name} component={route.component} />
    ))}
  </Tab.Navigator>
);

export default TabNavigator;
