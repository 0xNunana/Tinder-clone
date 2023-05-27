import { View, Text ,} from 'react-native'
import React,{ createContext, useContext ,useState,useEffect} from 'react'
import * as Google from 'expo-auth-session/providers/google';

import {Expo_KEY,ANDROID_KEY} from '@env'

const AuthContext =createContext({})


export const AuthProvider  = ({children}) => {
  // const [error,setError]=useState(null)
  // const [user,setUser]=useState(null)
  // const [loadingInitial,setLoadingInitial] =useState(true)

  // useEffect(()=>
  // onAuthStateChanged(auth,(user)=>{
  //   if (user){
  //     setUser(user)
  //   }else{setUser(null)}
  //   setLoadingInitial(false)
  // }))
  const [token, setToken] = useState("");
  const [userInfo, setUserInfo] = useState(null);
  const [request, response, promptAsync] = Google.useAuthRequest({
    androidClientId:ANDROID_KEY,
     expoClientId: Expo_KEY,
  });
  

  useEffect(() => {
    if (response?.type === "success") {
      setToken(response.authentication.accessToken);
   
      //  const credential = GoogleAuthProvider.credential(token)
      //  await signInWithCredential(auth,credential)
      getUserInfo();
    }
  }, [response, token]);
  

  const getUserInfo = async () => {
    try {
      const response = await fetch(
        "https://www.googleapis.com/userinfo/v2/me",
        {
          headers: { Authorization: `Bearer ${token}` },
        }
      );
      const user = await response.json();
      setUserInfo(user);
    } catch (error) {
      console.log(error)
      // Add your own error handler here
    }
  };

  const signout =()=>
{setUserInfo(null)}









  return (
    <AuthContext.Provider value={{user: userInfo,promptAsync,request,signout}} >
          {children}
    </AuthContext.Provider>
   
    
  )
}

export default function useAuth(){
    return useContext(AuthContext)
}

