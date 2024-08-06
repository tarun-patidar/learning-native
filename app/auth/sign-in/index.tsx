import { View, Text, TextInput, StyleSheet, TouchableOpacity, ImageBackground, ToastAndroid } from 'react-native'
import React, { useEffect, useState } from 'react'
import { router, useNavigation, useRouter } from 'expo-router'
import { Colors } from '@/constants/Colors';
import Ionicons from '@expo/vector-icons/Ionicons';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { auth } from '@/configs/FireBaseConfig';

export default function SignIn() {
    const navigation = useNavigation();
    const router = useRouter();
    useEffect(() => {
        navigation.setOptions({headerShown :false})
    }, [])

    const [email , setEmail] = useState<any>();
    const [password , setPassword] = useState <any>();

    const OnSignIn = () => {
        if(!email && !password) {
            ToastAndroid.show('Please Enter All Details !',5);
            return;
        }
        signInWithEmailAndPassword(auth, email, password)
  .then((userCredential) => {
    // Signed in 
    const user = userCredential.user;
    router.replace('/home');
    // ...
    console.log(user);
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    console.log(errorMessage , errorCode);
    if(errorCode == 'auth/missing-password' || 
        errorCode == 'auth/invalid-email' ) {
            ToastAndroid.show('Invalid Credentials Please Try Again' , ToastAndroid.LONG)
    }
  });
    }
    
  return (
    <View style = {{
        padding : 25,
        marginTop : 40,
        height : "100%"
    }}>
        <TouchableOpacity onPress={router.back}>
            <Ionicons name="arrow-back-sharp" size={30} color="black" />
        </TouchableOpacity>
      <Text style = {{
        fontFamily : "outfit-bold",
        fontSize : 30,
        marginTop : 30
      }}>Let's Sign you in</Text>
      <Text style = {{
        fontFamily : "outfit",
        fontSize : 30,
        color : Colors.GREY,
        marginTop : 20
      }}>Welcome</Text>
      <Text style = {{
        fontFamily : "outfit",
        fontSize : 25,
        marginTop : 20
      }}>Jai Shree Ram</Text>

       {/* Email*/}
      <View style={{
        marginTop : 20
      }}>
        <Text style = {{
            fontFamily : "outfit-bold",
            fontSize : 25
        }}>Email</Text>
        <TextInput style = {styles.input}
            placeholder='Enter Email'
            onChangeText={(value) => setEmail(value)}
         >
        </TextInput>
      </View>

       {/* Password */}
      <View style={{
        marginTop : 20
      }}>
        <Text style = {{
            fontFamily : "outfit-bold",
            fontSize : 25
        }}>Password</Text>
        <TextInput style = {styles.input}
            secureTextEntry={true}
            placeholder='Enter Password'
            onChangeText={(value) => setPassword(value)}
            >
        </TextInput>
      </View>

       {/* Sign In */}
      <TouchableOpacity style = {{
        backgroundColor : Colors.PRIMARY,
        marginTop : 20,
        borderRadius : 99,
      }}
      onPress={OnSignIn}
      >
        <Text style = {{
            color : Colors.WHITE,
            fontFamily : 'outfit-bold',
            fontSize : 25,
            textAlign : 'center',
            padding : 15
        }}>Sign In</Text>
      </TouchableOpacity>

      {/* Create Account */}
      <TouchableOpacity style = {{
        backgroundColor : Colors.WHITE,
        marginTop : 20,
        borderRadius : 99,
        borderWidth : 1
      }}
      onPress= {() => router.push('/auth/sign-up')}
      >
        <Text style = {{
            color : Colors.PRIMARY,
            fontFamily : "outfit-bold",
            fontSize : 25,
            textAlign : 'center',
            padding : 15
        }}>Create Account</Text>
      </TouchableOpacity>

      {/* Direct Order */}
      <TouchableOpacity style = {{
        backgroundColor : "#8fbc8f",
        marginTop : 20,
        borderRadius : 99,
        borderWidth : 1
      }}
      onPress= {() => router.push('/direct-order/order-form')}
      >
        <Text style = {{
            color : Colors.PRIMARY,
            fontFamily : "outfit-bold",
            fontSize : 25,
            textAlign : 'center',
            padding : 15
        }}>Order Directly</Text>
      </TouchableOpacity>
    </View>
  )
}
const styles = StyleSheet.create({
    input : {
        padding : 20,
        borderWidth : 1,
        borderRadius : 20,
        borderColor : Colors.GREY,
        marginTop : 10
    }
});