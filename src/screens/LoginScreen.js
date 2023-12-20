import React,{useEffect} from 'react';
import {View, Text, SafeAreaView, Keyboard, Alert} from 'react-native';
import COLORS from '../../utils/color';
import Button from '../components/Button';
import Input from '../components/Input';
import Loader from '../components/Loader';
import firebase from 'firebase/compat/app';
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
// import { auth } from '../../firebase-config';

const LoginScreen = ({navigation}) => {
  const [inputs, setInputs] = React.useState({email: '', password: ''});
  const [errors, setErrors] = React.useState({});
  const [loading, setLoading] = React.useState(false);

  const validate = async () => {
    Keyboard.dismiss();
    let isValid = true;
    if (!inputs.email) {
      handleError('Please input email', 'email');
      isValid = false;
    }
    if (!inputs.password) {
      handleError('Please input password', 'password');
      isValid = false;
    }
    if (isValid) {
      login(inputs.email, inputs.password);
    }
  };
  const login = (email,password) => {
    setLoading(true);
    const auth = getAuth();
    signInWithEmailAndPassword( auth , email, password)
      .then((userCredential) => {
        const user = userCredential.user;
        if(user){
          setLoading(false);
          navigation.replace('Homescreen');
        }else{
          Alert.alert('Error', 'Something went wrong');
        }
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log(errorCode, errorMessage);
      });
    
  };

  const handleOnchange = (text, input) => {
    setInputs(prevState => ({...prevState, [input]: text}));
  };

  const handleError = (error, input) => {
    setErrors(prevState => ({...prevState, [input]: error}));
  };

  // useEffect(() => {
  //   const unsubscribe = auth.onAuthStateChanged((user) => {
  //     if (user) {
  //       navigation.replace('Homescreen');
  //     }
  //   })
  //   return unsubscribe
  //  } , []);
  return (
    <SafeAreaView style={{backgroundColor: COLORS.white, flex: 1}}>
      <Loader visible={loading} />
      <View style={{paddingTop: 50, paddingHorizontal: 20}}>
        <Text style={{color: "black", fontSize: 35, textAlign: 'center' , marginTop:30 , marginBottom:30 , fontWeight: 'bold'}}>
          Log In
        </Text>
        {/* <Text style={{color: COLORS.grey, fontSize: 18, marginVertical: 10}}>
          Enter Your Details to Login
        </Text> */}
        <View style={{marginVertical: 20}}>
          <Input
            onChangeText={text => handleOnchange(text, 'email')}
            onFocus={() => handleError(null, 'email')}
            iconName="email-outline"
            label="Email"
            placeholder="Enter your email address"
            error={errors.email}
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
          <Button title="Log In" onPress={validate} />
          <View className="flex flex-row items-center mx-auto">
          <Text
            onPress={() => navigation.navigate('Register')}
            style={{
              color: COLORS.black,
              fontWeight: 'bold',
              textAlign: 'center',
              fontSize: 16,
            }}>
            Don't have account?
          </Text>
          <Text className="text-pink-300 text-[16px] font-bold text-center ml-1">Register</Text>
        </View>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default LoginScreen;