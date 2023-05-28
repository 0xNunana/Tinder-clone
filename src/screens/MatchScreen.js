import { View, Text,Image, TouchableOpacity} from 'react-native'
import React from 'react'
import useAuth from '../hooks/useAuth'
import { useNavigation } from '@react-navigation/native'


const MatchScreen = () => {
    const {user}=useAuth()
    const navigation = useNavigation()
  return (
    <View className="bg-red-400/90 h-full pt-20">
<View className="justify-center px-10 pt-20">
    <Image source={{uri:"https://links.papareact.com/mg9"}} style={{height:60,width:'100%'}}/>
</View>

<Text className="text-white text-center mt-5">
    You and   liked each other
</Text>
<View className="flex-row justify-around mt-5">
<Image source={{uri:user.picture}} style={{borderRadius:70,height:150, width:150}}/>
    <Image source={{uri:user.picture}} style={{borderRadius:70,height:150, width:150}}/>

</View>

<TouchableOpacity className="bg-white m-5 px-10 py-8 rounded-full mt-20"
onPress={()=>{
    navigation.goBack()
    navigation.navigate("Chat")
}}
>
    <Text className="text-center">Send a Message</Text>
</TouchableOpacity>
    </View>
  )
}

export default MatchScreen