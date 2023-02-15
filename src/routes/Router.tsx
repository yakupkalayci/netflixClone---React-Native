// Import React-Navigation
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

// Import Routes
import { authStackRoutes } from 'src/routes/routes';

// Import Type
import { RootStackParamList } from 'src/routes/types';

// Constant Variables
const Stack = createNativeStackNavigator<RootStackParamList>();

function Router(): JSX.Element {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        {authStackRoutes.map((route) => (
          <Stack.Screen key={route.name} name={route.name} component={route.component} />
        ))}
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default Router;
