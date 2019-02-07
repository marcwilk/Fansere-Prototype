import React from 'react'
import { StyleSheet, Text, Button, View, Image } from 'react-native'
import { Avatar, ButtonGroup, Header } from 'react-native-elements'
import EditProfile from './EditProfile'
import Friends from './Friends'
import Teams from './Teams'

export default class Home extends React.Component {

  async componentDidMount() {
    const response = await fetch('http://localhost:3007/users', {
      method: 'POST',
      body: JSON.stringify({username: this.state.username}),
      headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json',
        }
    })
    const json = await response.json()
    const username = this.convertToObject(json)
    this.setState({username: username})
  }

  constructor(props) {
    super(props)
    this.state = {
      selectedIndex: 2,
      newUsername: '',
      newLocation: '',
      newTagline: '',
      username: 'Marc_Wilk',
      location: 'Boulder, CO',
      tagline: 'Jordan > LeBron'
    }
    this.updateIndex = this.updateIndex.bind(this)
  }
  updateIndex(selectedIndex) {
    this.setState({selectedIndex})
  }
  updateUsername = (text) => {
    this.setState({ newUsername: text })
  }
  updateLocation = (text) => {
    this.setState({ newLocation: text })
  }
  updateTagline = (text) => {
    this.setState({ newTagline: text })
  }
  submitUsername = (username) => {
    this.setState({ username: this.state.newUsername })
  }
  submitLocation = (text) => {
    this.setState({ location: this.state.newLocation })
  }
  submitTagline = (tagline) => {
    this.setState({ tagline: this.state.newTagline })
  }
  toggleView = () => {
    if(this.state.selectedIndex === 0) {
      return (
        <EditProfile
          username = {this.state.username}
          location = {this.state.location}
          tagline = {this.state.tagline}
          updateUsername = {this.updateUsername}
          updateLocation = {this.updateLocation}
          updateTagline = {this.updateTagline}
          submitUsername = {this.submitUsername}
          submitLocation = {this.submitLocation}
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
        <View style={{flexDirection: 'row'}}>
          <View style={styles.headerContent}>
              <Image style={styles.avatar} source={{uri: 'https://bootdey.com/img/Content/avatar/avatar1.png'}}/>
          </View>
          <View style={{justifyContent: 'flex-end', padding: 50}}>
            <Text
              style={styles.profileText} h1>{this.state.username}
            </Text>
            <Text
            style={styles.locationText} h2>{this.state.location}
            </Text>
            <Text
              style={styles.taglineText} h2>{this.state.tagline}
            </Text>
          </View>
        </View>
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
    flexDirection: 'column',
    alignItems: 'center',
    color: '#545454',
    paddingBottom: 10
  },
  profileText: {
    fontWeight: 'bold',
    color: 'white',
    fontSize: 20
  },
  locationText: {
    color: 'white',
    fontSize: 16
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
    marginBottom: 20,
    marginTop: 20,
  }
})
