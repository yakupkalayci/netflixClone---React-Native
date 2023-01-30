// Import React
import React from 'react';

// Import Redux
import { Provider } from 'react-redux';
import { store } from './store/store';

// Import React-Navigation
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

// Import Routes
import { mainStackRoutes } from './routes/routes';

// import { RootStackParamList } from './screens/screenTypes';
// import {TabParamList} from '../screens/screenTypes';

// Constant Variables
const Stack = createNativeStackNavigator();

function App(): JSX.Element {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <Stack.Navigator screenOptions={{ headerShown: false }}>
          {mainStackRoutes.map((route, index) => (
            <Stack.Screen key={index} name={route.name} component={route.component} />
          ))}
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
  );
}

export default App;
