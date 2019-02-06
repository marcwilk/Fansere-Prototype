import React from 'react'
import { StyleSheet, Text, Button, View, Image } from 'react-native'
import { Avatar, ButtonGroup, Header } from 'react-native-elements'
import EditProfile from './EditProfile'
import Friends from './Friends'
import Teams from './Teams'

export default class Home extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
      selectedIndex: 2,
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
    console.log('text', text)
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
    if(this.state.selectedIndex === 1) {
      return (
        <Friends
        />
      )
    }
    if(this.state.selectedIndex === 2) {
      return (
        <Teams
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
          backgroundColor='#7ed957'
          placement='center'
          centerComponent={{ text: 'Profile', style: { color: 'white', fontSize: 20, fontWeight: 'bold' }}}
        />
        <View style={styles.headerContent}>
            <Image style={styles.avatar} source={{uri: 'https://bootdey.com/img/Content/avatar/avatar1.png'}}/>
        </View>
        <Text
          style={styles.profileText} h1>{this.state.username}
        </Text>
        <Text
          style={styles.taglineText} h2>{this.state.tagline}
        </Text>
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
    color: '#545454'
  },
  profileText: {
    fontWeight: 'bold',
    color: 'white',
    fontSize: 20
  },
  taglineText: {
    color: 'white',
    fontSize: 16
  },
  avatar: {
    width: 130,
    height: 130,
    borderRadius: 63,
    borderWidth: 4,
    borderColor: '#fff',
    marginBottom: 10,
    marginTop: 10
  }
})
