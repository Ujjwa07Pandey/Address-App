import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { Button, View , Text } from 'react-native';
import HomeScreen from './../screens/homeScreen';
import FinalScreen from './../screens/finalScreen';
import { TouchableOpacity } from "react-native";
import Backicon from '../reusables/svg/Backicon.svg';
import SearchBar from '../reusables/SearchBar.js';
const Stack = createStackNavigator();

export const  AppNavigator = () => (


    <Stack.Navigator
    initialRouteName="Home"
   
  >
     <Stack.Screen
      name="Home"
      component={HomeScreen}
      options={{
      headerTitle: props => <View><SearchBar/></View> ,
      headerStyle: {
        height:90,
        backgroundColor: '#2787FF',
        elevation: 0,
        shadowOpacity: 0,
        borderBottomWidth: 0,
        
      
      },
      
      headerTintColor: '#ffffff',

      }}
    />
       <Stack.Screen
      name="Final"
      component={FinalScreen}
      options={({navigation}) => ({
        headerLeft: (props) => (
          <HeaderBackButton
            {...props}
            onPress={() => navigation.navigate('Home')}
          />
        ),
   })}
      options={({navigation}) => ({
headerLeft: props => <View style={{left:20}} ><Backicon onPress={() => navigation.navigate('Home')}/></View>,
        headerTitle: props => <View><Text style={{
          fontFamily: 'Rubik',
fontStyle: 'normal',
fontWeight: 'normal',
fontSize: 16,
lineHeight: 19,
display: 'flex',
alignItems: 'center',
color: '#FFFFFF'

        }}>My Address</Text></View> ,
        headerStyle: {
          height:90,
          backgroundColor: '#2787FF',
          elevation: 0,
          shadowOpacity: 0,
          borderBottomWidth: 0,
          
        
        },
        
        headerTintColor: '#ffffff',
  
        })}
    />
   
    
    
   
    
   
  </Stack.Navigator>
);
