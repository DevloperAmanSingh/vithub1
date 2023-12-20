import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  Keyboard,
  ScrollView,
  Alert,
  TouchableOpacity,
  Image,
} from "react-native";
import * as ImagePicker from "expo-image-picker";
import * as FileSystem from "expo-file-system";
import React,{useState} from "react";
import Button from "../components/Button";
import Input from "../components/Input";
import Loader from "../components/Loader";
import { Ionicons } from "@expo/vector-icons";
import COLORS from "../../utils/color";
import { db, storage } from "../../firebase-config";
import { collection, addDoc } from "firebase/firestore";
import {
  getStorage,
  ref,
  uploadBytes,
  uploadBytesResumable,
} from "firebase/storage";
const ItemLostName = ({navigation}) => {
  const [errors, setErrors] = React.useState({});
  const [loading, setLoading] = React.useState(false);
  const [items, setItems] = useState([]);
  const [selectedImage, setSelectedImage] = React.useState("");
  const [inputs, setInputs] = React.useState({
    itemName: "",
    description: "",
    contactInfo: "",
  });
  const [localImageUrl, setLocalImageUrl] = React.useState(null);

  const validate = async () => {
    Keyboard.dismiss();
    let isValid = true;
    if (!inputs.itemName) {
      handleError("Please enter the ItemName", "itemName");
      isValid = false;
    }
    if (!inputs.description) {
      handleError("Please enter description", "description");
      isValid = false;
    }
    if (inputs.description.length < 10) {
      handleError("Please enter longer description", "description");
      isValid = false;
    }
    if (!inputs.contactInfo) {
      handleError("Please enter your phone number", "contactInfo");
      isValid = false;
    }
    if (inputs.contactInfo.length < 10 || inputs.contactInfo.length > 10) {
      handleError("Please enter valid phone number", "contactInfo");
      isValid = false;
    }
    if (isValid) {
      addItem(inputs.itemName, inputs.description, inputs.contactInfo);
    }
  };
  const addItem = async (itemName, description, contactInfo) => {
    try {
        setLoading(true);
        const time = new Date().getTime();
        const docRef = await addDoc(collection(db, "lostitems"), {
        itemName: itemName,
        description: description,
        contactInfo: contactInfo,
        imageUrl: localImageUrl,
        time: time,
      });
      uploadMedia();
      console.log("Document written with ID: ", docRef.id);
      setLoading(false);
      Alert.alert(
            "Item Added",
            "Your item has been added successfully",
            [
                {
                    text: "OK",
                    onPress: () => navigation.navigate("LostPage")  
                }
            ]
        )
    } catch (e) {
      console.error("Error adding document: ", e);
    }
  };

  const pickImageAsync = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      allowsEditing: true,
      quality: 1,
    });
    if (!result.canceled) {
      const url = result.assets[0].uri.toString();
      const match = url.match(/\/([^/]+)\.jpeg$/);
      const filename = `${match[1]}`;
      setSelectedImage(result.assets[0].uri);
      setLocalImageUrl(filename);
      console.log("File uri -> " + url);
      console.log("File id -> " + filename);
    } else {
      alert("You did not select any image.");
    }
  };
  const uploadMedia = async () => {
    try {
      console.log("Selected Image: " + selectedImage);
      const { urii } = await FileSystem.getInfoAsync(selectedImage);
      const blob = await new Promise((resolve, reject) => {
        const xhr = new XMLHttpRequest();
        xhr.onload = () => {
          resolve(xhr.response);
        };
        xhr.onerror = (e) => {
          reject(new TypeError("Netowrk rrequest filed"));
        };
        xhr.responseType = "blob";
        xhr.open("GET", selectedImage, true);
        xhr.send(null);
      });
      const storageRef = ref(storage, `lostItems/${localImageUrl}`);
      await uploadBytes(storageRef, blob).then((snapshot) => {
        console.log("Uploaded a blob or file!");
      });
    } catch (e) {
      console.log(e);
    }
  };

  const handleOnchange = (text, input) => {
    setInputs((prevState) => ({ ...prevState, [input]: text }));
  };

  const handleError = (error, input) => {
    setErrors((prevState) => ({ ...prevState, [input]: error }));
  };

  return (
    <ScrollView style={{ backgroundColor: COLORS.white, flex: 1 }}>
      <Loader visible={loading} />
      <View style={{ paddingTop: 50, paddingHorizontal: 20 }}>
        <Text
          style={{
            color: "black",
            fontSize: 25,
            textAlign: "center",
            marginTop: 30,
            marginBottom: 30,
            fontWeight: "bold",
          }}
        >
          Fill The Form for Lost Items
        </Text>
        <View className="my-[20px]">
          <Input
            onChangeText={(text) => handleOnchange(text, "itemName")}
            onFocus={() => handleError(null, "itemName")}
            iconName="albums-outline"
            label="Item Name"
            placeholder="Enter your Item Name"
            error={errors.itemName}
          />
          <Input
            onChangeText={(text) => handleOnchange(text, "description")}
            onFocus={() => handleError(null, "description")}
            iconName="albums-outline"
            label="Description"
            placeholder="Enter your description"
            error={errors.description}
          />
          <Input
            onChangeText={(text) => handleOnchange(text, "contactInfo")}
            onFocus={() => handleError(null, "contactInfo")}
            iconName="call-outline"
            label="Contact"
            placeholder="Enter your Contact Number"
            error={errors.contactInfo}
          />
          {/* <T</Text> */}
          <TouchableOpacity onPress={pickImageAsync}>
            <View style={styles.imageUploadContainer}>
              {selectedImage ? (
                <Image
                  source={{ uri: selectedImage }}
                  style={styles.uploadedImage}
                />
              ) : (
                <>
                  <Ionicons name="image-outline" size={50} color="#aaa" />
                  <Text style={styles.uploadText}>Upload Item Image</Text>
                </>
              )}
            </View>
          </TouchableOpacity>
          <Button title="Add Item" onPress={validate}/>
        </View>
      </View>
    </ScrollView>
  );
};

export default ItemLostName;

const styles = StyleSheet.create({
  container: {
    padding: 20,
  },

  imageUploadContainer: {
    alignItems: "center",
    justifyContent: "center",
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 5,
    padding: 10,
    marginBottom: 15,
  },
  uploadedImage: {
    width: 100,
    height: 100,
    borderRadius: 5,
  },
});
