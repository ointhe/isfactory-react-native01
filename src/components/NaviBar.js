import React , { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
function NaviBar(){
    return (
        <View style={styles.navibar}>
        <Text style={{paddingLeft: 15, paddingTop: 10, flex: 1,}}>
          <Ionicons name='ios-menu' size={40} color="black"/>
        </Text>
        <Text style={styles.navibarmain}> BOSO </Text>
        <Text style={{textAlign:'center', paddingTop: 10, flex: 1.5,}}>
          <Ionicons name='md-compass' size={40} color="black"/>
        </Text>
        </View>
    );
}
const styles = StyleSheet.create({
    navibar: {
      backgroundColor: '#FFFFFF',
      flex:1, 
      paddingTop: 20,
      flexDirection: 'row',
      
    },
    navibarmain:{
      textAlign:'center',
      flex: 8,
      fontSize: 40 ,
      color: '#000000',
      fontWeight: 'bold',
    }
});

export default NaviBar;