import React, {
  Component,
  TextInput,
  View,
  Text,
  TouchableHighlight,
  AsyncStorage
} from 'react-native';
import styles from '../styles/styles'
import { fetchCurrentUser } from '../actions/actionCreators'
export default class SignIn extends Component {

  constructor(props) {
    super(props);
    this.state = {
      username: '',
      password: ''
    };
  }

  signIn() {
    this.props.signIn(this.state)
  }

  signUp() {
    this.props.signUp({
      username: this.state.username,
      password: this.state.password,
      location: this.props.location
    })
  }

  fetchCurrentUser() {
    this.props.fetchCurrentUser(this.props.authToken)
    this.props.navigator.resetTo({id: "Inventory"});
  }

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>BARTR</Text>
        <Text style={styles.welcome}>{this.props.users}</Text>
        <View style={styles.columns}>
          <TextInput
            ref='UsernameInput'
            maxLength={15}
            style={styles.defaultInput}
            autoCapitalize="none"
            autoCorrect={false}
            placeholder='username'
            onChangeText={(text) => {
              this.setState({username: text.replace(/\W/g, '')});
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
            onSubmitEditing={this.props.signIn}
          />
          <TouchableHighlight
            style={styles.basicButton}
            underlayColor='#1A237E'
            onPress={this.signIn.bind(this)}>
            <Text style={styles.buttonText}>SIGN IN</Text>
          </TouchableHighlight>

          <TouchableHighlight
            style={[styles.basicButton, styles.highlightButton]}
            underlayColor='#B71C1C'
            onPress={this.fetchCurrentUser.bind(this)}>
            <Text style={styles.buttonText}>SIGN UP</Text>
          </TouchableHighlight>
        </View>
      </View>
    );
  }

  _focusNextField(nextField) {
    this.refs[nextField].focus()
  }
}
