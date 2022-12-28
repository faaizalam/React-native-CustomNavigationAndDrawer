import { AsyncStorage, StatusBar, StyleSheet, Text, TextInput, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import AntDesign from 'react-native-vector-icons/AntDesign';
import HeaderAndDrawer from './HeaderAndDrawer';
import { useNavigation } from '@react-navigation/native';

const Home = ({navigation}) => {
  const [user, Setuser] = useState('')
    console.log(user)
   const {navigate}=useNavigation()
   const [loading ,setLoading]=useState(false)

  const SaveInfo = async() => {
    setLoading(true)
    await AsyncStorage.setItem("user", JSON.stringify(user))
    
    const res =await AsyncStorage.getItem("user")
    if (res.length>=4) {
      setLoading(false)
      navigate("Product")
      
    }else{
      console.log("less")
    }

      
    

  }

 
   
    // const findfun = async() => {
    //   try {
    //     const res =await AsyncStorage.getItem("user")
      
    //     return res
       
        
        
      
        
    //   } catch (error) {
    //     console.log("ee")
        
    //   }
        
       

    //     // console.log(res.then((x)=>x.name),"kk")
      
    // }
    // useEffect(()=>{
      // const h=(async()=>{
      //   let v= await findfun()
      //   console.log("ll",v)
      // })
     




  
  return (
    <>
      <StatusBar hidden />
      <HeaderAndDrawer name={"Home"} navigation={navigation} ></HeaderAndDrawer>
      <View style={styles.main}>

      <View style={styles.container}>
        <Text style={styles.Textlable}> ENTER YOUR NAMEE </Text>
        <TextInput value={user} style={styles.inputInto} onChangeText={(text) => Setuser(text)} placeholder="Enter your name" />
        {/* <MaterialIcons name='credit-card' size={54} color="black"  /> */}


        {/* {user._j.length>=4?<Text><AntDesign name='arrowright' size={54} color="black" onPress={SaveInfo}  />{user._j}</Text>:""} */}
        {user.length >= 4 ? <Text><AntDesign name='arrowright' size={54} color="black" onPress={SaveInfo}  />{user}</Text> : <Text>kk</Text>}
        {loading&&<Text><AntDesign name='loading1' size={54} color="black"></AntDesign></Text>}
        
       

      </View>
      </View>
    </>
  )
}

export default Home

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: "center",
    height: 200,
    // backgroundColor:"green",
    width: 300,




  },
  Textlable: {
    fontSize: 20,
    // width:200,
    // backgroundColor:"red",
    marginRight: 80

  },
  inputInto: {
    borderWidth: 2,
    width: 280,
    height: 40,
    borderRadius: 10,
    paddingLeft: 15,
    Colors: "black",
    fontSize: 20

  },
  main:{
    display:'flex',
    justifyContent:'center',
    alignItems:"center",
    height: "100%",
    backgroundColor:`#dcdcdc`
    

}
})
