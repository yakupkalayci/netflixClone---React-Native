import {StyleSheet} from 'react-native';

export default StyleSheet.create({
  detailsContainer: {
    flex: 1,
    position: 'absolute',
    bottom: 0,
    padding: 10,
    backgroundColor: '#444',
    width: '100%',
    height: '100%',
    zIndex: 1000,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingBottom: 7
  },
  headerButtons: {
    flexDirection: 'column',
    alignItems: 'center',
  },
  title: {
    fontSize: 14,
    color: '#fff',
    fontWeight: 'bold',
    paddingRight: 10,
  },
  genre: {
    fontSize: 12,
    color: '#fff',
    paddingBottom: 5,
  },
  detail: {
    borderTopWidth: 1,
    borderTopColor: 'red',
    color: '#fff',
    paddingTop: 5,
    fontSize: 13
  },
  playButtonContainer: {
    flex: 1,
    position: 'absolute',
    bottom: 0,
    padding: 10,
    backgroundColor: '#444',
    width: '100%',
    height: '100%',
    zIndex: 1000,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 140 / 2,
  }
});
