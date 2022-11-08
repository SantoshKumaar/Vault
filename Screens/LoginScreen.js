import { View, Image, StyleSheet } from 'react-native'
import React from 'react'
import LoginForm from '../Components/home/LoginScreen/LoginForm'

const vault_logo = 'https://cdn.dribbble.com/users/2260998/screenshots/4891086/media/c88a4bb3b2d66f92d8fcac7cc29030d9.png'
const LoginScreen = () => (
  <View style = {styles.container}>
    <View style = {styles.logoContainer}>
      <Image source = {{uri:vault_logo, height:100, width:100}}/>
    </View>
    <LoginForm navigation={navigation}/>
  </View>
)
const styles = StyleSheet.create({
  container: {
    flex:1,
    backgroundColor:'white',
    padding:50,
    paddingHorizontal:12,
  },
  logoContainer:{
    alignItems:'center',
    marginTop:60,
  },
})
export default LoginScreen