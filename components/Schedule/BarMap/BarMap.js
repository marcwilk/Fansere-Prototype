import React from 'react'
import {StyleSheet, Text, View} from 'react-native';
import { Header } from 'react-native-elements'
import MapView from 'react-native-maps'
import {Marker} from 'react-native-maps'

export default class BarMap extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
      userLocation: null,
      userName : 'MarkWilk_69',
      barLocations : []
    }
  }

  componentDidMount() {
    navigator.geolocation.getCurrentPosition(position => {
      this.setState({
        userLocation: {
          latitude: position.coords.latitude,
          longitude: position.coords.longitude,
          latitudeDelta: 0.0122,
          longitudeDelta: 0.0021
        }
      })
      fetch('https://findplaces-d9c94.firebaseio.com/places.json')
      .then(res=> res.json())
      .then(parsedRes =>{
       const barsArray = []
       for (const key in parsedRes){
         barsArray.push({
           latitude :parsedRes[key].latitude,
           longitude :parsedRes[key].longitude,
           barName : parsedRes[key].BarName,
           id : key
         })
       }
       this.setState({barLocations : barsArray})
      })
      .catch(err=> console.log(err))
    }, err => console.log(err),
    { timeout: 5000, maximumAge: 5000 }
  )
  }

  render() {
    let userLocationMarker = null
      if(this.state.userLocation) {
        userLocationMarker = <Marker title={this.state.userName} coordinate={this.state.userLocation} pinColor='#545454'/>
      }

  const barLocations = this.state.barLocations.map(bar => <Marker title={bar.barName}  coordinate={bar} key={bar.id} pinColor='rgb(126, 217, 75)'/>)
   console.log(barLocations)
    return (
      <View>
      <Header backgroundColor="rgb(126, 217, 75)"   centerComponent={{ text: 'Watch This Game', style: { color: '#fff', fontSize: 22, fontWeight: 'bold' } }} />
      <View style={styles.mapContainer}>
        <MapView  style={styles.map} region={this.state.userLocation} barLocations={this.state.barLocations}>
            {userLocationMarker}
            {barLocations}
        </MapView>
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
  },
  userMarker:{
    borderRadius: 50
  }
})
