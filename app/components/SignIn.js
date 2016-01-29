import React, {
  Component,
  TextInput,
  View,
  Text,
  TouchableHighlight
} from 'react-native';
import styles from '../styles/styles'
export default class SignIn extends Component {

  constructor(props) {
    super(props);
    this.state = {
      username: '',
      password: ''
    };
  }

  onChange(event) {
    console.log(event);
  }

  render() {
    return (
      <View style={styles.container}>
        <Text>SIGN IN</Text>

        <TextInput onChangeText={ this.onChange.bind(this) }/>
      </View>
    );
  }
}
