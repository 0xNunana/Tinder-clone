import { View, Text, TextInput, Button, KeyboardAvoidingView, Platform, TouchableWithoutFeedback, Keyboard, FlatList, ScrollView } from 'react-native'
import React, { useState } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import Header from '../components/Header'
import useAuth from '../hooks/useAuth'
import SendMessage from '../components/SendMessage'
import ReceiverMessage from '../components/ReceiverMessage'

const MessageScreen = () => {
    const {user}=useAuth()
    const [input,setInput]=useState('')
    const [messages,setMessages]=useState([])
    const sendMessage =()=>{

    }

  return (
  <SafeAreaView className="flex-1">
    <Header title={user.given_name} callEnabled="true"/>
    <KeyboardAvoidingView
    behavior={Platform.OS ==="ios" ? "padding" : "height"}
   style={{flex:1}}
    keyboardVerticalOffset={10}
    >
    <ScrollView  className="bg-rose-100 flex-1">
        
        
        <SendMessage message="Hi"/>
        <ReceiverMessage message="Hello there"/>
        <SendMessage message="How are you Paul?"/>
        <ReceiverMessage message="I'm Fine"/>
        <ReceiverMessage message="You?"/>
        <SendMessage message="I'm doing well"/>
        <SendMessage message="I have been trying to call you to discuss something with you but your number is inactive"/>
        <ReceiverMessage message="Oh, yeah, I'm currently not in the country"/>
        <ReceiverMessage message="What is the issue?"/>
       

        <SendMessage message="Do you remember Blaise, Your friend from Uni?"/>
        <ReceiverMessage message="Yh, Certainly. What's wrong with him?"/>
        <SendMessage message="Well, After school,we got talking and one thing led to another and we started dating"/>
        <ReceiverMessage message="Oh,wow. Good for you "/>
        <SendMessage message="The issue is that, he accused me of cheating and without listening to any response,he broke up with me."/>
        <ReceiverMessage message="Really?"/>
        <SendMessage message="Yes pleases"/>
        <SendMessage message="I haven't been the same since that day"/>
        <SendMessage message="Can i call you here?"/>
        <SendMessage message="Hi"/>
        <SendMessage message="Hi"/>
        
{/* <FlatList
data={messages}
keyExtractor={item=>item.id}
className="pl-4"
renderItem={({item:message})=> message.userId === user.uid ?(
    <SendMessage key={message.id} message={message}/>
):(<ReceiverMessage key={message.id} message={message}/>)}
/> */}

    </ScrollView>
   
   
    <View className="flex-row justify-between items-center border-t border-gray-200 px-5 py-2 bg-slate-200">
    <TextInput
    className="h-10 text-lg bg-white flex-grow mr-2 rounded-full px-2"
    placeholder='Type your message..'
    value={input}
    onChangeText={(change)=>setInput(change)}
    onSubmitEditing={sendMessage}
    
    />
    <Button title='Send' color="#FF5864" onPress={sendMessage}/>
    
</View>
</KeyboardAvoidingView>

  </SafeAreaView>)
}

export default MessageScreen
