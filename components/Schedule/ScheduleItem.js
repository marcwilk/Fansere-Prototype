import React from 'react'
import {StyleSheet, Text, View, ScrollView, KeyboardAvoidingView, TouchableOpacity, Image } from 'react-native';
import axios from 'axios'

export default class ScheduleItem extends React.Component {

state ={
  NHLGameData: [],
  homeTeamNames: [],
  awayTeamNames: []
}

  constructor() {
    super();
    axios.get('https://statsapi.web.nhl.com/api/v1/schedule')
     .then(res=> {
       try {
       this.setState({ NHLGameData: res.data.dates[0]})
     }
     catch {
       this.setState({hometeamName: 'There are no games today' , awayTeamNames: 'There are no games today'})
     }
       const gamesData = this.state.NHLGameData.games
       const awayArr = gamesData.map((games=>{
         this.setState({awayTeamNames: games.teams.away.team.name})
         console.log('away team', this.state.awayTeamNames)
       }))
        const homeArr = gamesData.map((games=>{
          this.setState({homeTeamNames: games.teams.home.team.name})
          console.log('home team', this.state.homeTeamNames)
        }))
     });
  }


  render() {


    return (
<ScrollView>
        <Text style={{fontSize:35, marginTop: 35}}>{this.state.awayTeamNames}</Text>
        <Text style={{fontSize:35, marginTop: 5}}> At</Text>
        <Text style={{fontSize:35, marginTop: 5}}>{this.state.homeTeamNames}</Text>
</ScrollView>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  }
})
