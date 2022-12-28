import { View, Text, ImageBackground,Image } from 'react-native'
import React from 'react'
import { DrawerContentScrollView, DrawerItemList } from '@react-navigation/drawer'

export default function CustomeDrawer(props) {
//     <View style={{flex:1,backgroundColor:"lightgreen"}}>
//     <View><ImageBackground source={require("../assest/download.jpg")} style={{ top:0,flexBasis:1 ,opacity:9 ,padding:10,flex:1,justifyContent:"center",alignItems:"center"}}></ImageBackground></View>
//    <DrawerContentScrollView {...props} contentContainerStyle={{backgroundColor:"green",height:200,top:50}}>
//     <DrawerItemList {...props}>

//     </DrawerItemList>

//    </DrawerContentScrollView>
//     </View>

  return (
    // <View style={{flex:1,backgroundColor:"lightgreen"}}>
       <View style={{flex:1,backgroundColor:"#900C3F"}}>
    <ImageBackground source={require("../assest/th.jpg")} style={{padding:10,height:150}}>
        <Image style={{flex:1,borderRadius:40,width:80,height:70,marginBottom:10}} source={require("../assest/faaiz.jpg")} />
        <Text style={{color:"white",fontWeight:"bold"}}>Faaiz Alam</Text>
        <Text style={{color:"white",fontWeight:"bold"}}>Experince:2 years</Text>
        </ImageBackground>
   <DrawerContentScrollView {...props} contentContainerStyle={{backgroundColor:"#BF2893",borderColor:"black",borderBottomEndRadius:30}}>
    <DrawerItemList  {...props}>

    </DrawerItemList>

   </DrawerContentScrollView>
    </View>
  )
}