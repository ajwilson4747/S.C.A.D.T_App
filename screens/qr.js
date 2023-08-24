// qr.js
import React from 'react';
import { View, Text, StyleSheet, Image} from 'react-native';

const qr = () => {
  return (
    <View style = {styles.container}>
      <Text style = {styles.headerText}> Have someone interested in downloading the Staples Connect App ? 
        {'\n'} {'\n'}Display these QR codes to them and explain the benefits of having it! 
      </Text>
      <View style = {{flex: 0.2}}/>
      <Image style = {styles.playImage} source = {require('/Users/anthony_wilson/Desktop/S.C.A.D.T/my-app/assets/play.png')}/> 
      <View style = {{flex: 0.2}}/>
      <Image style = {styles.playImage} source = {require('/Users/anthony_wilson/Desktop/S.C.A.D.T/my-app/assets/apple.png')}/> 
    </View>
  );
};

const styles = StyleSheet.create({

  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  headerText: {
      fontSize: 20, 
      textAlign: "center",
      padding: 10,
  },

  playImage: {
    width: 150, 
    height: 150, 
    justifyContent: 'center',
    alignItems: 'center',
    alignItems: 'center',
  }
});

export default qr;
