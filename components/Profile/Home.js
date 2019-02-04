import React from 'react'
import { StyleSheet, Text, TextInput, View, Image, ScrollView, KeyboardAvoidingView } from 'react-native';
import { Avatar, ButtonGroup, Header, Card, ListItem, Button, Icon } from 'react-native-elements';

export default class Home extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
      selectedIndex: 2,
      text: "Placeholder text"
    }
    this.updateIndex = this.updateIndex.bind(this)
  }
  updateIndex(selectedIndex) {
    this.setState({selectedIndex})
  }

  render() {

    const buttons = ['Edit Profile', 'Find Friends', 'Rosters']
    const { selectedIndex } = this.state

    const users = [
     {
        name: 'brynn',
        avatar: 'https://s3.amazonaws.com/uifaces/faces/twitter/brynn/128.jpg'
     }
    ]

    return (

      <View style={styles.container}>

        <Header
        backgroundColor="#7ed957"
        placement="center"
        centerComponent={{ text: 'Profile', style: { color: 'white', fontSize: 22, fontWeight: 'bold' }}}
        />

        <Text style={styles.profileText} h1>Profile Username</Text>

        <Avatar size="large" onPress={() => console.log("Works!")}
          source={{
            uri:
              'https://s3.amazonaws.com/uifaces/faces/twitter/adhamdannaway/128.jpg',
          }}
          showEditButton
        />

        <Text style={styles.taglineText} h2>"Here goes a tagline"</Text>

        <ButtonGroup
          onPress={this.updateIndex}
          selectedIndex={selectedIndex}
          selectedButtonStyle={{backgroundColor: 'rgb(126, 217, 75)'}}
          buttons={buttons}
          containerStyle={{height: 30}}
        />

        <Card
          containerStyle={{height: 325}}
          title='Edit Profile Details'>
          <TextInput
            style={{height: 40, borderColor: 'gray', borderWidth: 1}}
            onChangeText={(text) => this.setState({text})}
            value={this.state.text}
          />
          <br/>
          <TextInput
            style={{height: 40, borderColor: 'gray', borderWidth: 1}}
            onChangeText={(text) => this.setState({text})}
            value={this.state.text}
          />
        </Card>

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
