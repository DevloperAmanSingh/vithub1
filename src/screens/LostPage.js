import { View, Text, SafeAreaView, Image, ScrollView , TextInput , StyleSheet , TouchableOpacity } from "react-native";
import React , {useState} from "react";
import Ionicons from "@expo/vector-icons/Ionicons";

export default function LostPage({ navigation }) {
    const [searchQuery, setSearchQuery] = useState('');
    const [filteredProducts, setFilteredProducts] = useState([]);
    const [searchText, setSearchText] = useState('');

  const handleSearch = () => {
    // Implement your search functionality here
    console.log('Searching for:', searchText);
  };

  const products = [
    {
      id: 1,
      itemName: "Charger",
      location: "Building XYZ",
      imageURL:
        "https://images.unsplash.com/photo-1586254116951-5263e2cdb44c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fGNoYXJnZXJ8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60",
      timeAgo: "2 Days ago",
      category: "Accessories"
    },
    {
      id: 2,
      itemName: "Power Cable",
      location: "Building ABC",
      imageURL:
        "https://images.unsplash.com/photo-1599709173342-d754b32df17d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8cG93ZXIlMjBjYWJsZXxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60",
      timeAgo: "3 Hr ago",
      category: "Accessories"
    },
    {
      id: 3,
      itemName: "Watter Bottle",
      location: "Building DEF",
      imageURL:
        "https://images.unsplash.com/photo-1568395216634-ab1b1e848751?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxjb2xsZWN0aW9uLXBhZ2V8NnwtVUdrcm5jcEdqMHx8ZW58MHx8fHx8&auto=format&fit=crop&w=500&q=60",
      timeAgo: "4 Day ago",
      category: "Accessories"
    },
    {
      id: 4,
      itemName: "PenDrive",
      location: "Building GHI",
      imageURL:
        "https://media.istockphoto.com/id/182516754/photo/usb-flash-drive.webp?b=1&s=170667a&w=0&k=20&c=C6KJac90SD3shC382nJXY5OoW-JMbyfbSIv9jCx7t9k=",
      timeAgo: "1 Month ago",
      category: "Accessories"
    },
  ];

  return (
    <ScrollView className="bg-blue-200">
      <View className="flex flex-col mt-4 bg-blue-800 h-[104px] w-[344px] mx-auto rounded-md">
        <View className="flex flex-row mx-4 mt-5 justify-between ">
          <Text className="text-2xl font-bold text-white">Lost an item</Text>
          <Ionicons
            name="add-circle-outline"
            color="lightblue"
            size={30}
            className=""
            onPress={() => navigation.navigate("lostform")}
          />
        </View>
        <Text className=" mx-4  mt-1 text-white">
          Raise a ticket here to let your friends know or Search below in the list of items.
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
        <View className="mt-5 h-[130px] w-[344px] mb-2  bg-gray-200 mx-auto rounded-xl flex flex-row justify-between">
          <View className="mx-4 mt-3">
            <View className="flex flex-row items-center">
          <Ionicons name="time-outline" size={15} color="black" />
            <Text className="text-sm">{product.timeAgo}</Text>
          </View>
            <Text className="text-xl font-bold text-blue-800">
              {product.itemName}
            </Text>
            <View className="flex flex-row relative top-8">
              <Ionicons name="location-outline" size={18} color="black" 
               />
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