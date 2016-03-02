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
    console.log(route)
    const {
      users, actions
    } = this.props
     switch (route.id) {
        case "Sign In":
        console.log('rendering signin')
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
        console.log('rendering inventory')
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
