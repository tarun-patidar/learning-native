import { View, Text, TouchableOpacity, TextInput, StyleSheet, ScrollView } from 'react-native'
import React, { useEffect } from 'react'
import { Colors } from '@/constants/Colors'
import { useNavigation, useRouter } from 'expo-router'
import { auth } from '@/configs/FireBaseConfig';
import { Ionicons } from '@expo/vector-icons';

export default function OrderForm() {
    const navigation = useNavigation();
    const router = useRouter();
    useEffect(() => {
      navigation.setOptions({
        headerShown : false
      })
    }, [])
    
  return (
    <ScrollView style = {{
        padding : 20,
        height : "100%",
        marginTop : 40
    }}>
        <TouchableOpacity onPress={router.back}>
            <Ionicons name="arrow-back-sharp" size={30} color="black" />
        </TouchableOpacity>
        <Text style = {{
            fontFamily : "outfit-bold",
            fontSize : 30,
            color : Colors.PRIMARY,
            marginTop : 20
        }}>Order Details
        </Text>
        <Text style = {{
            fontFamily : "outfit",
            fontSize : 20
        }}>Please fill out the details required</Text>

        {/* Full Name*/}
        <View style={{
            marginTop : 15
        }}>
            <Text style = {styles.textAboveInput}>Full Name</Text>
            <TextInput style = {styles.input}
                placeholder='Enter Full Name'
            />
        </View>

        {/* Contact Number */}
        <View style={styles.viewFormField}>
            <Text style = {styles.textAboveInput}>Contact Number</Text>
            <TextInput style = {styles.input}
                keyboardType='phone-pad'
                placeholder='Enter Phone Number'/>
        </View>
        {/* Address */}
        <View style={styles.viewFormField}>
            <Text style = {styles.textAboveInput}>Contact Number</Text>
            <TextInput style = {[styles.input,styles.address]}
                multiline = {true}
                numberOfLines={3}
                placeholder='Address'/>
        </View>
        {/*PinCode */}
        <View style={styles.viewFormField}>
            <Text style = {styles.textAboveInput}>PinCode</Text>
            <TextInput style = {styles.input}
                placeholder='PinCode'/>
        </View>

        {/* Place Order */}
        <TouchableOpacity style = {{
            backgroundColor : Colors.PRIMARY,
            marginTop : 30,
            borderRadius : 99,
        }}>
            <Text style = {{
                color : Colors.WHITE,
                fontFamily : 'outfit-bold',
                fontSize : 25,
                textAlign : 'center',
                padding : 15
            }}>Place Order</Text>
        </TouchableOpacity>
    </ScrollView>
  )
}
const styles = StyleSheet.create({
    input : {
        padding : 15,
        borderWidth : 1,
        borderRadius : 10,
        borderColor : Colors.GREY,
        marginTop : 10,
    },
    address : {
        textAlignVertical : 'top'
    },
    textAboveInput : {
        fontFamily : 'outfit',
        fontSize : 20
    },
    viewFormField : {
        marginTop : 15
    }
    
});