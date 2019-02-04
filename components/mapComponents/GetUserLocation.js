import React from 'react'
import { Button, StyleSheet } from 'react-native'

const GetUserLocation = props =>{
return (

  <Button style={styles.button} title="Find Fans Near You"  onPress={props.getLocation} />

 )
}

const styles = StyleSheet.create({
  button: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#000000',
  },
});

export default GetUserLocation
