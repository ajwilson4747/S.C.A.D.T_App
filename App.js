import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image } from 'react-native';
import firebase from 'firebase/app';
import 'firebase/database';
import Icon from 'react-native-vector-icons/FontAwesome';



//for bottom nav
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

//import tab pages
// Import your screen components
import HomeScreen from '/Users/anthony_wilson/Desktop/S.C.A.D.T/my-app/screens/home.js';
import ProfileScreen from '/Users/anthony_wilson/Desktop/S.C.A.D.T/my-app/screens/profile.js';
import QRScreen from '/Users/anthony_wilson/Desktop/S.C.A.D.T/my-app/screens/qr.js';

const Tab = createBottomTabNavigator();

const firebaseConfig = {
  apiKey: "AIzaSyAw5mUeCwclfuGWSxD8fpc8Az9gBU7You0",
  authDomain: "scad-d6f87.firebaseapp.com",
  databaseURL: "https://scad-d6f87-default-rtdb.firebaseio.com/users",
  projectId: "scad-d6f87",
  storageBucket: "scad-d6f87.appspot.com",
  messagingSenderId: "590142680092",
  appId: "1:590142680092:web:6749a6910fe2524195c3d9"
};



const data = {
  name: "",
  employeeNumber: 0,
  zipcodeResponse: "", 
  date: "",
  
  // Other data fields
};




export default function App() {
  
  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen name="About" component={ProfileScreen} options={{
      tabBarLabel: 'About',
      tabBarIcon: ({ color, size }) => (
        <Icon name="info" color={'red'} size={size} />
      ),
      
    }}  />
        <Tab.Screen name="Home" component={HomeScreen} options={{
      tabBarLabel: 'Home',
      // You can also set tabBarIcon here
      tabBarIcon: ({ color, size }) => (
        <Icon name="home" color={'red'} size={size} />
      ),
    }} />
        <Tab.Screen name="QR Codes" component={QRScreen} options={{
      tabBarLabel: 'QR Codes',
      tabBarIcon: ({ color, size }) => (
        <Icon name="qrcode" color={'red'} size={size} />
      ),
    }}/>
        
      </Tab.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
