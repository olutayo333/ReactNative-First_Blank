import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Appp from '../App'
import Ionicons from '@expo/vector-icons/Ionicons';
const image_gallery = () => {
  return (
    <View>
      <Text>Welcome To Image Gallery</Text>
      <Ionicons name="checkmark-circle" size={32} color="green" />
      <Ionicons name="house" color="#ff0000" size={30} />
      {/* <Appp/> */}
    </View>
  )
}

export default image_gallery

const styles = StyleSheet.create({})