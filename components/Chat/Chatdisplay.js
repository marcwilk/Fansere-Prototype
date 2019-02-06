import React from 'react'
import { StyleSheet, View } from 'react-native';
import Chat from './Chat'
import Chatlist from './Chatlist'

export default class Chatdisplay extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      messages: [],
      showChat: false,
      chatToShow: '',
      userName: "Sean Tansey",
    }
    //this.addMessage = this.addMessage.bind(this)
    this.returnToChatList = this.returnToChatList.bind(this)
    this.onPressListItem = this.onPressListItem.bind(this)
    this.addMessage = this.addMessage.bind(this)
  }

  //get route for all messages related to signed in user
  async componentDidMount() {
    const response = await fetch('http://localhost:3007/messages', {
      method: 'POST',
      body: JSON.stringify({user_name: this.state.userName}),
      headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json',
        }
    })
    const json = await response.json()
    const messages = this.convertToObject(json)
    this.setState({messages: messages})
  }

  //manipulates returned data
  convertToObject(input) {
    let obj = {}
    for (let x = 0; x < input.length; x++) {
        if (input[x].sender_name === this.state.userName) {
            obj[input[x].receiver_name] ? obj[input[x].receiver_name].push(input[x]) : obj[input[x].receiver_name] = [input[x]]
        }
        else {
            obj[input[x].sender_name] ? obj[input[x].sender_name].push(input[x]) : obj[input[x].sender_name] = [input[x]]
        }
    }
    return obj
}

  //for when list item is pressed
  onPressListItem(input) {
    this.setState({chatToShow: input, showChat: true})
  }

  //returns view to chatList when pressed
  returnToChatList() {
    this.setState({showChat: false})
  }

  //adds message to database
  async addMessage(input) {
    let obj = {
      sender_name: this.state.userName,
      receiver_name: this.state.chatToShow,
      message: input
    }
    const response = await fetch('http://localhost:3007/messages/create', {
      method: 'POST',
      body: JSON.stringify(obj),
      headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json',
        }
    })
    const json = await response.json()
    this.componentDidMount()
  }

  render() {
    return (
      <View >
        {this.state.showChat ? <Chat chat={this.state.messages[this.state.chatToShow]} name={this.state.chatToShow} add={this.addMessage} close={this.returnToChatList}/> : <Chatlist messages={this.state.messages} press={this.onPressListItem}/> }
      </View>
    )
  }
}

const styles = StyleSheet.create({

})
