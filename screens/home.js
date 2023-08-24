// HomeScreen.js
import React, {useState, useEffect} from 'react';
import { View, Text, StyleSheet, ScrollView} from 'react-native';
import { Svg, Circle } from 'react-native-svg';
import Icon from 'react-native-vector-icons/FontAwesome';
import Popup from './Popup';
import * as firebase from 'firebase/app';
import 'firebase/database';
import { getDatabase, onValue, ref } from 'firebase/database';

const CircularProgress = ({ size, strokeWidth, percentage, color }) => {
  const radius = (size - strokeWidth) / 2;
  const circumference = 2 * Math.PI * radius;
  const progress = percentage * circumference / 100;

  return (
    <Svg width={size} height={size}>
      <Circle
        cx={size / 2}
        cy={size / 2}
        r={radius}
        fill="none"
        stroke={color}
        strokeWidth={strokeWidth}
      />
        <Circle
        cx={size / 2}
        cy={size / 2}
        r={radius}
        fill="none"
        stroke="red"
        strokeWidth={strokeWidth}
        strokeDasharray={circumference}
        strokeDashoffset={circumference - progress}
        strokeLinecap="round"
      />
    </Svg>
  );
};

const HomeScreen = () => {
  
  const [userData, setUserData] = useState([]);
  const [entryCount, setEntryCount] = useState(0);
  const [appCount, setAppCount] = useState(0);
  const [percentageIncr, setPercentageIncr] = useState(0);
  //pop up for user to input their info
  const [isPopupVisible, setIsPopupVisible] = useState(false);
  const db = getDatabase();

  useEffect( () => {
    const starCountRef= ref(db, 'users/'); 

    onValue(starCountRef, (snapshot) => {
      const data = snapshot.val(); 
      //linking the data and pulling so it can be read onto the GUI
      const newPost= Object.keys(data).map(key => ({
          id: key, 
          ...data[key]
      }));
      //display info on gui 
      setUserData(newPost);
       //manipulating the app count
      setAppCount(newPost.length); 
      setPercentageIncr(percentageIncr + 10);
      
      if (percentageIncr ===100){
        setPercentageIncr(100);
      }
    });
  }, []);
  
  const togglePopup = () => {
    setIsPopupVisible(!isPopupVisible);
  };

  return (
    <View style={styles.container}>
       <View style = {{flex: 0.001}}/>
       <Text style={{ position: 'fixed', top: 175, left: -8, fontSize:75, textAlign:'center', justifyContent:'center'}}> {appCount}</Text>
      <CircularProgress size={255} strokeWidth={10} percentage={percentageIncr} color="lightgray" justifyContent="center">
       </CircularProgress>

      <View style = {{flex: 0.2}}/>
      <ScrollView>
            <Text> App Downloads from Store 0145: {'\n'} </Text>
            { 
              userData.map((item, index) => {
                return (
                  <View key={index}>
                    <Text style = {styles.text}> {item.id} </Text>
                     </View>
                )

            })
          }
      </ScrollView>
       
      <View style = {{flex: 0.02}}/>

        <Icon  style ={styles.IconPlus}name="plus" size={30} color="gray" onPress={togglePopup} /> 
      
      <Popup isVisible={isPopupVisible} onClose={togglePopup} />

    </View>

  )
  };

const styles = StyleSheet.create({
    container : {
        flex: 1,
        backgroundColor: 'white',
        alignItems: 'center',
        justifyContent: 'center',
    }, 

    IconPlus: {
      left: -2,
      borderRadius: 15, 
      borderColor: "black", 
      borderWidth: 1,
      padding: 10,
      justifyContent: 'center',
    }, 

    text: {
      fontSize: 20, 
      fontFamily: 'Arial', 
      textAlign: 'center',
    }
});

export default HomeScreen;
