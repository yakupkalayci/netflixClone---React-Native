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
  },
  title: {
    fontSize: 15,
    color: '#fff',
    fontWeight: 'bold',
  },
  genre: {
    fontSize: 13,
    color: '#fff',
    paddingBottom: 5,
  },
  detail: {
    borderTopWidth: 1,
    borderTopColor: 'red',
    color: '#fff',
    paddingTop: 5,
    fontSize: 14,
  },
});
