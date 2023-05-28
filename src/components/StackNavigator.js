import { View, Text } from 'react-native'
import React from 'react'
import {createNativeStackNavigator} from '@react-navigation/native-stack'
import useAuth from '../hooks/useAuth'
import HomeScreen from '../screens/HomeScreen'
import ChatScreen from '../screens/ChatScreen'
import LoginScreen from '../screens/LoginScreen'
import ModalScreen from '../screens/ModalScreen'
import MatchScreen from '../screens/MatchScreen'
import MessageScreen from '../screens/MessageScreen'
const StackNavigator = () => {
    const Stack = createNativeStackNavigator()
    const {user} = useAuth()


   
  return (
    <Stack.Navigator>
      {user ? (
        <>
        <Stack.Group>
        <Stack.Screen name="Home" component={HomeScreen} options={{headerShown:false}}/>
      <Stack.Screen name="Chat" component={ChatScreen} options={{headerShown:false}}/>
      <Stack.Screen name="Message" component={MessageScreen} options={{headerShown:false}}/>
        </Stack.Group>

        <Stack.Group screenOptions={{presentation:"modal"}}>
 <Stack.Screen name="Modal" component={ModalScreen} options={{headerShown:false}}/>
      </Stack.Group>
        <Stack.Group screenOptions={{presentation:"transparentModal"}}>
 <Stack.Screen name="Match" component={MatchScreen} options={{headerShown:false}}/>
      </Stack.Group>
        </>
      ) :  
  
 <Stack.Screen name="Login" component={LoginScreen} options={{headerShown:false}}/>
    
      }
{/*       
      <Stack.Screen name="Home" component={HomeScreen} options={{headerShown:false}}/>
      <Stack.Screen name="Chat" component={ChatScreen} options={{headerShown:false}}/>
      <Stack.Screen name="Login" component={LoginScreen} options={{headerShown:false}}/>  */}

    
      
    </Stack.Navigator>
  )
}

export default StackNavigator