import { View, Text, Image, TextInput,TouchableOpacity } from 'react-native'
import React, { useState } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import useAuth from '../hooks/useAuth'

const ModalScreen = () => {
  const {user} = useAuth()
  const [age,setAge]=useState(null)
  const [job,setJob]=useState(null)
  const [pic ,setPic]=useState(null)
const incomplete =!age || !job || !pic

// // connection to db
//     const UpdateUserProfile =()=>{
//       //setDocument
//       //document should be created in the db and named as users with the user,uid as the key when the info is sent
//       setDoc(doc(db,"users",user.uid)),{
//         id:user.uid,
//         name:user.name,
//         photoURL:pic,
//         job:job,
//         age:age,
//         timestamp:serverTimestamp() // always use this to get specific time instead of differences in timezones
//       }
//     }


    return (
    
        <SafeAreaView style={{flex:1, alignItems:'center',paddingTop:1, paddingBottom:5}}>
          {/* welcome */}
        <Image 
   source={{uri:"https://links.papareact.com/2pf"}}
   resizeMode='contain'
   
   style={{height:50, width:'100%'}}
   />

   <Text className="text-xl text-gray-500 p-2 font-bold">Welcome {user.name}</Text>

{/* fields */}
<Text className="text-center p-4 font-bold text-red-400">
Step 1: The profile Pic
</Text>
<TextInput className="text-center text-xl pb-2"
value={pic}
placeholder='Enter a profile pic URL' onChangeText={(change)=>setPic(change)}/>

<Text className="text-center p-4 font-bold text-red-400">
Step 2: The Occupation
</Text>
<TextInput className="text-center text-xl pb-2"
value={job}
onChangeText={(change)=>setJob(change)}
placeholder='Enter your Occupation '/>

<Text className="text-center p-4 font-bold text-red-400">
Step 3: The Age
</Text>
<TextInput className="text-center text-xl pb-2"
value={age}
maxLength={2}
keyboardType='numer'
onChangeText={(change)=>setAge(change)}
placeholder='Enter your Age'/>
<TouchableOpacity disabled={incomplete} className={incomplete ?"bg-gray-300 w-64 p-3 rounded-xl absolute bottom-5":"w-64 p-3 rounded-xl bg-red-400 absolute bottom-5 " }>
<Text className="text-center text-white text-xl">Update Profile</Text>
</TouchableOpacity>
  






        </SafeAreaView>
  
    
   
    
  )
}

export default ModalScreen