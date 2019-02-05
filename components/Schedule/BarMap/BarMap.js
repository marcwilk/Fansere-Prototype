import React from 'react'
import {StyleSheet, Text, View} from 'react-native';
import { Header } from 'react-native-elements'
import MapView from 'react-native-maps'

export default class BarMap extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      userLocation: null
    }
  }

  componentDidMount() {
    navigator.geolocation.getCurrentPosition(position => {
      console.log(position)
      this.setState({
        userLocation: {
          latitude: position.coords.latitude,
          longitude: position.coords.longitude,
          latitudeDelta: 0.1922,
          longitudeDelta: 0.1421
        }
      })
    }, err => console.log(err),
    { timeout: 5000, maximumAge: 5000 }
  )
  }

  render() {
    console.log(this.state.userLocation)
    return (
      <View>
      <View>
      <Header backgroundColor="rgb(126, 217, 75)"   centerComponent={{ text: 'Watch This Game', style: { color: '#fff', fontSize: 22, fontWeight: 'bold' } }} />
      </View>
      <View style={styles.mapContainer}>
        <MapView  style={styles.map}/>
    </View>
  </View> )
  }
}

const styles =StyleSheet.create({
  mapContainer: {
    width : '100%',
    height: 645,

  },
  map: {
    width: '100%',
    height: '100%'
  }
})
