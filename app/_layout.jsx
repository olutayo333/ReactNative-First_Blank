import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { Stack } from 'expo-router'
import Ionicons from '@expo/vector-icons/Ionicons';
//import Ionicons from '@expo/vector-Ionicons';

//import Icon from 'react-native-ionicons'
//import Ionicons from '@react-native-vector-icons/ionicons'
//import react-native-ionicons
//import Ionicicons from '@react-native-ionicons'
const RootLayout = () => {
  return (
    <Stack >
        <Stack.Screen name='index' options={{headerShown:false}} />
        <Stack.Screen name='image_gallery' options={{headerTitle:"Layout", 
            headerRight:()=>(
                <TouchableOpacity onPress={()=>router.push('image_gallery')}>
                    <Text style={{color:'blue', textAlign:'center'}}> View Image Gallery </Text>
                    
                </TouchableOpacity>
                 
                // <Ionicons name="house" color="#ff0000" size={20} />
                
            )
        }} 

        />
    </Stack>
  )
}

export default RootLayout

const styles = StyleSheet.create({})