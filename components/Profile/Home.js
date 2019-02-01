import React from 'react'
import {StyleSheet, Text, View, ScrollView, KeyboardAvoidingView} from 'react-native';
import { Avatar } from 'react-native-elements';
import { ButtonGroup   } from 'react-native-elements';

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

        <Text>Profile</Text>

        <Avatar size="large" onPress={() => console.log("Works!")}
          source={{
            uri:
              'https://s3.amazonaws.com/uifaces/faces/twitter/adhamdannaway/128.jpg',
          }}
        />

        <ButtonGroup
          onPress={this.updateIndex}
          selectedIndex={selectedIndex}
          buttons={buttons}
          containerStyle={{height: 50}}
        />

      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    // flex: 1,
    alignItems: 'center',
    // justifyContent: 'center'
  }
})
