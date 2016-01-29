import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
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
    width: 200,
    padding: 10,
    marginBottom: 10,
  },
  columns: {
    flexDirection: 'column'
  }
});
