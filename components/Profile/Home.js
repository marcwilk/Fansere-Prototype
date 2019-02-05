import React from 'react'
import { StyleSheet, Text, TextInput, Button, TouchableOpacity, View, Switch, Image, ScrollView, KeyboardAvoidingView } from 'react-native';
import { Avatar, ButtonGroup, Header, Card, ListItem, Icon } from 'react-native-elements';
import EditProfile from './EditProfile'

export default class Home extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
      selectedIndex: 0,
      newUsername: '',
      newTagline: '',
      username: 'Marc_Wilk',
      tagline: 'Jordan > LeBron'
    }
    this.updateIndex = this.updateIndex.bind(this)
  }
  updateIndex(selectedIndex) {
    this.setState({selectedIndex})
  }
  updateUsername = (text) => {
    console.log("text", text)
    this.setState({ newUsername: text })
  }
  updateTagline = (text) => {
    this.setState({ newTagline: text })
  }
  submitUsername = (username) => {
    this.setState({ username: this.state.newUsername })
  }
  submitTagline = (tagline) => {
    this.setState({ tagline: this.state.newTagline })
  }
  toggleView = () => {
    if(this.state.selectedIndex === 0) {
      return (
        <EditProfile
          username = {this.state.username}
          tagline = {this.state.tagline}
          updateUsername = {this.updateUsername}
          updateTagline = {this.updateTagline}
          submitUsername = {this.submitUsername}
          submitTagline = {this.submitTagline}
        />
      )
    }
  }

  render() {

    const buttons = ['Edit Profile', 'Friends', 'Teams']
    const { selectedIndex } = this.state

    return (

      <View style={styles.container}>

        <Header
        backgroundColor="#7ed957"
        placement="center"
        centerComponent={{ text: 'Profile', style: { color: 'white', fontSize: 22, fontWeight: 'bold' }}}
        />

        <Text style={styles.profileText} h1>{this.state.username}</Text>

        <Avatar size="large" onPress={() => console.log("Works!")}
          source={{
            uri:
              'https://s3.amazonaws.com/uifaces/faces/twitter/adhamdannaway/128.jpg',
          }}
          showEditButton
        />

        <Text style={styles.taglineText} h2>{this.state.tagline}</Text>

        <ButtonGroup
          onPress={this.updateIndex}
          selectedIndex={selectedIndex}
          selectedButtonStyle={{backgroundColor: 'rgb(126, 217, 75)'}}
          buttons={buttons}
          containerStyle={{height: 30}}
        />

        {this.toggleView()}

      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    color: '#545454',
  },
  profileText: {
    fontWeight: 'bold',
    color: 'white',
  },
  taglineText: {
    color: 'white',
  }
})
