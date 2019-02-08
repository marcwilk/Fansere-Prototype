import React from 'react'
import ScheduleItem from './ScheduleItem'
<<<<<<< HEAD
=======
import BarMap from './BarMap/BarMap'
>>>>>>> d14054e65b5280e70e72a732842420aae9bdf483
import { StyleSheet, Text, View, Header, ScrollView} from 'react-native';

export default class Schedule extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      showMap: false
    }
    this.onPressShow = this.onPressShow.bind(this)
    this.onPressHide = this.onPressHide.bind(this)
  }

  onPressShow() {
    this.setState({showMap: true})
  }

  onPressHide() {
    this.setState({showMap: false})
  }

  render() {
    return (
      <View>
        {this.state.showMap ? <BarMap onPress={this.onPressHide}/> : <ScheduleItem onPress={this.onPressShow}/>}
      </View>
    )
  }
}
