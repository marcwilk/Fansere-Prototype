import React from 'react'
import {StyleSheet, Text, View} from 'react-native';

export default class Message extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
    }
  }

  styleSelector(input) {
    if (input === 'a') {
      return styles.a
    } else {
      return styles.b
    }
  }

  render() {
    return (
      <View>
        <Text style={this.styleSelector(this.props.info.user)}>{this.props.info.message}</Text>
      </View>
    )
  }
}


const styles = StyleSheet.create({
  a: {
    color: 'white',
    marginTop: 5,
    marginBottom: 5,
    fontSize: 20,
    marginLeft: 20,
    marginRight: 80,
    borderRadius: 15,
    backgroundColor: '#d3d3d3',
    padding: 10,
    overflow: 'hidden'
  },
  b: {
    color: 'white',
    marginTop: 5,
    marginBottom: 5,
    fontSize: 20,
    textAlign: 'right',
    marginLeft: 80,
    marginRight: 20,
    borderRadius: 15,
    backgroundColor: 'rgb(0, 120, 254)',
    padding: 10,
    overflow: 'hidden'
  }
})
