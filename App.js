
import React, {Component} from 'react'
import {Platform, StyleSheet, Text, View} from 'react-native'
import Chat from './components/Chat'


type Props = {};
export default class App extends Component<Props> {
  render() {
    return (
      <View style={styles.container}>
        <Chat />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5FCFF',
  }
});
