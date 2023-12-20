import { View, Text , TouchableOpacity } from 'react-native'
import React from 'react'
import Button from '../components/Button'
import COLORS from '../../utils/color'

const ProfilePage = ({navigation}) => {
  return (
    <View className="mt-5">
        <Text className="text-center font-bold mb-5 text-2xl text-indigo-500 underline underline-offset-1">Your Profile Information</Text>
      <View className="border border-y-sky-900 stroke-lime-300 flex flex-row justify-between mx-4 py-4 px-5">
        <Text className="text-lg">Name:</Text>
        <Text className="text-lg">Aman Singh</Text>
      </View>
      <View className="border mt-4 border-y-sky-900 stroke-lime-300 flex flex-row justify-between mx-4 py-4 px-5">
        <Text className="text-lg">Register No.</Text>
        <Text className="text-lg">23BCE0346</Text>
      </View>
      <View className="border mt-4 border-y-sky-900 stroke-lime-300 flex flex-row justify-between mx-4 py-4 px-5">
        <Text className="text-lg">Address.</Text>
        <Text className="text-lg">L Block 413</Text>
      </View>
      {/* <View className="border mt-4 border-y-sky-900 stroke-lime-300 flex flex-row justify-between mx-4 py-4 px-5">
        <Text className="text-lg">VIT Email Id</Text>
        <Text className="text-lg">aman.singh2023@vitstudent.ac.in</Text>
      </View> */}
      <View className="border mt-4 border-y-sky-900 stroke-lime-300 flex flex-row justify-between mx-4 py-4 px-5">
        <Text className="text-lg">Gender</Text>
        <Text className="text-lg">Male</Text>
      </View>
      <View className="border mt-4 border-y-sky-900 stroke-lime-300 flex flex-row justify-between mx-4 py-4 px-5">
        <Text className="text-lg">Mobile</Text>
        <Text className="text-lg">9234469110</Text>
      </View>

      {/* Logout button */}
      <TouchableOpacity
      activeOpacity={0.7}
      style={{
        height: 55,
        width: '50px',
        marginHorizontal: 40,
        backgroundColor: COLORS.blue,
        marginVertical: 20,
        justifyContent: 'center',
        alignItems: 'center',
      }}>
      <Text style={{color: COLORS.white, fontWeight: 'bold', fontSize: 18}} onPress={() => {
        navigation.replace('Login')
      }}>
        Logout
      </Text>
    </TouchableOpacity>
    </View>
  )
}

export default ProfilePage