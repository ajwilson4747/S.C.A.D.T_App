// ProfileScreen.js
import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';

const ProfileScreen = () => {
  return (
    <View style = {styles.container}>
        <Image style = {styles.logoHolder} source = {require('/Users/anthony_wilson/Desktop/S.C.A.D.T/my-app/assets/logo.png')}/> 
        <View style={{flex: 0.05}}/>
        <Text style = {styles.appTitle}> S.C.A.D.T </Text>
        <View style={{flex: 0.09}}/>
        <Text  style = {styles.appInfo}> This app was created to record actual data for Store 0145 
            La Verne, California. Data that is being recorded for the purpose of the app 
            is the name, employeeNumber, and date of which the user (employee) has submitted an app download. 
        </Text>
        <View style={{flex: 0.5}}/>
        <Text style = {styles.creation}> *App was created by A.J.Coders* </Text>
        <View style={{flex: 0.02}}/>
        <Image style = {styles.brand} source = {require('/Users/anthony_wilson/Desktop/S.C.A.D.T/my-app/assets/brand.png')}/>
    </View>
  );
};


const styles = StyleSheet.create({
    container : {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    }, 

    logoHolder: {
      alignItems: 'center',
      borderWidth: 0.2, 
      borderColor: 'black', 
      borderRadius: 50,
      width: 90, 
      height:90, 
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    },

    appTitle :{
        fontFamily: 'Arial',
        fontSize: 18,
    },

    appInfo: {
        padding: 25,
        letterSpacing: 0.02,
        textAlign: 'center',
        
    },

    creation: {
        fontStyle: 'italic'
    },

    brand : {
      alignItems: 'center',
      width: 30, 
      height:30, 
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    }
  });

export default ProfileScreen;
