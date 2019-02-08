import React from 'react'
import {StyleSheet, Text, View, ScrollView, KeyboardAvoidingView, Image } from 'react-native';
import { LoginButton } from 'react-native-fbsdk';
import { Header } from 'react-native-elements'



export default class FBLoginButton extends React.Component {

    render() {
       return (
      <View style ={styles.container}>
         <Header backgroundColor="rgb(126, 217, 75)"   centerComponent={{ text: 'Sign Up', style: { color: '#fff', fontSize: 22, fontWeight: 'bold' } }} />
         <Image style={{width: 500, height: 500}} source={require('../../images/logo.png')} />
         <View style={styles.container}>
           <LoginButton style={styles.label}
             readPermissions={["email"]}
             onLoginFinished={
               (error, result) => {
                 if (error) {
                   alert("Login failed with error: " + error.message);
                 } else if (result.isCancelled) {
                   alert("Login was cancelled");
                 } else {
                   alert("Login was successful with permissions: " + result.grantedPermissions)
                 }
               }
             }
             onLogoutFinished={() => alert("User logged out")}/>
         </View>
       </View>
       );
     }
   };
const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#000000',
  },

});
module.exports =  FBLoginButton
