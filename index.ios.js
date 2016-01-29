/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 */
'use strict';
import React, {
  AppRegistry,
  Component,
  StyleSheet,
  Text,
  View,
  Navigator
} from 'react-native';

import styles from './app/styles/styles';
import SignIn from './app/components/SignIn';

class BartrMobile extends Component {
  render() {
    return (
      <Navigator
        initialRoute={{name: 'Sign In', index: 0}}
        renderScene={(route, navigator) =>
          <SignIn
            name={route.name}
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
    );
  }
}


AppRegistry.registerComponent('BartrMobile', () => BartrMobile);
