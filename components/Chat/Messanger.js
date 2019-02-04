import React from 'react'
import {StyleSheet, ScrollView } from 'react-native';
import Message from './Message'



export default class Messanger extends React.Component {
  constructor(props) {
    super(props)
    this.state = {

    }
  }

  render() {
    return (
      <ScrollView style={styles.navHeight}>
        {this.props.messages.map((message, i) => <Message info={message} key={i} name={this.props.name} />)}
      </ScrollView>
    )
  }
}

const styles = StyleSheet.create({
  navHeight: { marginBottom: 120}
})
