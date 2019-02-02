import React from 'react'
import {StyleSheet, Text, View, ScrollView, KeyboardAvoidingView} from 'react-native';
import Message from './Message'
import Input from './Input'
import Messanger from './Messanger'

export default class Chat extends React.Component {
  constructor(props) {
    super(props)
    this.state = {

    }
  }

  render() {
    return (
      <View enabled="true">
        <Messanger messages={this.props.chat} add={this.props.add}/>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  messages: {
    marginTop: 50,


  },
  banner: {
    backgroundColor: 'black',
    color: 'white',
    fontSize: 30,
    paddingTop: 5,
    paddingBottom: 5,
    paddingLeft: 30,
  }
})
