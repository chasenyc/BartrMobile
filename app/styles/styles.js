import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#E0F7FA',
  },
  welcome: {
    fontSize: 30,
    textAlign: 'center',
    margin: 10,
    fontWeight: '500',
    alignSelf: 'stretch',
    color: '#00E5FF',
    fontWeight: '900'
  },
  defaultInput: {
    flex: 1,
    fontSize: 20,
    fontWeight: 'bold',
    color: '#1A237E',
    height: 50,
    padding: 0,
    backgroundColor: '#fff',
    borderColor: '#000000',
    alignSelf: 'stretch',
    padding: 10,
    margin: 5,
  },
  columns: {
    flexDirection: 'column',
    alignSelf: 'stretch',
  },
  basicButton: {
    borderColor: '#000000',
    backgroundColor: '#00E5FF',
    padding: 10,
    margin: 5,
    alignSelf: 'stretch',
  },
  highlightButton: {
    backgroundColor: '#FFD740',
  },
  buttonText: {
    textAlign: 'center',
    color: '#fff',
    fontWeight: '700'
  },
});
