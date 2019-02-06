import React from 'react'
import { StyleSheet, View, Text, TextInput, Button, TouchableOpacity, ScrollView } from 'react-native'
import { Card } from 'react-native-elements'

export default class EditProfile extends React.Component {

  render() {
    return (
      <ScrollView>
      <View style={styles.container}>
      <Card
        containerStyle={{width: 350, padding: 10, fontSize: 20}}
        title='Edit Profile Details'>
        <Text style={{color: 'black', fontSize: 16}}>
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

        <Text style={{color: 'black', fontSize: 16}}>
          Location:
        </Text>
        <TextInput
          underlineColorAndroid = 'transparent'
          placeholder = {this.props.location}
          placeholderTextColor = 'black'
          autoCapitalize = 'none'
          style={{height: 40, borderColor: 'gray', borderWidth: 1, padding: 10, margin: 10}}
          onChangeText={this.props.updateLocation}
        />
        <TouchableOpacity
          style = {styles.submitButton}
          onPress = {
            () => this.props.submitLocation(this.props.location)
          }>
           <Text style = {styles.submitButtonText}> Submit </Text>
        </TouchableOpacity>

        <Text style={{color: 'black', fontSize: 16}}>
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
      </View>
      </ScrollView>
    )
  }
}

const styles = StyleSheet.create({
  profileText: {
    fontWeight: 'bold',
    color: 'white'
  },
  taglineText: {
    color: 'white'
  },
  submitButton: {
   backgroundColor: 'rgb(126, 217, 75)',
   height: 40,
   padding: 10,
   margin: 10
  },
  submitButtonText: {
    backgroundColor: 'rgb(126, 217, 75)',
    color: 'white'
  }
})
