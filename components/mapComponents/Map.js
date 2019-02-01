import React from 'react'
import {StyleSheet, Text, View} from 'react-native';
import GetUserLocation from './GetUserLocation'



export default class Map extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      userLocation: null
    }
  }

  getUserLocationHandler=()=>{
    navigator.geolocation.getCurrentPosition(position=> {
      console.log(position)
    }, err => console.log(err))
  }

  render() {
    return (
      <View>
        <GetUserLocation getLocation={this.getUserLocationHandler}/>
      </View>
    )
  }
}
