import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'
import {Icon} from 'react-native-elements'
import { useNavigation } from '@react-navigation/native'


const Header = ({title,callEnabled}) => {
    const navigation = useNavigation()
  return (
    <View className="flex-row p-2 items-center justify-between">
    <View className=" flex-row items-center ">
        <TouchableOpacity onPress={()=>navigation.goBack()} className="p-2">
            <Icon name="chevron-left" type="ionicons" size={34} color="#FF5864"/>

        </TouchableOpacity>
        <Text className="text-2xl font-bold pl-2">{title}</Text>
    </View>
    {callEnabled && (
         <View className="flex-row bg-red-200 rounded-full">
<TouchableOpacity className=" pr-2 pl-3 pt-3  ml-1">
           
           <Icon type='material' name='call' size={20} color="#FF5864"/>
           {/* <View className=" border-l-2 pl-3 border-white">
           <Icon type='material' name="video-call" size={20} color="#FF5864" />
           </View> */}
   
       </TouchableOpacity>
       <TouchableOpacity className=" mr-2 p-3 ">
           
           {/* <Icon type='material' name='call' size={20} color="#FF5864"/> */}
           <View className=" border-l-2 pl-3 border-white">
           <Icon type='material' name="video-call" size={20} color="#FF5864" />
           </View>
   
       </TouchableOpacity>
        </View>
        
    )}
    </View>
  )
}

export default Header