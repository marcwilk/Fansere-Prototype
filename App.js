import React, {Component} from 'react'
import {Platform, StyleSheet, Text, View} from 'react-native'
import Chat from './components/Chat'
import Map from './components/mapComponents/Map'




type Props = {};
export default class App extends Component<Props> {
  render() {
    return (
      <View style={styles.container}>
        <Map />
        <Chat />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
});
