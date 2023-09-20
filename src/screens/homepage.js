import { View, Text, SafeAreaView, Image, ScrollView , TextInput } from "react-native";
import React , {useState} from "react";
import Ionicons from "@expo/vector-icons/Ionicons";

export default function homepage({ navigation }) {
    const [searchQuery, setSearchQuery] = useState('');
    const [filteredProducts, setFilteredProducts] = useState([]);
  
  const products = [
    {
      id: 1,
      itemName: "Lenovo Laptop",
      location: "Building XYZ",
      imageURL:
        "https://images.unsplash.com/photo-1491472253230-a044054ca35f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8bGFwdG9wJTIwY29tcHV0ZXJ8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60",
      timeAgo: "26 mins ago",
      category: "Laptop"
    },
    {
      id: 2,
      itemName: "Mobile",
      location: "Building ABC",
      imageURL:
        "https://images.unsplash.com/photo-1567581935884-3349723552ca?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8bW9iaWxlfGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60",
      timeAgo: "30 mins ago",
      category: "Mobile"
    },
    {
      id: 3,
      itemName: "Spectacles",
      location: "Building DEF",
      imageURL:
        "https://firebasestorage.googleapis.com/v0/b/rnapp-c89e4.appspot.com/o/3b88edd4-c0ad-4511-929e-eabc61796829.jpeg?alt=media&token=ff59a944-f81d-4cde-a7a2-1270dbb041da",
      timeAgo: "1 Day ago",
      category: "Human"
    },
    {
      id: 4,
      itemName: "Mouse",
      location: "Building GHI",
      imageURL:
        "https://images.unsplash.com/photo-1615663245857-ac93bb7c39e7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8bW91c2V8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60",
      timeAgo: "1 Month ago",
      category: "Accessories"
    },
  ];

  return (
    <ScrollView>
      
      <View className="flex flex-col mt-20 bg-purple-800 h-[100px] w-[344px] mx-auto rounded-md">
        <View className="flex flex-row mx-4 mt-5 justify-between ">
          <Text className="text-2xl font-bold text-white">Lost an item</Text>
          <Ionicons
            name="add-circle-outline"
            color="lightblue"
            size={30}
            className=""
            onPress={() => navigation.navigate("Lost Item")}
          />
        </View>
        <Text className=" mx-4  mt-1 text-white">
          Create an ad and let your friends know
        </Text>
      </View>
      <View className="flex flex-col mt-5 bg-purple-800 h-[100px] w-[344px] mx-auto rounded-md">
        <View className="flex flex-row mx-4 mt-5 justify-between ">
          <Text className="text-2xl font-bold text-white">Found an item</Text>
          <Ionicons
            name="add-circle-outline"
            color="lightblue"
            size={30}
            className=""
            onPress={() => navigation.navigate("Found Item")}
          />
        </View>
        <Text className=" mx-4  mt-1 text-white">
          Create an ad and let your friends know
        </Text>
      </View>
      <View className="flex flex-row justify-between  mx-6 mt-9">
        <Text className="text-2xl">Search Lost Items </Text>
        <Ionicons name="search-outline" size={30} color="black" />
      </View>
      {products.map((product) => (
        <View className="mt-5 h-[130px] w-[344px] bg-gray-200 mx-auto rounded-xl flex flex-row justify-between">
          <View className="mx-4 mt-3">
            <Text className="text-sm">{product.timeAgo}</Text>
            <Text className="text-xl font-bold text-emerald-800">
              {product.itemName}
            </Text>
            <View className="flex flex-row relative top-8">
              <Ionicons name="location-outline" size={18} color="black" />
              <Text className="">Category : {product.category}</Text>
            </View>
          </View>
          <View className="mr-3 my-auto">
          <Image source={{ uri: product.imageURL }}
              height={100}
              width={100}
              className="rounded-md"
            />
          </View>
        </View>
      ))}
    </ScrollView>
  );
}
