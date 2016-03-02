import React, {
  AppRegistry,
  Component,
  StyleSheet,
  Text,
  View,
  Navigator,
  AsyncStorage
} from 'react-native'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import * as actionCreators from '../actions/actionCreators'
import SignIn from '../components/signIn'



class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      location: ''
    };
  }

  componentDidMount() {
    navigator.geolocation.getCurrentPosition(
      (location) => {
        this.setState({location: JSON.stringify(location)})
      },
      (error) => alert(error.message),
      {enableHighAccuracy: true, timeout: 20000, maximumAge: 1000}
    )
    this._getToken()
  }

  componentWillReceiveProps() {
    this._getToken()
  }

  render() {
    const {
      users, actions
    } = this.props

    return (

      <Navigator
        initialRoute={{name: 'Sign In', index: 0}}
        renderScene={(route, navigator) =>
          <SignIn
            {...this.state}
            signIn={actions.signIn}
            signUp={actions.signUp}
            fetchCurrentUser={actions.fetchCurrentUser}
            name={route.name}
            user={users}
            navigator={navigator}
            onForward={() => {
              var nextIndex = route.index + 1;
              navigator.push({
                name: 'Scene ' + nextIndex,
                index: nextIndex,
              });
            }}
            onBack={() => {
              if (route.index > 0) {
                navigator.pop();
              }
            }}
          />
        }
      />
    )
  }

  _getToken() {
    AsyncStorage.getItem('token')
    .then((response) => {
      this.setState({authToken: response})
    })
  }
}

const mapStateToProps = function(state) {
  return Object.assign({}, state)
}

const mapDispatchToProps = function(dispatch) {
  return { actions: bindActionCreators(actionCreators, dispatch) }
}

export default connect(mapStateToProps, mapDispatchToProps)(App)
