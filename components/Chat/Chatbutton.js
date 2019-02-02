import React from 'react'
import {StyleSheet, Text, View, ScrollView, Button} from 'react-native';
import { createStackNavigator, createAppContainer } from 'react-navigation';

export default class Chat extends React.Component {
  constructor(props) {
    super(props)
    this.state = {

    }
    this.onPress = this.onPress.bind(this)
  }

  onPress(convo) {
    console.log(this.props.index)
    return this.props.show(convo, this.props.index)
  }



  render() {
    return (
      <View style={styles.wrapper}>
        <Button title={`${this.props.name}`} onPress={e => this.onPress(this.props.chat)}>
        </Button>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  wrapper: {
    borderColor: 'blue',
    borderWidth: 1,
    borderRadius: 4,
    margin: 4,
    backgroundColor: 'white'
  }
})
