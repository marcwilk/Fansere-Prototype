import React from 'react'
import {View, Text, TextInput, StyleSheet} from 'react-native'



export default class Input extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
    }
  }

  render() {
    return (
      <View>
        <TextInput
        style={styles.container}
        placeholder={' Type a message...'}
        clearTextOnFocus={true}
        keyboardType={'default'}
        onSubmitEditing={e => this.props.add(e.nativeEvent.text)}>
        </TextInput>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    height: 40,
    borderColor: 'black',
    borderWidth: 2,
    borderRadius: 4,
    marginLeft: 5,
    marginRight: 5,
    backgroundColor: 'white',
    color: '#007AFF',
    overflow: 'hidden'
  }
})
