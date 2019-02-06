import React from 'react'
import {StyleSheet, Text, View, ScrollView, KeyboardAvoidingView} from 'react-native';
import { LoginButton } from 'react-native-fbsdk';

export default class FBLoginButton extends React.Component {

    render() {
       return (
         <View style={styles.container}>
           <LoginButton
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
       );
     }
   };
const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  label: {
    fontSize: 16,
    fontWeight: 'normal',
    marginBottom: 48,
  },
});
module.exports =  FBLoginButton
