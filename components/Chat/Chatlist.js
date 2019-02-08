import React from 'react'
import {StyleSheet, Text, View, ScrollView} from 'react-native';
import { Header, ListItem } from 'react-native-elements';


export default class Chatlist extends React.Component {
  constructor(props) {
    super(props)

  }

  renderChatList(obj) {
    return Object.keys(obj).map((key, i) => <ListItem key={i} title={key} onPress={e => this.props.press(key)} style={styles.list} containerStyle={{backgroundColor: 'black'}} titleStyle={{ color: 'white', fontWeight: 'bold' }} chevron chevronColor="black"/>)
  }

  render() {
    return (
      <ScrollView>
        <Header
          backgroundColor="rgb(126, 217, 75)"
          centerComponent={{ text: 'Chat', style: { color: '#fff', fontSize: 22, fontWeight: 'bold' } }}
        />
        {this.renderChatList(this.props.messages)}
      </ScrollView>
    )
  }
}

const styles = StyleSheet.create({
  list: {
    borderWidth: .5,
    borderColor: "rgb(126, 217, 87)",
  }
})
