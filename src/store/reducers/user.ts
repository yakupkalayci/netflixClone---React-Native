import auth from '@react-native-firebase/auth';

export default function user() {
    return auth().currentUser ? auth().currentUser : null;
}