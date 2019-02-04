import React from 'react'
import {StyleSheet, Text, View, ScrollView, KeyboardAvoidingView} from 'react-native';
import { Avatar } from 'react-native-elements';
import { ButtonGroup } from 'react-native-elements';
import { Header } from 'react-native-elements';

export default class Home extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      selectedIndex: 2
    }
    this.updateIndex = this.updateIndex.bind(this)
  }
  updateIndex(selectedIndex) {
    this.setState({selectedIndex})
  }

  render() {

    const buttons = ['Edit Profile', 'Find Friends', 'Rosters']
    const { selectedIndex } = this.state

    return (

      <View style={styles.container}>

        <Header
        backgroundColor="rgb(126, 217, 75)"
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
          containerStyle={{height: 30, backgroundColor: '#a6a6a6'}}
        />

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
