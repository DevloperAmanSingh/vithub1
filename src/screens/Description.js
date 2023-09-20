import { StyleSheet, Text, View } from 'react-native'
import React  from 'react'
import {useRoute} from '@react-navigation/native'
const Description = (props) => {
    const route = useRoute();
  return (
    <View>
      <Text>{route.params.aman}</Text>
    </View>
  )
}

export default Description

const styles = StyleSheet.create({})