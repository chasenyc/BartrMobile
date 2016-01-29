import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 30,
    textAlign: 'center',
    margin: 10,
    fontWeight: '500',
    alignSelf: 'stretch',
  },
  defaultInput: {
    flex: 1,
    fontSize: 20,
    fontWeight: 'bold',
    color: 'black',
    height: 50,
    padding: 0,
    backgroundColor: '#fff',
    borderColor: '#000000',
    borderWidth: 1,
    borderStyle: 'solid',
    borderRadius: 2,
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
    borderWidth: 1,
    borderStyle: 'solid',
    borderRadius: 5,
    padding: 10,
    margin: 5,
    alignSelf: 'stretch',
  },
  buttonText: {
    textAlign: 'center',
  },
});
