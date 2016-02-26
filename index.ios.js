import React, {
  AppRegistry,
  Component
} from 'react-native';


import Root from './app/containers/root';

class BartrMobile extends Component {
  render() {
    return (
      <Root />
    );
  }
}


AppRegistry.registerComponent('BartrMobile', () => BartrMobile);
