import React, { useState } from 'react';
import { initializeApp } from "@react-native-firebase/app";
import { getStorage, ref, uploadBytes , storage} from '@react-native-firebase/storage';
import { View, Text, TextInput, Button, StyleSheet , Image , TouchableOpacity , Pi } from 'react-native';
import * as ImagePicker from 'expo-image-picker';
import { Dropdown } from 'react-native-element-dropdown';
import { Ionicons } from '@expo/vector-icons';
const LostItemForm = () => {
  const [value , setValue ] = useState('none')
  const [itemName, setItemName] = useState('');
  const [itemDescription, setItemDescription] = useState('');
  const [contactInfo, setContactInfo] = useState('');
  const [selectedImage, setSelectedImage] = useState(null);

  const handleSubmit = () => {
    // Handle form submission logic here
    console.log('Item Name:', itemName);
    console.log('Item Description:', itemDescription);
    console.log('Contact Info:', contactInfo);
  };
  const pickImageAsync = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      allowsEditing: true,
      quality: 1,
    })
    if (!result.canceled) {
        setSelectedImage(result.assets[0].uri);
        console.log(result);
        uploadImage(result.assets[0].uri, result.assets[0].fileName);
      } else {
        alert('You did not select any image.');
      }
  }

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBS6I4bn3vj9pTZ6GDEL2zjUDhS4vtEORc",
  authDomain: "rnapp-c89e4.firebaseapp.com",
  projectId: "rnapp-c89e4",
  storageBucket: "rnapp-c89e4.appspot.com",
  messagingSenderId: "929063365529",
  appId: "1:929063365529:web:d0d4dbfb813905bc980108",
  measurementId: "G-WTHQ0KKLTE"
};

// Initialize Firebase
// const app = initializeApp(firebaseConfig);
  const data = [
    { label: 'Mobile', value: '1' },
    { label: 'Laptop', value: '2' },
    { label: 'Electronic Accessories', value: '3' },
    { label: 'Stationary', value: '4' },
    { label: 'Bag', value: '5' },
    { label: 'Other Items', value: '6' },
  ];

  const uploadImage = async (uri, imageName) => {
    const reference = storage().ref(`images/${imageName}`);
  
    try {
      const response = await fetch(uri);
      const blob = await response.blob();
      await reference.put(blob);
      const downloadURL = await reference.getDownloadURL();
      console.log('Image uploaded:', downloadURL);
      return downloadURL;
    } catch (error) {
      console.error('Error uploading image:', error);
      return null;
    }
  };
  
  

  return (
    <View style={styles.container}>
        <View>
            <Text className="text-2xl font-bold text-start mx-auto items-cente mt-20 mb-16"> Fill up the form </Text>
        </View>
        <Text style={styles.label}>Category:</Text>
        <Dropdown
        style={styles. dropdown}
        placeholderStyle={styles.placeholderStyle}
        selectedTextStyle={styles.selectedTextStyle}
        inputSearchStyle={styles.inputSearchStyle}
        iconStyle={styles.iconStyle}

        data={data}
        search
        maxHeight={300}
        labelField="label"
        valueField="value"
        placeholder="Select item"
        searchPlaceholder="Search..."
        value={value}
        onChange={item => {
          setValue(item.value);
        }}
      />
      <Text style={styles.label}>Item Name:</Text>
      <TextInput
        style={styles.input}
        value={itemName}
        onChangeText={setItemName}
        placeholder="Enter item name"
      />

      <Text style={styles.label}>Item Description:</Text>
      <TextInput
        style={[styles.input]}
        value={itemDescription}
        onChangeText={setItemDescription}
        placeholder="Enter item models , color , brand name along with full information"
        multiline
      />

      <Text style={styles.label}>Contact Info:</Text>
      <TextInput
        style={styles.input}
        value={contactInfo}
        onChangeText={setContactInfo}
        placeholder="Enter your contacts informations"
      />
      <TouchableOpacity onPress={pickImageAsync}>
        <View style={styles.imageUploadContainer}>
          {selectedImage ? (
            <Image source={{ uri: selectedImage }} style={styles.uploadedImage} />
          ) : (
            <>
              <Ionicons name="image-outline" size={50} color="#aaa" />
              <Text style={styles.uploadText}>Upload Item Image</Text>
            </>
          )}
        </View>
      </TouchableOpacity>

      



      <Button title="Submit"  />

      {/* Add any additional UI elements or styles as needed */}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 20,
  },
  label: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 5,
  },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
    padding: 10,
    marginBottom: 15,
    fontSize: 16,
  },
  imageUploadContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
    padding: 10,
    marginBottom: 15,
  },
  uploadedImage: {
    width: 100,
    height: 100,
    borderRadius: 5,
  },
  uploadText: {
    fontSize: 16,
    color: '#aaa',
    marginTop: 10,
  },
  dropdown: {
    margin: 16,
    height: 50,
    borderBottomColor: 'gray',
    borderBottomWidth: 0.5,
  },
  icon: {
    marginRight: 5,
  },
  placeholderStyle: {
    fontSize: 16,
  },
  selectedTextStyle: {
    fontSize: 16,
  },
  iconStyle: {
    width: 20,
    height: 20,
  },
  inputSearchStyle: {
    height: 40,
    fontSize: 16,
  },

});

export default LostItemForm;
