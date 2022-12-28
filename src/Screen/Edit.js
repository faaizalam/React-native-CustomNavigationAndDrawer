import { Button, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { useEffect } from 'react'
import HeaderAndDrawer from './HeaderAndDrawer'
import AntDesign from 'react-native-vector-icons/AntDesign';
import { TextInput } from 'react-native-gesture-handler'

const Edit = ({ navigation, route }) => {
    useEffect(() => {
        console.log(route.params.t)
    }, [])
    return (
        <>
            <HeaderAndDrawer name={"Edit"} navigation={navigation} />
            <View style={{ borderColor: "gray", borderWidth: 1, margin: 4, }}>
                <TextInput style={{ fontSize: 18 }} placeholder='your name'></TextInput>

            </View>
            <View style={{ borderColor: "gray", borderWidth: 1, margin: 4 }}>
                <TextInput style={{ fontSize: 18 }} placeholder='your Time'></TextInput>

            </View>
            <View style={{ borderColor: "gray", borderWidth: 1, margin: 4, padding: 5 }}>
                <TextInput
                    //   style={styles.textArea}
                    style={{ height: 150, justifyContent: "flex-start", fontSize: 18 }}
                    underlineColorAndroid="transparent"
                    placeholder="Your Description"
                    placeholderTextColor="grey"
                    numberOfLines={10}
                    multiline={true}
                />

            </View>
            <View style={{ margin: 5 }}>
                <View style={{ margin: 5 }} >
                    <Button
                        color="green"
                        title="Save"
                        onPress={() => Alert.alert('Simple Button pressed')}
                    />

                </View>
                <View style={{ margin: 5 }}>

                    <Button
                        color="red"
                        title="Press me"
                        onPress={() => Alert.alert('Simple Button pressed')}
                    />
                </View>
                <View style={{ width: "100%", display: "flex", marginTop:25,marginRight:30, alignItems: "flex-end" }}><TouchableOpacity style={{ color: "white", display:"flex",alignContent:"center", marginTop: 3,height:60,  borderRadius: 25, width: 60, backgroundColor: "blue" }}><AntDesign name="plus" size={58} color="black"></AntDesign></TouchableOpacity></View>
            </View>

        </>
    )
}

export default Edit

const styles = StyleSheet.create({})