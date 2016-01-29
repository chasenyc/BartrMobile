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
        <Text style={styles.welcome}>BARTR SPACE</Text>

        <View style={styles.columns}>
          <TextInput
            ref='UsernameInput'
            maxLength={15}
            style={styles.defaultInput}
            autoCapitalize="none"
            autoCorrect={false}
            placeholder='username'
            onChangeText={(text) => {
              this.setState({username: text.replace(/\s/g, '')});
            }}
            returnKeyType="next"
            keyboardType='ascii-capable'
            onSubmitEditing={() => this._focusNextField('PasswordInput')}
            value={this.state.username} />
          <TextInput
            ref='PasswordInput'
            style={styles.defaultInput}
            password={true}
            returnKeyType="send"
            placeholder='password'
            onChangeText={(text) => {
              this.setState({password: text});
            }}
            onSubmitEditing={this._onSignIn.bind(this)}
          />
          <TouchableHighlight
            style={styles.basicButton}
            underlayColor='#1A237E'
            onPress={this._onSignIn.bind(this)}>
            <Text style={styles.buttonText}>SIGN IN</Text>
          </TouchableHighlight>

          <TouchableHighlight
            style={[styles.basicButton, styles.redButton]}
            underlayColor='#1A237E'
            onPress={this._onSignUp.bind(this)}>
            <Text style={styles.buttonText}>SIGN UP</Text>
          </TouchableHighlight>
        </View>
      </View>
    );
  }

  _onSignIn() {
    console.log('SIGN IN REQUEST: ', this.state);
  }

  _onSignUp() {
    console.log('SIGN UP REQUEST: ', this.state);
  }

  _focusNextField(nextField) {
    this.refs[nextField].focus()
  }
}
