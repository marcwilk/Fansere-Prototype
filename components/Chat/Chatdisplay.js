import React from 'react'
import {StyleSheet, Text, View, ScrollView, KeyboardAvoidingView} from 'react-native';
import Chat from './Chat'
import Chatlist from './Chatlist'
import { ListItem, Header } from 'react-native-elements'

export default class Chatdisplay extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      messages: {
        Ben: [{
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
        }],
        Will: [{
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
        }],
        Owen: [{
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
        }],
        Marc: [{
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
        }],
      },
      showChat: false,
      chatToShow: ''
    }
    this.renderChat = this.renderChat.bind(this)
    this.addMessage = this.addMessage.bind(this)
    this.returnToChatList = this.returnToChatList.bind(this)
    this.onPressListItem = this.onPressListItem.bind(this)

  }

  renderChat(chatArr, index) {
    this.setState({showChat: true, chatData: chatArr, index: index})
  }

  onPressListItem(input) {
    this.setState({chatToShow: input, showChat: true})
  }

  returnToChatList() {
    this.setState({showChat: false})
  }


  addMessage(input) {
    let obj = {
      user: "b",
      message: input
    }
    let messages = {...this.state.messages}
    messages[this.state.chatToShow] = [...this.state.messages[this.state.chatToShow], obj]
    console.log(messages)
    this.setState({messages: messages})
  }

  render() {
    return (
      <View>
        {this.state.showChat ? <Chat chat={this.state.messages[this.state.chatToShow]} name={this.state.chatToShow} add={this.addMessage} close={this.returnToChatList}/> : <Chatlist render={this.renderChatList} messages={this.state.messages} press={this.onPressListItem}/> }
      </View>
    )
  }
}

const styles = StyleSheet.create({
  list: {
    borderWidth: .5,
    borderColor: 'grey'
  }
})
