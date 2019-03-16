import React , { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import NaviBar from './src/components/NaviBar';
// import { Icon } from 'react-native-elements';
export default class App extends Component {
  render() {
    return (
      <View style={styles.container}>
        <NaviBar>
          <Text>GGGGGGGGGGGGGGGGGGGGGGGGG!</Text>
        </NaviBar>
        <View style={styles.mainview}>
          <Text>Open up App.js to start working on your app!</Text>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#555555',
    // alignItems: 'center',
    // justifyContent: 'center',
  },
  mainview: {
    flex: 8,
    // backgroundColor: '#555555',
    // alignItems: 'center',
    // justifyContent: 'center',
  },
  // navigactionbar: {
  //   flex: 1,
  //   backgroundColor: "#333333"
  // }
});