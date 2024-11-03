import { View, Text, Touchable, Image, StyleSheet, TouchableOpacity } from 'react-native';
import React from 'react';
import { Colors } from '@/constants/Colors';
import { useWarmUpBrowser } from '../hooks/useWarmBrowser';

import { Button } from 'react-native';
import { useOAuth } from "@clerk/clerk-expo";

import * as WebBrowser from "expo-web-browser";
import * as SecureStore from "expo-secure-store";

WebBrowser.maybeCompleteAuthSession();

export default function LoginScreen() {
  useWarmUpBrowser();
  const { startOAuthFlow } =useOAuth({strategy:"oauth_google"});
  const onPress=React.useCallback(async()=>{
    try{
      const { createdSessionId, signIn, signUp, setActive }=
      await startOAuthFlow();
      if (createdSessionId){
        setActive({ session: createdSessionId});
      }
      else{

      }
    }catch(err){
      console.error("OAth error", err);
    }
  },[]);
  return (
 <View>
  <View style={{
    display:'flex',
    alignItems:'center',
    marginTop:120
  }}>
  <Image source={require('./../assets/images/login.png')}
    style={{
      width:250,
      height:450,
      borderRadius:20,
      borderWidth:6,
      borderColor:'#000'
    }}
  />
 </View>
 <View style={styles.subContainer}>
  <Text style={{
    fontSize:30,
    fontFamily:'outfit-bold',
    textAlign:'center'
  }}>Hi welcome
      <Text style={{
        fontSize:15,
        fontFamily:'outfit',
        textAlign:'center',
        marginVertical:15,
        color:Colors.GRAY
      }}>Find Your favri app here</Text></Text>

  <TouchableOpacity style={styles.btn}
  onPress={onPress}
  >
    <Text style={{
      textAlign:'center',
      color:'#fff',
      fontFamily:'outfit'
    }}>
      lets get started 
    </Text>
  </TouchableOpacity>
 </View>

 </View>
  )
}

const styles=StyleSheet.create({
    subContainer:{
      backgroundColor:'#fff',
      padding:20,
      marginTop:-20
    },
    btn:{
      backgroundColor:Colors.PRIMARY,
      padding:16,
      borderRadius:99,
      marginTop:20
    }
})
