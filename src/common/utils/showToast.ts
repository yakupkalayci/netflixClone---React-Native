import { Toast, ALERT_TYPE } from 'react-native-alert-notification';

export const showToast = (type: ALERT_TYPE, title: string, text: string) => {
  Toast.show({
    type,
    title,
    textBody: text,
    autoClose: 5000,
  });
};
