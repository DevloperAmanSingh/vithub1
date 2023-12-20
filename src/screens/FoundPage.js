import { View, Text, SafeAreaView, Image, ScrollView , TextInput , StyleSheet , TouchableOpacity } from "react-native";
import React , {useState} from "react";
import Ionicons from "@expo/vector-icons/Ionicons";
export default function FoundPage({ navigation }) {
    const [searchQuery, setSearchQuery] = useState('');
    const [filteredProducts, setFilteredProducts] = useState([]);
    const [searchText, setSearchText] = useState('');

  const handleSearch = ({navigation}) => {
    // Implement your search functionality here
    console.log('Searching for:', searchText);
  };

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
    <ScrollView className="bg-blue-200">
      <View className="flex flex-col mt-4 bg-blue-800 h-[104px] w-[344px] mx-auto rounded-md">
        <View className="flex flex-row mx-4 mt-5 justify-between ">
          <Text className="text-2xl font-bold text-white">Found an item</Text>
          <Ionicons
            name="add-circle-outline"
            color="lightblue"
            size={30}
            className=""
            onPress={() => navigation.navigate("founditem")}
          />
        </View>
        <Text className=" mx-4  mt-1 text-white">
          Raise a ticket here to let your friends know or Search for lost items below.
        </Text>
      </View>
      <View style={styles.searchBoxContainer}>
      <TextInput
        style={styles.searchInput}
        placeholder="Search..."
        placeholderTextColor="#888"
        onChangeText={setSearchText}
        value={searchText}
      />
      <TouchableOpacity style={styles.searchButton} onPress={handleSearch}>
        <Ionicons name="search" size={24}  />
      </TouchableOpacity>
    </View>
      {products.map((product) => (
        <View className="mt-5 h-[130px] w-[344px] bg-gray-200 mx-auto rounded-xl flex flex-row justify-between" 
        
        >
          <View className="mx-4 mt-3">
            <View className="flex flex-row items-center" >
          <Ionicons name="time-outline" size={15} color="black" />
            <Text className="text-sm">{product.timeAgo}</Text>
          </View>
            <Text className="text-xl font-bold text-blue-800">
              {product.itemName}
            </Text>
            <View className="flex flex-row relative top-8">
              <Ionicons name="location-outline" size={18} color="black"   />
              <Text className="">Category: {product.category}</Text>
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
const styles = StyleSheet.create({
    searchBoxContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: '#f5f5f5',
        borderRadius: 10, // Rounded corners
        paddingHorizontal: 10,
        elevation: 3, 
        marginHorizontal:10,
        marginTop:20// Add a subtle shadow for a flat look
      },
      searchInput: {
        flex: 1,
        paddingVertical: 10,
        paddingLeft: 10,
        fontSize: 16,
        color: '#333',
      },
      searchButton: {
        // backgroundColor: 'white',
        padding: 10,
        borderRadius: 30, // Rounded corners
      },
    
  });