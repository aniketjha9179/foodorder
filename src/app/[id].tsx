import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { useLocalSearchParams } from 'expo-router'

const product = () => {
  const {id}=useLocalSearchParams();
  return (
    <View>
      <Text>product for id:{id} </Text>
    </View>
  )
}

export default product

const styles = StyleSheet.create({})