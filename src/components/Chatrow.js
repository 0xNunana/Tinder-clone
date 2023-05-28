import { View, Text, TouchableOpacity, Image } from 'react-native'
import React from 'react'
import useAuth from '../hooks/useAuth'
import { useNavigation } from '@react-navigation/native'

const Chatrow = () => {
    const navigation= useNavigation()
    const {user}=useAuth()
  return (
  <TouchableOpacity onPress={()=>navigation.navigate("Message")} style={{backgroundColor:"teal" ,opacity:0.7, padding:7,flexDirection:'row',marginHorizontal:7,width:'90%',elevation:2,borderRadius:5}}>
     <Image source={{uri:user.picture}} style={{height:50,width:50, borderColor:"red" , borderRadius:25 }}/>
    <View className="w-3/4 p-1 ml-4">
        <Text className="text-lg font-semibold">{user.name}</Text>
    <Text>Say Hi!</Text>
    </View>
  
   
  </TouchableOpacity>
  
    )
}

export default Chatrow