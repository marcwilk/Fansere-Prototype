import React from 'react'
import {StyleSheet, Text, View, ScrollView, KeyboardAvoidingView} from 'react-native';
import Message from './Message'
import Input from './Input'


export default class Messanger extends React.Component {
  constructor(props) {
    super(props)
    this.state = {

    }
  }
  render() {
    return (
      <View>
        <ScrollView>
          {this.props.messages.map((message, i) => <Message info={message} key={i} />)}
        </ScrollView>
        <Input add={this.props.add}/>
      </View>
    )
  }
}
