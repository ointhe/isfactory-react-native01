import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

import { createStackNavigator, createAppContainer } from 'react-navigation';

import FirstPage from './components/pages/First';

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.navigator = null;
  }
  render() {
    
      const routeConfig = {
        First: {
          screen: FirstPage,
          path: 'first',
        },
        // Second: {
        //   screen: SecondPage,
        //   path: 'second',
        // },
      };
    const Navigator = createStackNavigator(routeConfig, {
      initialRouteName: startPage,
      header: null,
      headerMode: 'none',
      navigationOptions: {
        header: null,
      },
    });
    const AppContainer = createAppContainer(Navigator);
    return (
      <View style={styles.container}>
        <Text>Open up App.js to start working on your app!</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // backgroundColor: '#fff',
    // alignItems: 'center',
    // justifyContent: 'center',
  },
});
