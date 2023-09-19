import { View, Text, SafeAreaView,Image, ScrollView } from 'react-native'
import React from 'react'
import Ionicons from '@expo/vector-icons/Ionicons';

export default function homepage() {
  return (
    <ScrollView>
        {/* <View className="flex flex-row mt-12 justify-between mx-6">
        <Ionicons name="reorder-four-outline" size={24} color="black" />
        <Text className="text-xl font-bold">Home</Text>
        <Ionicons name="notifications-outline" size={24} color="black" />
      </View>
      <View>
        <Text className="text-2xl font-bold text-start mx-6 mt-12">
          Welcome{" "}
          <Text className="text-2xl text-green-600 ">
            Aman
          </Text>
        </Text>
      </View> */}
      {/* make a card with lost an item and big search emoji */}
      <View className="flex flex-col mt-20 bg-purple-800 h-[100px] w-[344px] mx-auto rounded-md">
        <View className="flex flex-row mx-4 mt-3 justify-between ">
            <Text className="text-2xl font-bold text-white">Lost an item</Text>
            <Ionicons name='add-circle-outline' size={30} className=""/>
        </View>
    <Text className=" mx-4  mt-1 text-white">Found an item in the vit campus. Get that item to right person</Text>
      </View>
      <View className="flex flex-row justify-between  mx-6 mt-10">
        <Text className="text-3xl">Found Items </Text>
        <Ionicons name='search-outline' size={30} color='black' />
      </View>
      {/* <ScrollView horizontal={false} style={{ marginTop: 10 }}> */}
      <View className="mt-10 h-[130px] w-[344px] bg-gray-300 mx-auto rounded-xl flex flex-row justify-between">
        <View className="mx-4 mt-5">
            <Text className="text-2xl">Laptop</Text>
        </View>
        <View className="mx-4 my-auto">
            <Image source={{uri: "https://images.unsplash.com/photo-1491472253230-a044054ca35f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8bGFwdG9wJTIwY29tcHV0ZXJ8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60"}} height={100} width={100} className="rounded-md" /> 
        </View>
      </View>
      <View className="mt-5 h-[130px] w-[344px] bg-gray-300 mx-auto rounded-xl flex flex-row justify-between">
        <View className="mx-4 mt-5">
            <Text className="text-2xl">Mobile</Text>
        </View>
        <View className="mx-4 my-auto">
            <Image source={{uri: "https://images.unsplash.com/photo-1567581935884-3349723552ca?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8bW9iaWxlfGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60"}} height={100} width={100} className="rounded-md" /> 
        </View>
      </View>
      <View className="mt-5 h-[130px] w-[344px] bg-gray-300 mx-auto rounded-xl flex flex-row justify-between">
        <View className="mx-4 mt-5">
            <Text className="text-2xl">Spectacles</Text>
        </View>
        <View className="mx-4 my-auto">
            <Image source={{uri: "https://images.unsplash.com/photo-1483412468200-72182dbbc544?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8c3BlY3RhY2xlc3xlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60"}} height={100} width={100} className="rounded-md" /> 
        </View>
      </View>
      <View className="mt-5 h-[130px] w-[344px] bg-gray-300 mx-auto rounded-xl flex flex-row justify-between">
        <View className="mx-4 mt-5">
            <Text className="text-2xl">Mouse</Text>
        </View>
        <View className="mx-4 my-auto">
            <Image source={{uri: "https://images.unsplash.com/photo-1615663245857-ac93bb7c39e7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8bW91c2V8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60"}} height={100} width={100} className="rounded-md" /> 
        </View>
      </View>
      {/* </ScrollView> */}
    </ScrollView>
  )
}