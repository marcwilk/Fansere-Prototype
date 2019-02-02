import React from 'react'
import {StyleSheet, Text, View, ScrollView, KeyboardAvoidingView} from 'react-native';
import Message from './Message'
import Input from './Input'
import Messanger from './Messanger'
import { Button, Header,  } from 'react-native-elements';
import Icon from 'react-native-vector-icons/FontAwesome';

export default class Chat extends React.Component {
  constructor(props) {
    super(props)
    this.state = {

    }
  }

  render() {
    return (
      <View>
        <Header
          leftComponent={{ text: 'Return', style: { color: '#fff', fontSize: 18 }}}
          centerComponent={{ text: `${this.props.name}`, style: { color: '#fff', fontSize: 22 } }}
        />
        <Button title="< return" type="clear" onPress={this.props.close}/>
        <Messanger messages={this.props.chat} add={this.props.add}/>
      </View>
    )
  }
}
