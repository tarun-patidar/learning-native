import { View, Text, TextInput, TouchableOpacity, StyleSheet, ToastAndroid } from 'react-native'
import React, { useEffect, useState } from 'react'
import { useNavigation, useRouter } from 'expo-router'
import { Colors } from '@/constants/Colors';
import { Ionicons } from '@expo/vector-icons';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { auth } from '@/configs/FireBaseConfig';

export default function SignUp() {
    const router = useRouter();
    const navigation = useNavigation();
    useEffect(() => {
      navigation.setOptions({
        headerShown : false
      })
    }, [])

    const [email,setEmail] = useState<any>();
    const [password , setPassword] = useState<any>();
    const [fullName , setFullName] = useState<string>();

    {/* Email validation is pending */}
    const ValidateAndSetEMail = () => {


    }

    const OnCreateAccount = () => {
        if(!email && !password && !fullName) {
            ToastAndroid.show('Please Enter All Details !',5);
            return;
        }
        createUserWithEmailAndPassword(auth, email, password)
  .then((userCredential) => {
    // Signed up 
    const user = userCredential.user;
    router.replace('/home');

    console.log(user);
    // ...
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;

    console.log(errorMessage,errorCode);
    // ..
  });
    }
    
  return (
    <View style = {{
        padding : 25,
        marginTop : 40
    }}>
        <TouchableOpacity onPress={router.back}>
            <Ionicons name="arrow-back-sharp" size={30} color="black" />
        </TouchableOpacity>
        <Text style = {{
            fontFamily : 'outfit-bold',
            fontSize : 30,
            marginTop : 30
        }}>
            Create New Account
        </Text>
        {/* Email*/}
        <View style={{
            marginTop : 20
        }}>
            <Text style = {{
                fontFamily : "outfit-bold",
                fontSize : 25
            }}>Full Name</Text>
            <TextInput style = {styles.input}
                placeholder='Enter Full Name'
                onChangeText={(value) => setFullName(value)}
            >
            </TextInput>
        </View>
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
                onChangeText={(value)=>setEmail(value)}
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
                onChangeText = {(value) => setPassword(value)}
            >
            </TextInput>
        </View>

        {/* Sign In */}
        <TouchableOpacity style = {{
            backgroundColor : Colors.PRIMARY,
            marginTop : 35,
            borderRadius : 99,
        }}
        onPress={OnCreateAccount}
        >
            <Text style = {{
                color : Colors.WHITE,
                fontFamily : 'outfit-bold',
                fontSize : 25,
                textAlign : 'center',
                padding : 15
            }}>Sign Up</Text>
        </TouchableOpacity>
        <View style = {{
            margin : 30
        }}>
            <Text style={{
                fontSize : 25,
                fontFamily : 'outfit-bold',
                textAlign : 'center'
            }}>
                OR
            </Text>
        </View>
        {/* Sign In with google*/}
        <TouchableOpacity style = {{
            backgroundColor : Colors.WHITE,
            borderRadius : 99,
            borderWidth :1
        }}>
            <Text style = {{
                color : Colors.PRIMARY,
                fontFamily : 'outfit-bold',
                fontSize : 25,
                textAlign : 'center',
                padding : 15
            }}>Sign In With Google</Text>
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