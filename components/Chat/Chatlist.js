import React from 'react'
import {StyleSheet, Text, View, ScrollView, KeyboardAvoidingView} from 'react-native';
import Message from './Message'
import Input from './Input'
import Messanger from './Messanger'
import { Button, Header, ListItem } from 'react-native-elements';
import Icon from 'react-native-vector-icons/FontAwesome';

export default class Chatlist extends React.Component {
  constructor(props) {
    super(props)
    this.state = {

    }
  }

  renderChatList(obj) {
    return Object.keys(obj).map((key, i) => <ListItem key={i} title={key} onPress={e => this.props.press(key)} style={styles.list} chevron chevronColor="black"/>)
  }

  render() {
    return (
      <View>
        <Header
          centerComponent={{ text: 'Chats', style: { color: '#fff', fontSize: 22 } }}
        />
        {this.renderChatList(this.props.messages)}
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
