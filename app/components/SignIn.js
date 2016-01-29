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

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>SIGN IN</Text>

        <View style={styles.columns}>
          <TextInput
            style={styles.defaultInput}
            autoCapitalize="none"
            onChangeText={(text) => {
              this.setState({username: text.replace(/\s/g, '')});
            }}
            value={this.state.username} />
          <TextInput
            style={styles.defaultInput}
            password={true}
            onChangeText={(text) => {
              this.setState({password: text});
            }}
          />
          <TouchableHighlight onPress={this._onSubmit.bind(this)}>
            <Text style={styles.welcome}>Submit</Text>
          </TouchableHighlight>
        </View>
      </View>
    );
  }

  _onSubmit() {
    console.log('POST REQUEST: ', this.state);
  }
}
