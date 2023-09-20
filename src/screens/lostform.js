import React, { useState , useEffect } from 'react';
import firebase  from 'firebase/compat/app'
import  'firebase/compat/storage';
import { View, Text, TextInput, Button, StyleSheet , Image , TouchableOpacity , Pi, ScrollView } from 'react-native';
import * as ImagePicker from 'expo-image-picker';
import * as FileSystem from'expo-file-system'
// import Button from '../components/Button';
import Input from '../components/Input';
import { Dropdown } from 'react-native-element-dropdown';
import { Ionicons } from '@expo/vector-icons';
import { getFirestore, collection, addDoc, serverTimestamp } from 'firebase/firestore';
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import lostModel from '../../models/lostModel';
import axios from 'axios';
const LostItemForm = () => {
  const [value , setValue ] = useState('none')
  const [itemName, setItemName] = useState('');
  const[url,setUrl] = useState(null);
  const[locationInfo,setlocationInfo] = useState('')
  const [itemDescription, setItemDescription] = useState('');
  const [contactInfo, setContactInfo] = useState('');
  const [selectedImage, setSelectedImage] = useState(null);
  const db = getFirestore();

  const handleSubmit = async () => {
    try {
      console.log(value,itemName,url,locationInfo,itemDescription,contactInfo,selectedImage)
      const nmk = await fetch("https://5692-2409-40f4-3d-1e97-749d-28ff-939d-c07b.ngrok-free.app/found", {
     
      // Adding method type
      method: "POST",
       
      // Adding body or contents to send
      body: JSON.stringify({
        "name": itemName,
        "category": value,
        "description": itemDescription,
        "imageURL": url,
        "location": locationInfo,
        "contact": contactInfo
      }),

  })
   
  // Converting to JSON
  .then(response => response.json())
   
  // Displaying results to console
  .then(json => console.log(json));

    // Check if creates contains the created item or response
    // if (creates) {
      console.log('Item created:');
      // Reset your form fields and state
      setItemName('');
      setItemDescription('');
      setContactInfo('');
      setSelectedImage(null);
      console.log('doneeee');
    // } else {
      // console.error('Error creating item. Response is undefined or null.');
    // }
  } catch (error) {
    console.error('Error adding document: ', error);
  }

  };
  


  
  const pickImageAsync = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      allowsEditing: true,
      quality: 1,
    })
    if (!result.canceled) {
        setSelectedImage(result.assets[0].uri);
        console.log(result);
        uploadMedia();
      } else {
        alert('You did not select any image.');
      }
  }
const [image,setImage] = useState(null);
const [uploaing , setUploading] = useState(false);
// const auth = firebase.auth();
const [user, setUser] = useState(null);



const firebaseConfig = {
  apiKey: "AIzaSyBS6I4bn3vj9pTZ6GDEL2zjUDhS4vtEORc",
  authDomain: "rnapp-c89e4.firebaseapp.com",
  projectId: "rnapp-c89e4",
  storageBucket: "rnapp-c89e4.appspot.com",
  messagingSenderId: "929063365529",
  appId: "1:929063365529:web:d0d4dbfb813905bc980108",
  measurementId: "G-WTHQ0KKLTE"
};
const app = firebase.initializeApp(firebaseConfig);
  const data = [
    { label: 'Mobile', value: '1' },
    { label: 'Laptop', value: '2' },
    { label: 'Electronic Accessories', value: '3' },
    { label: 'Stationary', value: '4' },
    { label: 'Bag', value: '5' },
    { label: 'Other Items', value: '6' },
  ];
 
  
  const uploadMedia = async () => {
    setUploading(true)
    try{
      const {uri} = await FileSystem.getInfoAsync(selectedImage);
      const blob = await new Promise((resolve,reject) =>{
        const xhr = new XMLHttpRequest();
        xhr.onload = () => {
          resolve(xhr.response)
        };
        xhr.onerror = (e) => {
          reject(new TypeError('Netowrk rrequest filed'))
        };
        xhr.responseType = 'blob'
        xhr.open('GET' , uri , true);
        xhr.send(null);
      })
      const fileName = selectedImage.substring(selectedImage.lastIndexOf('/')+1);
      const ref = firebase.storage().ref().child(fileName);
      await ref.put(blob)
      // get url 
      const url = await ref.getDownloadURL().then(setUrl(url))
      // setUrl(url);
      console.log(url)
      setUploading(false)
    } catch(e) {
      console.log(e)
    }
  }
  return (
    <ScrollView>
    <View style={styles.container}>
        <View>
            <Text className="text-2xl font-bold text-start mx-auto items-cente mt-5 mb-16"> Fill up the form </Text>
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
      <Text style={styles.label}>Location:</Text>
      <TextInput
        style={styles.input}
        value={locationInfo}
        onChangeText={setlocationInfo}
        placeholder="Enter location of found items"
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
      <Button title="Submit" onPress={handleSubmit} />
    </View>
    </ScrollView>
  );
          }

const styles = StyleSheet.create({
  container: {
    padding: 20,
  },
  label: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 2,
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
