import React from 'react';
import {
  View,
  StyleSheet,
  Text,
} from "react-native";
import Backicon from '../reusables/svg/Backicon.svg';
import SearchIcon from '../reusables/svg/SearchIcon.svg';
function SearchBar() {
 
  return (
    <View style={styles.container}>
      <View styles={styles.icon}>
          <Backicon/>
    </View>
    <View style={styles.search_bar}>
        <View style={styles.rectangle}>
          <Text style={styles.search_text}>
              Search Location...
          </Text>
        
        </View>
        <View styles={styles.search_icon}>
              <SearchIcon/>
          </View>
    </View>
    </View>
  );
}
const styles = StyleSheet.create({
 
    container:{
     display:'flex',
     flexDirection:'row',
     paddingBottom:5,
     left:10,


    },
   icon:{
       alignItems:'center',
       marginTop:20
   },
  search_bar: {
   display:'flex',
   flexDirection:'row',
    position: 'absolute',
    width: 288,
    height: 44,
    left:50,
    backgroundColor: '#FFFFFF',
    borderWidth: 0.5,
    borderStyle:'solid',
    borderColor:'#C9E0FF',
    borderRadius: 10
  },
 rectangle:{
    display:'flex',
    flexDirection:'row',
    width: 250,
    height: 28,
    
    
 },
 search_text:{
     top:12,
     left:20,
    fontFamily: 'Rubik',
    fontStyle: 'normal',
    fontWeight: 'normal',
    fontSize: 14,
    lineHeight: 17,
    display: 'flex',
    alignItems: 'center',
    color: 'rgba(37, 37, 37, 0.5)'
 },
 search_icon:{
    
 }
});

export default SearchBar;
