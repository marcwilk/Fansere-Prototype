import React from 'react'
import { StyleSheet, View } from 'react-native';
import Chat from './Chat'
import Chatlist from './Chatlist'

export default class Chatdisplay extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
<<<<<<< HEAD
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
=======
      messages: [],
>>>>>>> d14054e65b5280e70e72a732842420aae9bdf483
      showChat: false,
      chatToShow: '',
      userName: "Marc Wilk",
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
<<<<<<< HEAD
    
=======
>>>>>>> d14054e65b5280e70e72a732842420aae9bdf483
    return (
      <View >
        {this.state.showChat ? <Chat chat={this.state.messages[this.state.chatToShow]} name={this.state.chatToShow} add={this.addMessage} close={this.returnToChatList}/> : <Chatlist messages={this.state.messages} press={this.onPressListItem}/> }
      </View>
    )
  }
}

const styles = StyleSheet.create({

})
