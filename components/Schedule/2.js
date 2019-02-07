import React from 'react'
import {StyleSheet, Text, View, ScrollView, KeyboardAvoidingView } from 'react-native';
import { Header, ListItem, Card, Button } from 'react-native-elements';
import axios from 'axios'
export default class ScheduleItem extends React.Component {
state ={
  TodayNHLGameData: [],
  CurrentNHLSeasonData: [],
  games: [],
}
  constructor() {
    super();
    axios.get('https://statsapi.web.nhl.com/api/v1/schedule')
     .then(res=> {
       try {
       this.setState({ TodayNHLGameData: res.data.dates[0]})
     }
     catch {
       this.setState({hometeamName: 'There are no games today' , awayTeamNames: ''})
     }
       const gamesData = this.state.TodayNHLGameData.games
       const todayDate = this.state.TodayNHLGameData.date
       const awayArr = gamesData.map((games=>{
         let obj={}
         obj.home = games.teams.home.team.name
         obj.away = games.teams.away.team.name
         obj.date = todayDate
         obj.homeScore = games.teams.home.score
         obj.awayScore = games.teams.away.score
         this.setState({games: [...this.state.games, obj]})
       }))
     })
     axios.get('https://statsapi.web.nhl.com/api/v1/schedule?startDate=2018-10-03&endDate=2019-04-06')
    .then(res=>{
        this.setState({CurrentNHLSeasonData: res.data})
    })
  }
renderMap=(index)=>{
  console.log(index)
}
  render() {
    console.log(this.state.userLocation)
    return (
      <ScrollView>
        <Header backgroundColor="rgb(126, 217, 75)"   centerComponent={{ text: 'NHL Schedule', style: { color: '#fff', fontSize: 22, fontWeight: 'bold' } }} />
        <View>
        {
    this.state.games.map((game, index) => (
      <ListItem
        key={index}
        onPress={this.renderMap.bind(this, index)}
        title={`${game.away} ${game.awayScore}`}
        subtitle={`${game.home} ${game.homeScore}`}
        rightTitle={game.date}
        style={styles.list} containerStyle={{backgroundColor: 'black'}} titleStyle={{ color: 'white', fontSize:15, fontWeight: 'bold'}} rightTitleStyle={{ color: 'white', fontWeight: 'bold', fontSize: 15 }} subtitleStyle={{ color: 'white', fontWeight: 'bold'}} chevron chevronColor="black"
       />
     ))
     }
     </View>
      </ScrollView>
    )
  }
}
const styles = StyleSheet.create({
  list: {
    borderWidth: .5,
    borderColor: "rgb(126, 217, 87)",
  }
})



C
