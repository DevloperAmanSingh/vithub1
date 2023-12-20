// import AsyncStorage from '@react-native-async-storage/async-storage';
import React, {useEffect,useState} from 'react';
import {
  View,
  Text,
  SafeAreaView,
  Keyboard,
  ScrollView,
  Alert,
} from 'react-native';
import {  getIdToken } from "firebase/auth";
import app from '../../firebase-config';
import COLORS from '../../utils/color';
import firebase from 'firebase/compat/app';
import Button from '../components/Button';
import Input from '../components/Input';
import Loader from '../components/Loader';
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";

const RegistrationScreen = ({navigation}) => {
  const [inputs, setInputs] = React.useState({
    email: '',
    fullname: '',
    phone: '',
    password: '',
    registerNo:''
  });
  const [errors, setErrors] = React.useState({});
  const [loading, setLoading] = React.useState(false);

  const validate = () => {
    Keyboard.dismiss();
    let isValid = true;

    if (!inputs.email) {
        handleError('Please input email', 'email');
        isValid = false;
      } else if (!inputs.email.match(/\S+@vitstudent\.ac\.in$/)) {
        handleError('Please input a valid email ending with @vitstudent.ac.in', 'email');
        isValid = false;
      }
      

    if (!inputs.fullname) {
      handleError('Please input fullname', 'fullname');
      isValid = false;
    }

    if (!inputs.phone) {
      handleError('Please input phone number', 'phone');
      isValid = false;
    }

    if (!inputs.password) {
      handleError('Please input password', 'password');
      isValid = false;
    } else if (inputs.password.length < 5) {
      handleError('Min password length of 5', 'password');
      isValid = false;
    }
    if (!inputs.registerNo) {
        handleError('Please input valid register number', 'registerNo');
        isValid = false;
    }

    if (isValid) {
        registerUser(inputs.email,inputs.password);
    }
  };
  const auth = getAuth(app);
  const checkIfUserExists = async (email) => {
    try {
      const auth = getAuth(app);
            const signInMethods = await fetchSignInMethodsForEmail(auth, email);
  
      if (signInMethods && signInMethods.length > 0) {
        return true;
        console.log("User alredy exist")
      } else {
        return false;
        console.log("User not exist")
      }
    } catch (error) {
      console.error('Error checking if user exists:', error);
      return false;
    }
  };
  
    const registerUser = async (email, password) => {
        try {
            setLoading(true);
            const auth = getAuth();
            createUserWithEmailAndPassword(auth, email, password)
                .then((userCredential) => {
                    const user = userCredential.user;
                    Alert.alert("Registeration success")
                    navigation.replace('Homescreen ')
                    setLoading(false);
                })
                .catch((error) => {
                    const errorCode = error.code;
                    const errorMessage = error.message;
                    Alert.alert(errorMessage)
                });
        }catch(err){
            console.log(err)
        }}
  

  const handleOnchange = (text, input) => {
    setInputs(prevState => ({...prevState, [input]: text}));
  };
  const handleError = (error, input) => {
    setErrors(prevState => ({...prevState, [input]: error}));
  };

  return (
    <SafeAreaView style={{backgroundColor: COLORS.white, flex: 1}}>
      <Loader visible={loading} />
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{paddingTop: 50, paddingHorizontal: 20}}>
        <Text style={{color: COLORS.black, fontSize: 40, fontWeight: 'bold'}}>
          Register
        </Text>
        <View style={{marginVertical: 20}}>
          <Input
            onChangeText={text => handleOnchange(text, 'email')}
            onFocus={() => handleError(null, 'email')}
            iconName="email-outline"
            label="Email"
            placeholder="Enter your vit mail address"
            error={errors.email}
          />

          <Input
            onChangeText={text => handleOnchange(text, 'fullname')}
            onFocus={() => handleError(null, 'fullname')}
            iconName="account-outline"
            label="Full Name"
            placeholder="Enter your full name"
            error={errors.fullname}
          />

          <Input
            keyboardType="numeric"
            onChangeText={text => handleOnchange(text, 'phone')}
            onFocus={() => handleError(null, 'phone')}
            iconName="phone-outline"
            label="Phone Number"
            placeholder="Enter your phone no"
            error={errors.phone}
          />
          <Input
            onChangeText={text => handleOnchange(text, 'password')}
            onFocus={() => handleError(null, 'password')}
            iconName="lock-outline"
            label="Password"
            placeholder="Enter your password"
            error={errors.password}
            password
          />
          <Input
            onChangeText={text => handleOnchange(text, 'registerNo')}
            onFocus={() => handleError(null, 'registerNo')}
            iconName="account-outline"
            label="Register Number"
            placeholder="Enter your register number"
            error={errors.registerNo}
          />
          <Button title="Register" onPress={validate} />
          <View className="flex flex-row items-center mx-auto">
          <Text
            onPress={() => navigation.navigate('LoginScreen')}
            style={{
              color: COLORS.black,
              fontWeight: 'bold',
              textAlign: 'center',
              fontSize: 16,
            }}>
            Already have account?
          </Text>
          <Text className="text-pink-300 text-[16px] font-bold text-center ml-1">Login</Text>
        </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default RegistrationScreen;