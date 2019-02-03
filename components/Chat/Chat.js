import React from 'react'
import {StyleSheet, View, ScrollView, KeyboardAvoidingView} from 'react-native';
import Input from './Input'
import Messanger from './Messanger'
import { Header  } from 'react-native-elements';
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
          backgroundColor="rgb(126, 217, 75)"
          leftComponent={<Icon name="arrow-left" size={17} color="white" onPress={this.props.close}/>}
          centerComponent={{ text: `${this.props.name}`, style: { color: '#fff', fontSize: 22, fontWeight: 'bold' } }}
        />
        <Input add={this.props.add} />
        <ScrollView>
          <KeyboardAvoidingView behavior="position" keyboardVerticalOffset={180}>
            <Messanger messages={this.props.chat} add={this.props.add} name={this.props.name}/>
          </KeyboardAvoidingView>
        </ScrollView>
      </View>
    )
  }
}

const styles = StyleSheet.create({

})
