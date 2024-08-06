import { View, Text } from 'react-native'
import React from 'react'
import { Tabs } from 'expo-router'
import { Ionicons, Octicons } from '@expo/vector-icons'

export default function TabLayout() {
  return (
    <Tabs screenOptions={{
      headerShown : false
    }}>
        <Tabs.Screen name="myorders"
          options={{
            tabBarLabel : ({color}) => <Text>My Orders</Text>,
            tabBarIcon : ({color}) => <Ionicons name="reorder-four" size={30} color="black" />
          }}
        />
        <Tabs.Screen name="home"
          options={{
            tabBarLabel : ({color}) => <Text>Home</Text>,
            tabBarIcon : ({color}) => <Ionicons name="home" size={30} color="black" />
          }}
        />
        <Tabs.Screen name="profile"
            options={{
              tabBarLabel : ({color}) => <Text>My Profile</Text>,
              tabBarIcon : ({color}) => <Ionicons name="person-circle" size={30} color="black" />
            }}
        />
    </Tabs>
  )
}