import { baseApi } from '../actions/baseApi';
import { SERVICES } from '../constants/serviceConstants';
import { STORE_CONFIG } from '../storeConfig';
import i18n from '../../common/locales/i18n';
import { ALERT_TYPE, Toast } from 'react-native-alert-notification';

export const api =
  (
    method: 'get' | 'post' | 'put' | 'delete',
    service: SERVICES | undefined,
    url: string,
    params: Record<string, unknown> | string | FormData | undefined,
    requestName: string,
    triggerActions?: Array<void | ((dispatch: any) => void) | Record<string, unknown>> | undefined,
    contentType?: string,
    triggerFunction?: (val: any) => void
  ) =>
  (dispatch) => {
    dispatch({ type: `${requestName}_LOADING`, requestName });

    // Notification Mapping
    const notificationStatusObject: Record<string, boolean | string> = STORE_CONFIG?.[requestName];

    baseApi({
      method,
      url: `${service ? service : ''}${url}`,
      headers: {
        Authorization: '',
        UserLanguage: `${i18n?.language}`,
        'Content-Type': contentType ? contentType : 'application/json'
      },
      data: method === 'get' ? undefined : params,
      params: method === 'get' ? params : undefined
    })
      .then(async (res) => {
        dispatch({
          type: `${requestName}_SUCCESS`,
          payload: res,
          requestName
        });
        if (triggerFunction) {
          await triggerFunction(res);
        }
      })
      .then(() => {
        if (triggerActions) {
          for (let i = 0; i < triggerActions.length; i++) {
            dispatch(triggerActions[i]);
          }
        }
        if (notificationStatusObject?.successMessage) {
          // successDecoderPushNotification('SUCCESS', `${requestName}_SUCCESS`);
          Toast.show({
            type: ALERT_TYPE.SUCCESS,
            title: 'Success',
            textBody: 'Congrats! this is toast notification success'
          });
        }
      })
      .catch((err) => {
        dispatch({
          type: `${requestName}_FAIL`,
          payload: err,
          requestName
        });
        if (notificationStatusObject?.errorMessage) {
          const errorMessage = err?.response?.data?.message;
          const errorKey = `${requestName}_FAIL`;

          if (!errorMessage) {
            // defaultErrorPushNotification(errorMessage, errorKey);
            Toast.show({
              type: ALERT_TYPE.DANGER,
              title: 'Success',
              textBody: 'Congrats! this is toast notification success'
            });
          } else {
            // errorDecoderPushNotification(errorMessage, errorKey);
            Toast.show({
              type: ALERT_TYPE.DANGER,
              title: 'Success',
              textBody: 'Congrats! this is toast notification success'
            });
          }
        }
      });
  };
