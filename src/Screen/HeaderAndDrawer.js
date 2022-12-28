import { useNavigation } from '@react-navigation/native';
import React from 'react'
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import { View, Text,StyleSheet, TouchableOpacity } from 'react-native'
// import Home from './Home';

const HeaderAndDrawer = (props) => {
 const {navigate}=useNavigation()
  const GoBACK=()=>{
    console.log(props)
     
    props.navigation.openDrawer()
 
 
  }

  return (
    <View  style={style.Footer}>  
    {/* <TouchableOpacity onPress={GoBACK}> */}
   {/* <View><Text><FontAwesome5 name='hamburger' size={4} color="black" ></FontAwesome5></Text></View> */}
    <View style={style.names}  ><Text ><FontAwesome5 onPress={GoBACK} name='hamburger' size={30} color="black"  ></FontAwesome5></Text>< Text style={{color:"black",fontSize:23,marginLeft:10}}>{props.name}</Text></View>
    {/* </TouchableOpacity> */}
    </View>
  )
}

const style=StyleSheet.create({

  names:{
   display:"flex",
  //  backgroundColor:"gary",
    fontSize:25,
    flexDirection:"row",
     textAlign:"center",
    width:90,
   marginTop:10,
    // margin:20,
   
    color:"black",
    
          // fontSize:22,
          
        },
        Footer:{
          width:"100%",
          height:80,
          // borderRadius:6,
          padding:10,
          backgroundColor:"#900C3F",
          color:"black",
          
        },
      



})


export default HeaderAndDrawer