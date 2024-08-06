import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native'
import React from 'react'
import { Colors } from '@/constants/Colors';
import { useRouter } from 'expo-router';

export default function Login() {
    const router = useRouter();
  return (
    <View>
      <Image 
        source={require("@/assets/images/login.jpg")}
        style={{
            width : "100%",
            height : 550,
        }}
        />
        <View style= {styles.container}>
            <Text style =  {{      
                fontSize: 28,
                fontFamily: "outfit-bold",
                textAlign : "center",
                marginTop : 10,
                paddingRight : 20,
                paddingLeft : 20
            }}>
                RUCHIKA SHRIRAM ARTWORKS
            </Text>
            <Text style = {{
                fontSize : 18,
                fontFamily : "outfit-medium",
                textAlign : "center",
                color : Colors.GREY,
                marginTop : 25,
                padding : 15
            }}>
                Keep surfing and booking the art for your loved ones
                to make their special days memorable "Happy Shopping"
            </Text>
            <TouchableOpacity style = {styles.button}
                onPress={()=>router.push('/auth/sign-in')}
            >
                <Text style={{
                    color:Colors.WHITE,
                    fontFamily : 'outfit-bold',
                    fontSize : 25,
                    textAlign : 'center',
                }}>
                    Get Started
                </Text>
            </TouchableOpacity>
        </View>
    </View>
  )
}
const styles = StyleSheet.create({
    container : {
        backgroundColor : Colors.WHITE,
        marginTop: -30,
        borderTopRightRadius : 20,
        borderTopLeftRadius : 20,
        padding : 30,
        height : "100%",
    },
    button : {
        padding : 15,
        backgroundColor : Colors.PRIMARY,
        borderRadius : 99,
        marginTop : "20%",
    }
});
