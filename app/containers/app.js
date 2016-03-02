import React, {
  AppRegistry,
  Component,
  StyleSheet,
  Text,
  View,
  Navigator,
  TouchableHighlight,
  AsyncStorage
} from 'react-native'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import * as actionCreators from '../actions/actionCreators'
import styles from '../styles/styles'
import SignIn from '../components/signIn'
import Inventory from '../components/Inventory'



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

  renderScene(route, nav) {
    const {
      users, actions
    } = this.props
    if (this._isLoggedIn() && route.id === 'Sign In') {
      route.id = "Inventory"
    }
     switch (route.id) {
        case "Sign In":
          return(
            <SignIn
              {...this.state}
              signIn={actions.signIn}
              signUp={actions.signUp}
              fetchCurrentUser={actions.fetchCurrentUser}
              user={users}
              navigator={nav}
            />)
        case "Inventory":
          return (
            <Inventory
              {...this.state}
              user={users}
              navigator={nav}
            />)
     }
  }

  render() {
    const {
      users, actions
    } = this.props
    return (

      <Navigator
        initialRoute={ {id: 'Sign In'} }
        renderScene={this.renderScene.bind(this)}
        navigationBar={
          <Navigator.NavigationBar
            style={styles.navBar}
            routeMapper={navMapper}
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

  _isLoggedIn() {
    return !!this.props.users.id
  }

}

let navMapper = {

  LeftButton(route, nav, index, navState) {
    if (index < 1) {
      return null
    } else {
      return (
        <TouchableHighlight
          onPress={nav.pop}
        >
          <Text>Back</Text>
        </TouchableHighlight>
      )
    }
  },

  RightButton(route, nav, index, navState) {
    return null
  },

  Title(route, nav, index, navState) {
    return (
      <Text style={styles.navTitle}>{route.id}</Text>
    )
  }
}

const mapStateToProps = function(state) {
  return Object.assign({}, state)
}

const mapDispatchToProps = function(dispatch) {
  return { actions: bindActionCreators(actionCreators, dispatch) }
}

export default connect(mapStateToProps, mapDispatchToProps)(App)
