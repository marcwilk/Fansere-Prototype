//blah blah
import React, {Component} from 'react'
import {Platform, StyleSheet, Text, View} from 'react-native'
import { Nav } from './components/Router'


type Props = {};
export default class App extends Component<Props> {
  render() {
    return (
      <View style={styles.container}>
        <Nav />
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
