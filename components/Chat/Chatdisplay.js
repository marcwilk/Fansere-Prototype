import React from 'react'
import { StyleSheet, View } from 'react-native';
import Chat from './Chat'
import Chatlist from './Chatlist'

export default class Chatdisplay extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      messages: {
        Ben: [{
          user: "Ben",
          message: "suh"
        },
        {
          user: "Sean",
          message: "new phone who dis"
        },
        {
          user: "Ben",
          message: "nm then"
        },
        {
          user: "Sean",
          message: "kewl"
        }],
        Will: [{
          user: "Will",
          message: "hi"
        },
        {
          user: "Sean",
          message: "hi"
        },
        {
          user: "Will",
          message: "bucket, now."
        },
        {
          user: "Sean",
          message: "yes sir"
        }],
        Owen: [{
          user: "Owen",
          message: "suh"
        },
        {
          user: "Sean",
          message: "suhhhh"
        },
        {
          user: "Owen",
          message: "d00d"
        },
        {
          user: "Sean",
          message: "d0000d"
        }],
        Marc: [{
          user: "Marc",
          message: "yo"
        },
        {
          user: "Sean",
          message: "ayyye you get that android shit workin?"
        },
        {
          user: "Marc",
          message: "idk maybe"
        },
        {
          user: "Sean",
          message: "..."
        }],
        "Tom Brady": [],
        "Aaron Rodgers": [],
        "Patrick Mahomes": [],
        "Kirk Cousins": [],
        "Jared Goff": [],
        "Andrew Luck": [],
        "Drew Brees": [],
        "Marcus Mariota": [],
        "DeShaun Watson": [],
        "Russel Wilson": [],
        "Jamis Winston": [],
        "Mitchell Trubitsky": []
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
      user: "Sean",
      message: input
    }
    let messages = {...this.state.messages}
    messages[this.state.chatToShow] = [...this.state.messages[this.state.chatToShow], obj]
    console.log(messages)
    this.setState({messages: messages})
  }

  render() {

    return (
      <View >
        {this.state.showChat ? <Chat chat={this.state.messages[this.state.chatToShow]} name={this.state.chatToShow} add={this.addMessage} close={this.returnToChatList}/> : <Chatlist render={this.renderChatList} messages={this.state.messages} press={this.onPressListItem}/> }
      </View>
    )
  }
}

const styles = StyleSheet.create({

})
