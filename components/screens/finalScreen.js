import React,{useState , useEffect} from 'react';
import {
  View,
  StyleSheet,
  Text,
  Button,
  TouchableOpacity,
  TextInput
} from "react-native";
import MapIcon from '../reusables/svg/MapIcon.svg';

function FinalScreen({navigation}) {
 
  return (
  <View style={styles.container}>
  <View style={styles.mapLocation}>
    <View style={styles.mapLocation_titlearea}>
      <Text style={styles.mapLocation_title}>
        Map Location
      </Text>
    </View>
    <View style={styles.mapLocation_textarea}>
        <View>
          <MapIcon/>
        </View>

      <Text style={styles.mapLocation_text}>
      1st main 4th Cross Alkos 1, Dubai Street address or map details shown here
      </Text>
    </View>
  </View>

        <View style={styles.address_area}>
          <View style={styles.address_title}>
          <Text style={styles.address_title_text}>Enter Your Address</Text>
          </View>
          <View style={styles.text_input}>
          <Text style={styles.labelText}>What do you Call this address</Text>
            <View style={styles.text_input_area}>
            
            <TextInput  style={styles.text_input_typo} defaultValue="home , work ,or other"/>
            </View>
           
          </View>
          <View style={styles.text_input}>
         
            <View style={styles.text_input_area}>
            
            <TextInput  style={styles.text_input_typo} defaultValue="House No, Villa No , Apartment no,"/>
            </View>
           
          </View>
        <View style={styles.text_input}>
         
         <View style={styles.text_input_area}>
         
         <TextInput  style={styles.text_input_typo} defaultValue="Street Name"/>
         </View>
        
       </View>
       <View style={styles.doubleInputArea}>
       <View style={styles.text_input}>
         
         <View style={styles.text_input_area}>
         
         <TextInput  style={styles.text_input_typo} defaultValue="Area"/>
         </View>
        
       </View>
       <View style={styles.text_input}>
         
         <View style={styles.text_input_area}>
         
         <TextInput  style={styles.text_input_typo} defaultValue="City"/>
         </View>
        
       </View>
       </View>
        
          <TouchableOpacity onPress={() =>
        navigation.navigate('Home')} style={styles.appButtonContainer}>
    <Text style={styles.appButtonText}>Continue</Text>
  </TouchableOpacity>
          
        </View>
     </View>   
   
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    
    borderTopRightRadius:30,
    
  },
 
 
  mapLocation:{
    top: 15,
    left: 14,
    width: 332,
    height: 20,
  },
  mapLocation_textarea:{
    display:'flex',
    flexDirection:'row',
    justifyContent:'space-evenly',
    top:35
   },
   mapLocation_titlearea:{
   top:20,
    left: 14,
     
   },
  mapLocation_title:{
    fontFamily: 'Rubik',
    fontStyle: 'normal',
    fontWeight: 'normal',
    fontSize: 16,
    lineHeight: 19,
    display: 'flex',
    alignItems: 'center',
    color:'#252525'
  },
  mapLocation_text:{
    width:266,
    fontFamily: 'Rubik',
fontStyle: 'normal',
fontWeight: 'normal',
fontSize: 14,
lineHeight: 17,
color: 'rgba(37, 37, 37, 0.6)'


  },
  address_area:{
    position: 'absolute',
    width: '100%',
    height: 541,
    left: 0,
    top: 219,
    backgroundColor: '#FFFFFF',
    borderTopRightRadius:24,
    borderTopLeftRadius:24
   
  },
  address_title:{
 position:'relative',
 top:20,
 left:15,
 marginBottom:20,
  },
  address_title_text:{
fontFamily: 'Rubik',
fontStyle: 'normal',
fontWeight: 'normal',
fontSize: 16,
lineHeight: 19,
display: 'flex',
alignItems: 'center',
color: '#252525'

  },
  text_input:{
   marginTop:20
  },
  text_input_area:{
    position:'relative',
    width: '90%',
    height: 44,
    
    top:10,
    marginHorizontal:20,
    
    backgroundColor: '#F1F7FF',
    borderWidth:0.5,
    borderStyle:'solid',
    borderColor:'#C9E0FF',
    
    borderRadius: 10,
  },
  text_input_typo:{
    fontFamily: 'Rubik',
fontStyle: 'normal',
fontWeight: 'normal',
fontSize: 14,
lineHeight: 17,
display: 'flex',
alignItems: 'center',
color: '#252525'
  },
     labelText:{
      fontFamily: 'Rubik',
      fontStyle: 'normal',
      fontWeight: 'normal',
      fontSize: 14,
      lineHeight: 17,
      display: 'flex',
      alignItems: 'center',
      color: '#252525',
      left:17
      
     },
     doubleInputArea:{
      
       width:'92%',
       marginHorizontal:'auto',
       display:'flex',
       flexDirection:'row',
       justifyContent:'space-between'
       
     },
     appButtonContainer: {
       position:'relative',
       top:50,     
      width:'90%',
      elevation: 3,
      backgroundColor: "#2787FF",
      borderRadius: 8,
      paddingVertical: 25,
      paddingHorizontal: 12,
      marginHorizontal:20
    },
    appButtonText: {
      fontSize: 18,
      color: "#fff",
      fontWeight: "bold",
      alignSelf: "center",
      
    }
   
 });
export default FinalScreen;