import { View, Text } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import Header from '../components/Header'
import Chatlist from '../components/Chatlist'

const ChatScreen = () => {
  return (
    <SafeAreaView>
      <Header title="Chat" callEnabled="true"/>
      <Chatlist/>
    </SafeAreaView>
  )
}

export default ChatScreen

