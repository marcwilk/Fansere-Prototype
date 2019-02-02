import React from 'react'
import {StyleSheet, Text, View, ScrollView, KeyboardAvoidingView} from 'react-native';
import Message from './Message'
import Input from './Input'
import Messanger from './Messanger'
import Chatbutton from './Chatbutton'
import Chat from './Chat'


export default class Chatlist extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      messages: [
        {name: 'Ben',
        conversation: [{
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
        }]},
        {name: 'pissboi',
        conversation: [{
          user: "a",
          message: "hi"
        },
        {
          user: "b",
          message: "hi"
        },
        {
          user: "a",
          message: "bucket, now."
        },
        {
          user: "b",
          message: "yes sir"
        }]},
        {name: 'marc',
        conversation: [{
          user: "a",
          message: "yo"
        },
        {
          user: "b",
          message: "ayyye you get that android shit workin?"
        },
        {
          user: "a",
          message: "idk maybe"
        },
        {
          user: "b",
          message: "..."
        }]},
        {name: 'owen',
        conversation: [{
          user: "a",
          message: "suh"
        },
        {
          user: "b",
          message: "suhhhh"
        },
        {
          user: "a",
          message: "d00d"
        },
        {
          user: "b",
          message: "d0000d"
        }]},
      ],
      showChat: false,
      chatData: [],
      index: 0
    }
    this.renderChat = this.renderChat.bind(this)
    this.addMessage = this.addMessage.bind(this)
  }

  addMessage(input) {
    console.log(input)
    let obj = {
      user: "b",
      message: input
    }
    // console.log(this.state.chat)
    // console.log([...this.state.messages[this.state.index].conversation, obj])
    let messagesAtIndex = [...this.state.messages[this.state.index]]
    console.log(messagesAtIndex)

    // let newChatData = [...this.state.chatData, obj]
    // this.state.messages[this.state.index].conversation = newChatData
    // this.setState({messages: [...this.state.messages]})
  }

  renderChat(chatArr, index) {
    this.setState({showChat: true, chatData: chatArr, index: index})
  }

  render() {
    console.log(this.state.messages[0])
    return (
      <View style={styles.messages}>
        <Text style={styles.banner}>Chats</Text>
        {this.state.showChat ? <Chat chat={this.state.messages[this.state.index].conversation} add={this.addMessage}/> : this.state.messages.map((chatObj, i) => <Chatbutton key={i} index={i} name={chatObj.name} chat={chatObj.conversation} show={this.renderChat}/>)}
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
