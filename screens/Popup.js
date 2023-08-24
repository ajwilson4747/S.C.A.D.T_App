import React, { useState } from 'react';
import { View, Text, TouchableOpacity, TextInput, StyleSheet } from 'react-native';
import Modal from 'react-native-modal';
import * as firebase from 'firebase/app';
import 'firebase/database';
import { getDatabase, ref, set } from 'firebase/database';

import { useSharedState, SharedStateProvider } from '/Users/anthony_wilson/Desktop/S.C.A.D.T/my-app/screens/SharedState.js';

// My web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAw5mUeCwclfuGWSxD8fpc8Az9gBU7You0",
  authDomain: "scad-d6f87.firebaseapp.com",
  projectId: "scad-d6f87",
  storageBucket: "scad-d6f87.appspot.com",
  messagingSenderId: "590142680092",
  appId: "1:590142680092:web:6749a6910fe2524195c3d9"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

//start of config of popup modal 
const Popup = ({ isVisible, onClose }) => {

   //create variables that will hold specific info when submitting an app download 
   //their name, employee number, if the customer entered our zip, and secretly submit the date
  const [inputText, setInputText] = useState('');
  const [employeeText, setEmployeeText] = useState('');
  const [zipText, setZipText] = useState('');
  const currentDate = new Date().getDate();
  const previousDate = new Date().setDate(currentDate - 1);

  //create a function that will compartmentalize the data for submission
  function storeData(inputText, employeeText, zipText, currentDate) {
    //pull databases from firebase
    const db = getDatabase();
    //link to appropriate database that the info will be store to
    const reference = ref (db, 'users/' + inputText);

    //tell the data that it will be store in specific parameters from the database 
    set (reference, {
        EmployeeNumber: employeeText, 
        ZipResponse: zipText, 
        currentDate: currentDate, 
    });

    //set variables to empty again 
    setInputText(''); 
    setEmployeeText(''); 
    setZipText(''); 

    //delete all data from previous day
    if (previousDate != currentDate) {
        //delete all content from database from previous day
        ref('/users').remove();
    }
} //end of function 
  return (
    <Modal isVisible={isVisible}>
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <View style={{ backgroundColor: 'white', padding: 20, borderRadius: 10 }}>
          <Text style = {styles.headerText}> Want to Report an App Download? {'\n'}{'\n'} Please fill out the following info: </Text>
          <View style = {{flex: 0.08}}/> 
          <View style = {{flex: 0.08}}/> 
          <TextInput
          style={{
          borderWidth: 1,
          borderColor: 'gray',
          padding: 8,
          }}
          value={inputText}
          onChangeText={setInputText}
          placeholder="Name"
          />

          <View style = {{flex: 0.08}}/> 

          <TextInput
          style={{
          borderWidth: 1,
          borderColor: 'gray',
          padding: 8,
          }}
          value={employeeText}
          onChangeText={setEmployeeText}
          placeholder="Employee # "
          />

          <View style = {{flex: 0.15}}/> 
          <Text style = {styles.zipText}> Did you see them put in their zipcode? </Text>
          <TextInput
          style={{
          borderWidth: 1,
          borderColor: 'gray',
          padding: 8,
          }}
          value={zipText}
          onChangeText={setZipText}
          placeholder="Yes or No"
          />
          <View style = {{flex: .04}}/> 
          <View style = {{flex: .04}}/> 
          <TouchableOpacity onPress={onClose}>
            <Text style = {styles.submitBtn} onPress={ () => storeData(inputText, employeeText, zipText, currentDate.toString())}>Submit</Text>
          </TouchableOpacity>
          <View style = {{flex: .04}}/> 
          <View style = {{flex: .04}}/> 
          <Text style={styles.reportAppAgain}> **If you are reporting another app download, please do this format: "YourName_App#."** {'\n'}
              {'\n'} Example: "John_1"  {'\n'}  {'\n'}  {'\n'}  {'\n'}
          </Text>
          <TouchableOpacity onPress={onClose}>
            <Text style={styles.exitModal}>Close</Text>
          </TouchableOpacity>
        </View>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
    headerText: {
        fontSize: 20, 
        textAlign: "center",
    },

    zipText: {
        fontSize: 16, 
        textAlign: 'center',
    },
    submitBtn: {
        color: "darkblue", 
        fontSize: 25, 
        textAlign: 'center'
    },
    reportAppAgain: {
        fontSize: 10, 
        padding: 2, 
        color: 'blue',
        textAlign:'center'
    }, 
    exitModal:{
        textAlign:'center',
        fontStyle: 'italic',
        fontSize: 20
    }
});
export default Popup;