import { View, Text, Button, Image, TouchableOpacity,StyleSheet } from 'react-native'
import React,{useContext,useEffect,useRef} from 'react'
import { useNavigation } from '@react-navigation/native'
import { SafeAreaView } from 'react-native-safe-area-context'
import useAuth from '../hooks/useAuth'
import {Icon} from 'react-native-elements'
import Swiper from 'react-native-deck-swiper'


const Data = [
  {
    id:1,
    firstName:"Lydia",
    lastName:"Konadu",
    occupation:"Entreprenuer",
    photoUrl:"https://media.licdn.com/dms/image/C4D03AQECFYWBfhfTSg/profile-displayphoto-shrink_800_800/0/1647265267965?e=2147483647&v=beta&t=sD06FwgBGdoi5ZhKnGFHcN1QcMg2BOCWD2UHQ-xC1rU",
    age:27,
  },
  {id:2,
    firstName:"Blaise",
    lastName:"Dorleku",
    occupation:"Male Escort",
    photoUrl:"https://media.licdn.com/dms/image/C4E03AQGRL9h-ha1ZyQ/profile-displayphoto-shrink_800_800/0/1517564136344?e=1690416000&v=beta&t=YGn7TmC8nsU7nK1ottAUebfG9ylr55te0GGJS5oIVUk",
  age:27,
  },
  {id:3,
    firstName:"Ursula",
    lastName:"Adzornu",
    occupation:"Risk Analyst",
    photoUrl:"https://scontent.facc1-1.fna.fbcdn.net/v/t1.6435-9/122159051_3333561100063042_4302569362217255345_n.jpg?_nc_cat=108&ccb=1-7&_nc_sid=e3f864&_nc_ohc=olPuThsz38IAX8TW2cd&_nc_ht=scontent.facc1-1.fna&oh=00_AfA8Wa0YsD5BIGp3fmjvlvuTyER3KRp5KzkGR9vJPTHY6A&oe=6499E9A0",
    age:27,
  },
  {id:4,
    firstName:"Emmanuella",
    lastName:"Huno",
    occupation:"Student",
    photoUrl:"https://scontent.facc1-1.fna.fbcdn.net/v/t1.6435-9/70338287_2430993086989035_4155830374452166656_n.jpg?_nc_cat=101&ccb=1-7&_nc_sid=174925&_nc_ohc=fA3r99g_s_QAX-q85Xm&_nc_ht=scontent.facc1-1.fna&oh=00_AfDym_iCB5vjjNgRuEUwq3YfrThaoh4YusAFbE9DOq6vkw&oe=6499D1EF",
    age:24,
  },{id:5,
    firstName:"Bright",
    lastName:"Tawiah",
    occupation:"Uber Drver",
    photoUrl:"https://i.ibb.co/xS37Gkw/IMG-20181227-WA0029.jpg",
    age:28,
  },
  {id:6,
    firstName:"Eugenia",
    lastName:"Gigi",
    occupation:"Influencer",
    photoUrl:"https://i.ibb.co/0j4NxDL/IMG-20230526-WA0064.jpg",
    age:23,
  },
  
  
  {id:7,
    firstName:"Chris",
    lastName:"Asuka",
    occupation:"Pilot",
    photoUrl:"https://i.ibb.co/dQk1K1v/IMG-20220410-WA0069.jpg",
    age:57,
  },{id:8,
    firstName:"Benedicta",
    lastName:"Amoah",
    occupation:"Engineer",
    photoUrl:"https://i.ibb.co/1zBbRkq/IMG-20210607-WA0021.jpg",
    age:26,
  },{id:9,
    firstName:"Richmond",
    lastName:"Issahaku",
    occupation:"Retired Virgin",
    photoUrl:"https://i.ibb.co/wY8YXc2/IMG-20210621-WA0220.jpg",
    age:29,
  },
]

//to replace data with that from firebase
//1. take a snapshot
// useEffect(()=>{
//   onSnapshot(doc(db,"users",user.uid),(snapshot)=>{
//     if(!snapshot.exists()){
//       navigation.navigate("Modal")
//     }
//   })
// },[])
//2. use the snapshot
// useEffect(()=>{
//   let unsub;
//   const fetchProfiles =async ()=>{
//     unsub= onSnapshot(collection(db,"users"),(snapshot)=>{
//       setProfiles(
//         snapshot.docs.filter((doc)=> doc.id !==user.uid).map((doc)=>({
//           id:doc.id,
//           ...doc.data
//         }))
//       )
//     })
//   }
//   fetchProfiles()
//   return unsub
// },[])

const HomeScreen = () => {
    const navigation = useNavigation()
    const {user,signout}=useAuth()
    
const swipeRef = useRef()

console.log(user)
  return (
    <SafeAreaView className="flex-1 pb-4">
      {/* Header */}
      <View className="p-2 justify-between items-center flex-row border-b border-red-200">
        <TouchableOpacity onPress={signout}>
        <Image source={{uri:user.picture}} className="h-10 w-10 rounded-full " />
        </TouchableOpacity>


        <TouchableOpacity onPress={()=>navigation.navigate("Modal")}>
          <Image source={require("../../assets/logo.png")} className="h-14 w-14"/>
        </TouchableOpacity>
        <TouchableOpacity onPress={()=>navigation.navigate("Match")}>
      <Text>Matched</Text>
        </TouchableOpacity>

<TouchableOpacity onPress={()=>navigation.navigate("Chat")} >

<Icon name='chatbubbles-sharp'
        size={30}
        type='ionicon'
        color="#FF5864"

        />
</TouchableOpacity>
      </View>
      {/* Header end */}
{/*    
cards */}
<View className="flex-1">
<Swiper cards={Data}
ref={swipeRef}
stackSize={5}
cardIndex={0}
verticalSwipe={false}

animateCardOpacity
onSwipedLeft={()=>{console.log("Not Matched")}}
onSwipedRight={()=>{console.log("Matched")}}
overlayLabels={{
  left:{
    title:"NOPE",
    style:{
      label:{
        textAlign:"right",
        color:"red",
      }
    }
  },
  right:{
    element:
    <View className="p-5 ">
       <Text className="text-[#4DED30] text-3xl border-2 border-[#4DED30] w-28"> Match</Text>
    </View>
   
  
  }
}}
containerStyle={{backgroundColor:"transparent" }}
renderCard={(card)=>card ? (<View className="bg-white rounded-xl relative h-3/4" key={card.id}>
    
 <Image source={{uri:card.photoUrl}} className="h-full w-full absolute top-0 rounded-xl"/>
 <View className="bg-white w-full h-20 absolute bottom-0 flex-row justify-between px-6 py-2 rounded-b-xl items-center ">
  <View>
   <Text className="text-xl font-bold">{card.firstName}</Text>
   <Text>{card.occupation}</Text>
   </View>
   <Text className="font-bold text-2xl">{card.age}</Text>
 </View>


 </View>):(<View className="bg-white rounded-xl h-3/4 items-center justify-center" >
    
         <Image source={{uri:"https://links.papareact.com/6gb"}} className="h-40 w-40  rounded-xl p-5"/>
      
          
           <Text className="font-bold text-2xl text-center">nO PROFILE</Text>
        
     
     
     </View>)}
  

/>

</View>

<View className="flex-row justify-evenly flex">
<TouchableOpacity onPress={()=>swipeRef.current.swipeLeft()} className="items-center justify-center rounded-full w-16 h-16 bg-red-200">
  <Icon name='cross' type='entypo' size={24} color='red'/>
</TouchableOpacity>
<TouchableOpacity onPress={()=>swipeRef.current.swipeRight()} className="items-center justify-center rounded-full w-16 h-16 bg-green-200">
  <Icon name='heart' type='antdesign' size={24} color='green'/>
</TouchableOpacity>
</View>



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

const styles = StyleSheet.create({
  cardshadow:{
    shadowColor:"green",
    shadowOffset:{
      width:0,
      height:1,

    },
    shadowOpacity:0.2,
    shadowRadius:1.41,
    elevation:2
  }
})