import { View, Text, Image } from 'react-native'
import React from 'react'
import useAuth from '../hooks/useAuth'

const ReceiverMessage = ({message}) => {
    const {user}=useAuth()
  return (
    <View className="flex-row items-center">
         <Image source={{uri:user.picture}} style={{height:45,width:45,borderRadius:50,marginLeft:5}}/>
      
      <View  className="bg-red-400 rounded-lg rounded-tl-none px-5 py-3 mx-2 my-2 mr-auto ">
          
      <Text className="text-white">{message}</Text>
    </View>
    </View>
           
  )
}

export default ReceiverMessage