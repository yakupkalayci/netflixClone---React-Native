import {ALERT_TYPE, Toast} from 'react-native-alert-notification';

export const showToast = (type: ALERT_TYPE, title: string, text: string) => {
  Toast.show({
    type: type,
    title: title,
    textBody: text,
    autoClose: 2000,
  });
};
