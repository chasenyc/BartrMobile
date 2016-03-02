import React, {
  Component,
  TextInput,
  View,
  Text,
  TouchableHighlight
} from 'react-native';
import styles from '../styles/styles'
export default class Inventory extends Component {

  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    return (
        <View
          onSwipeBegin={ () => {console.log('test')} }
          style={styles.container}>
          <Text style={styles.welcome}>Inventory</Text>
        </View>
    )
  }
}
