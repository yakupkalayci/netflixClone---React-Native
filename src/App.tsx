// Import Redux
import { Provider } from 'react-redux';
import store from './store/store';

// Import Router
import Router from 'src/routes/Router';

// Import Alert Notification Root
import { AlertNotificationRoot } from 'react-native-alert-notification';

function App(): JSX.Element {
  return (
    <Provider store={store}>
      <AlertNotificationRoot theme="dark">
        <Router />
      </AlertNotificationRoot>
    </Provider>
  );
}

export default App;
