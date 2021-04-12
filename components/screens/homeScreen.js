import React,{useState , useEffect} from 'react';
import {
  View,
  StyleSheet,
  Text,
  Button,
  TouchableOpacity
} from "react-native";
import MapView, { PROVIDER_GOOGLE ,Marker } from "react-native-maps";
import { mapStyle } from "../constants/mapStyle.json";
import Geolocation from "react-native-geolocation-service";
import MarkerIcon from '../reusables/svg/MarkerIcon';
import MapIcon from '../reusables/svg/MapIcon.svg';
function HomeScreen({navigation}) {
 const [state , setState] = useState({
  latitude: 0,
  longitude:0,
  coordinates: [],
 });
  console.log(state.latitude , 'lat');
 useEffect(() => {
  Geolocation.getCurrentPosition(
    position => {
      setState({
        latitude: position.coords.latitude,
        longitude: position.coords.longitude,
        coordinates: state.coordinates.concat({
          latitude: position.coords.latitude,
          longitude: position.coords.longitude
        })
      });
    },
    error => {
      Alert.alert(error.message.toString());
    },
    {
      showLocationDialog: true,
      enableHighAccuracy: true,
      timeout: 20000,
      maximumAge: 0
    }
  );
  Geolocation.watchPosition(
    position => {
      setState({
        latitude: position.coords.latitude,
        longitude: position.coords.longitude,
        coordinates: state.coordinates.concat({
          latitude: position.coords.latitude,
          longitude: position.coords.longitude
        })
      });
    },
    error => {
      console.log(error);
    },
    {
      showLocationDialog: true,
      enableHighAccuracy: true,
      timeout: 20000,
      maximumAge: 0,
      distanceFilter: 0
    }
  );
 }, []);
  return (
  <View style={styles.container}>
   <MapView
    provider={PROVIDER_GOOGLE}
    customMapStyle={mapStyle}
    style={styles.map}
    initialRegion={{
      latitude: state.latitude,
      longitude: state.longitude,
         latitudeDelta: 0.0922,
         longitudeDelta: 0.0421
        }}>
          <Marker
         
        coordinate={{
          latitude: state.latitude,
          longitude: state.longitude,
        }}>
    </Marker>
        </MapView>
        <View style={styles.current_location}>
          <View>
          <MapIcon/>
          </View>
         <View>
           <Text style={styles.current_location_text}>
            Locate Me
           </Text>
         </View>
        </View>
        <View style={styles.address_area}>
          <View style={styles.address_title}>
          <Text style={styles.address_title_text}>Address Details</Text>
          </View>
          <View style={styles.address_subtitle}>
          <Text style={styles.address_subtitle_text}>Enter Point or pinpoint your address on the map</Text>
          </View>
          <View style={styles.address_bar}>
          <Text style={styles.address_bar_text}> 
           1st main 4th Cross Alkos 1, Dubai Street address or map details shown here
          </Text>
          </View>
          <TouchableOpacity onPress={() =>
        navigation.navigate('Final')} style={styles.appButtonContainer}>
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
  map: {
    flex:1,
    backgroundColor: '#ecf0f1',
    
    ...StyleSheet.absoluteFillObject,
  },
  current_location:{
    display:'flex',
    flexDirection:'row',
    width: 116,
    height: 33,
    left: 300,
    top: 368,
    backgroundColor: '#F5F5F8',
    borderRadius: 8
  },
  current_location_text:{
    position:'relative',
    top:10,
    left:5,
    fontFamily: 'Rubik',
    fontStyle: 'normal',
    fontWeight: "500",
    fontSize: 12,
    lineHeight: 14,
    textAlign: 'center',
    color: '#2787FF'
  },
  address_area:{
    position: 'absolute',
    width: '100%',
    height: 441,
    left: 0,
    top: 419,
    backgroundColor: '#FFFFFF',
    borderTopRightRadius:24,
    borderTopLeftRadius:24
   
  },
  address_title:{
 position:'relative',
 top:20,
 left:15,
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
  address_subtitle:{
    position:'relative',
    top:40,
    left:15,
    
     },
     address_subtitle_text:{
      fontFamily: 'Rubik',
      fontStyle: 'normal',
      fontWeight: 'normal',
      fontSize: 14,
      lineHeight: 17,      
      color: 'rgba(37, 37, 37, 0.6)'
      
     },
     address_bar:{
      position:'relative',
    top:80,
    left:15,
     },
     address_bar_text:{
      fontFamily: 'Rubik',
      fontStyle: 'normal',
      fontWeight: 'normal',
      fontSize: 14,
      lineHeight: 17,
      color: '#252525'
      
     },
     appButtonContainer: {
       position:'relative',
       top:100,     
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
export default HomeScreen;