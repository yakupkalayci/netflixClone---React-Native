// Import React
import { Dispatch, Fragment, SetStateAction, useContext } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';

// Import Utils
import { openMovieDetailPage } from '../../common/utils/openMovieDetailPage';

// Import react-native-modal
import Modal from 'react-native-modal';

// Import react-native-video
import Video from 'react-native-video';

// Import Navigation Context
import { NavigationContext } from '@react-navigation/native';

// Import Vector Close Icon
import IconClose from 'react-native-vector-icons/Fontisto';

// styles
import styles from '../../assets/styles/InfoModal.style';

interface InfoModalProps {
  isVisible: boolean;
  setIsVisible: Dispatch<SetStateAction<boolean>>;
  type: 'video' | 'text';
  title: string;
  originalTitle?: string;
  description?: string;
  genre: [];
  vote?: number;
  id?: number
  imgLink?: string;
  movieList?: [];
  userID?: object;
}

function InfoModal(props: InfoModalProps) {
  // destruct props
  const { isVisible, setIsVisible, title, originalTitle, description, genre, vote, imgLink, id, type, movieList, userID } = props;

  // variables
  const navigation = useContext(NavigationContext);

  return (
    <Modal
      isVisible={isVisible}
      onBackdropPress={() => setIsVisible(!isVisible)}
      onBackButtonPress={() => setIsVisible(!isVisible)}
    >
      <View style={styles.modalView}>
        {type === 'text' ? (
          <Fragment>
            <View style={styles.modalHeader}>
              <TouchableOpacity
                onPress={() =>
                  openMovieDetailPage(navigation, { title, genre, desc: description, imgLink, vote, id, userID })
                }
              >
                <Text style={[styles.modalText, styles.modalTitle]}>{title}</Text>
              </TouchableOpacity>
              <IconClose name="close" color="red" size={20} onPress={() => setIsVisible(false)} />
            </View>
            <Text style={[styles.modalText, styles.originalTitle]}>Original Title: {originalTitle}</Text>
            <Text style={[styles.modalText, styles.detail]}>{description}</Text>
          </Fragment>
        ) : (
          <View style={styles.videoContainer}>
            <Text style={[styles.modalText, styles.modalTitle]}>{title}</Text>
            <Video
              source={{ uri: 'http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4' }}
              controls={true}
              resizeMode={'cover'}
              poster={imgLink}
              style={styles.video}
            />
          </View>
        )}
      </View>
    </Modal>
  );
}

export default InfoModal;
