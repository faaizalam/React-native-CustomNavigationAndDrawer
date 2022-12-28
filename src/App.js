// import 'react-native-gesture-handler';
import React from 'react'
// import 'react-native-gesture-handler';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';
// import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from './Screen/Home'
import Product from './Screen/Product';
import CustomeDrawer from './Component/CustomeDrawer';
import Edit from './Screen/Edit';

const Stack = createDrawerNavigator();
export default function App() {
  // const Stack=createNativeStackNavigator()
  return (
    
    
    <NavigationContainer>
    
      <Stack.Navigator  drawerContent={props => <CustomeDrawer {...props}/>}   screenOptions={{headerShown:false}} initialRouteName='Home'>
        <Stack.Screen   component={Home} name="Home" />

 <Stack.Screen component={Product} name="Product"/>
 <Stack.Screen component={Edit} name="Edit"/>
         </Stack.Navigator>
         </NavigationContainer>
          

 
  )
}
