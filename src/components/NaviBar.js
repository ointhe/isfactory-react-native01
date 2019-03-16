import React , { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';
// import FontAwesome, { Icons } from 'react-native-fontawesome';
import { Icon } from 'react-native-elements';
function NaviBar(){
    return (
        <View style={styles.navibar}>
        <Text style={{margin: 10, fontSize: 30, textAlign: 'left'}}>
          <Icon name='listUl' type='font-awesome'/>
        </Text>
        <Text> NaviBar!! </Text>
        <Text> NaviBar!! </Text>
        </View>
    );
}
const styles = StyleSheet.create({
    navibar: {
      backgroundColor: '#E82C0C',
      flex:1, 
      paddingTop: 20,
      flexDirection: 'row',
    },
});

export default NaviBar;