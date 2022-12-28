import { View, Text, AsyncStorage } from 'react-native'
import React, { useEffect, useState } from 'react'
import AntDesign from 'react-native-vector-icons/AntDesign';
import HeaderAndDrawer from './HeaderAndDrawer'
import { dailyDAta } from '../Component/Data';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { useNavigation } from '@react-navigation/native';

export default function Product({navigation}) {
  const {navigate}=useNavigation()

  const [Username,Setname]=useState("")
  const [loading ,setLoading]=useState(false)
useEffect(()=>{
  
  const Getinfo=(async()=>{
    setLoading(true)
    
    Setname(await AsyncStorage.getItem("user"))

    setLoading(false)


  })()

},[])


const OnTaskclick=(()=>{
  navigate("Edit",{t:"faaiz"})

})



  return (
    <>
    <HeaderAndDrawer name={"Product"} navigation={navigation} />
    <View style={{height:"100%",display:"flex",alignItems:"center"}}>
    {loading&&<Text><AntDesign name='loading1' size={54} color="black"></AntDesign></Text>}
    {Username?<View style={{fontSize:30,width:"100%",height:60,display:"flex",alignItems:"center" }}><Text style={{fontSize:30}} >{Username}</Text></View>:<View><Text>Plase Enter the your name</Text></View>}
    <View style={{backgroundColor:"red",width:"100%",height:"65%", display:"flex",padding:5 , flexDirection:"row",flexWrap:"wrap"}}>
      {dailyDAta.map((x,index)=>(
        <TouchableOpacity onPress={OnTaskclick} style={{borderColor:'black',borderWidth:1,marginLeft:1 ,width:190,backgroundColor:"white"}} key={index}>
       <Text style={{fontSize:20,margin:2}}> name: {x.name}</Text>
        <Text style={{fontSize:20,margin:2}}>Duration: {x.duration}</Text>
        <Text style={{fontSize:20,margin:2}}>Descripton: {x.description}</Text>
        {/* <Text>{Date.now()}</Text> */}
        </TouchableOpacity>


      ))}
      </View>
      <View style={{width:"100%", display:"flex",alignItems:"flex-end"}}><TouchableOpacity  style={{color:"white",textAlign:"right",marginRight:3,marginTop:3,borderRadius:20 ,width:50,backgroundColor:"blue"}}><AntDesign name="plus" size={54} color="black"></AntDesign></TouchableOpacity></View>
    </View>
    </>
  )
}