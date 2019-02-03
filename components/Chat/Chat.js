import React from 'react'
import {StyleSheet, Text, View, ScrollView, KeyboardAvoidingView} from 'react-native';
import Message from './Message'
import Input from './Input'
import Messanger from './Messanger'

export default class Chat extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      messages: [
        {
          user: "a",
          message: "suh"
        },
        {
          user: "b",
          message: "new phone who dis"
        },
        {
          user: "a",
          message: "nm then"
        },
        {
          user: "b",
          message: "kewl"
        },
        {
          user: "a",
          message: "yeah"
        },
        {
          user: "b",
          message: "ya"
        },
      ],
      keyboardActive: false
    }
    this.addMessage = this.addMessage.bind(this)
  }

  addMessage(input) {
    console.log(input)
    let obj = {
      user: "b",
      message: input
    }
    console.log(obj)
    this.setState({messages: [...this.state.messages, obj]})
    console.log(this.state.messages)
  }



  render() {
    return (
      <KeyboardAvoidingView style={styles.messages} enabled="true">
        <Text style={styles.banner}>Messenger</Text>
        <Messanger messages={this.state.messages} add={this.addMessage}/>
      </KeyboardAvoidingView>
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
