import React from 'react'
import { StyleSheet, Text, TextInput, Button, TouchableOpacity } from 'react-native'
import { Card } from 'react-native-elements'

export default class EditProfile extends React.Component {
  render() {
    return (
      <Card
        containerStyle={{height: 350, width: 300, padding: 10}}
        title='Edit Profile Details'>
        <Text style={{color: 'black'}}>
          Username:
        </Text>
        <TextInput
          underlineColorAndroid = 'transparent'
          placeholder = {this.props.username}
          placeholderTextColor = 'black'
          autoCapitalize = 'none'
          style={{height: 40, borderColor: 'gray', borderWidth: 1, padding: 10, margin: 10}}
          onChangeText={this.props.updateUsername}
        />
        <TouchableOpacity
          style = {styles.submitButton}
          onPress = {
            () => this.props.submitUsername(this.props.username)
          }>
           <Text style = {styles.submitButtonText}> Submit </Text>
        </TouchableOpacity>
        <Text style={{color: 'black'}}>
          Tagline:
        </Text>
        <TextInput
          underlineColorAndroid = 'transparent'
          placeholder = {this.props.tagline}
          placeholderTextColor = 'black'
          autoCapitalize = 'none'
          style={{height: 40, borderColor: 'gray', borderWidth: 1, padding: 10, margin: 10}}
          onChangeText={this.props.updateTagline}
        />
        <TouchableOpacity
          style = {styles.submitButton}
          onPress = {
            () => this.props.submitTagline(this.props.tagline)
          }>
           <Text style = {styles.submitButtonText}> Submit </Text>
        </TouchableOpacity>
      </Card>
    )
  }
}

const styles = StyleSheet.create({
  profileText: {
    fontWeight: 'bold',
    color: 'white',
  },
  taglineText: {
    color: 'white',
  },
  submitButton: {
   backgroundColor: 'rgb(126, 217, 75)',
   padding: 10,
   height: 40,
   margin: 10
  },
  submitButtonText:{
    backgroundColor: 'rgb(126, 217, 75)',
    color: 'white'
  }
})
