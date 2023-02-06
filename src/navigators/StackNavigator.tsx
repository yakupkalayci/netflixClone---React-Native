// Import React-Navigation
import { createNativeStackNavigator } from '@react-navigation/native-stack';

// Import Routes
import { homeStackRoutes } from '../routes/routes';

// Import Type
import { InnterStackParamList } from './types';

// Constant Variables
const Stack = createNativeStackNavigator<InnterStackParamList>();

const StackNavigator = () => (
  <Stack.Navigator screenOptions={{ headerShown: false }}>
    {homeStackRoutes.map((route) => (
      <Stack.Screen key={route.name} name={route.name} component={route.component} />
    ))}
  </Stack.Navigator>
);

export default StackNavigator;
