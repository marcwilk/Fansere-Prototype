//blah blah
// more blah
import React, {Component} from 'react'
import {Platform, StyleSheet, Text, View } from 'react-native'
import { Nav } from './components/Router'



export default class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      
    }
  }
  render() {
    return (
      <View style={styles.container}>
        <Nav userId={this.state.userId}/>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'black',
  }
});
