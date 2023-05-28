import { View, Text, Button, TouchableOpacity, ImageBackground } from 'react-native'
import React ,{useState,useEffect}from 'react'
import useAuth from '../hooks/useAuth'
import * as Google from "expo-auth-session/providers/google"
WebBrowser.maybeCompleteAuthSession(); 
import * as WebBrowser from 'expo-web-browser';
import { useNavigation } from '@react-navigation/native';


const LoginScreen = () => {
 
  const {request,promptAsync,user} = useAuth()
  const navigation = useNavigation()
 
 

  return (
    <View className="flex-1">
      <ImageBackground source={{uri:"https://tinder.com/static/tinder.png"}} resizeMode='cover' style={{flex:1}}>
      
        <TouchableOpacity  disabled={!request}
          onPress={() => {
            promptAsync();
          }} className="bg-white w-52 p-4 rounded-2xl absolute bottom-40 left-20">
        <Text className="text-center font-semibold">Sign in with Google</Text>
        </TouchableOpacity>
   
      

      </ImageBackground>
  
        {/* <Button
          title="
          
        /> */}
    
    </View>
  )
}

export default LoginScreen