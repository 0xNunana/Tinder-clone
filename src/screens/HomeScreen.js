import { View, Text, Button, Image, TouchableOpacity } from 'react-native'
import React,{useContext} from 'react'
import { useNavigation } from '@react-navigation/native'
import { SafeAreaView } from 'react-native-safe-area-context'
import useAuth from '../hooks/useAuth'
import {Icon} from 'react-native-elements'

const HomeScreen = () => {
    const navigation = useNavigation()
    const {user,signout}=useAuth()
  console.log(user.picture)

  return (
    <SafeAreaView>
      {/* Header */}
      <View className="p-2 justify-between items-center flex-row">
        <TouchableOpacity>
        <Image source={{uri:user.picture}} className="h-10 w-10 rounded-full " />
        </TouchableOpacity>


        <TouchableOpacity onPress={()=>navigation.navigate("Chat")}>
          <Image source={require("../../assets/logo.png")} className="h-14 w-14"/>
        </TouchableOpacity>

<TouchableOpacity c>

<Icon name='chatbubbles-sharp'
        size={30}
        type='ionicon'
        color="#FF5864"

        />
</TouchableOpacity>







      
      </View>
      {/* Header end */}
   
      {/* <Button title='Go to Chat Screen' onPress={()=>navigation.navigate("Chat")}/>
      <View className="p-5 justify-center items-center">
      <TouchableOpacity onPress={signout} className="w-20 p-2 border border-gray-300  justify-center  items-center">
        <Text>SIGNOUT</Text>
      </TouchableOpacity>
      </View> */}
   
      </SafeAreaView>
  )
}

export default HomeScreen