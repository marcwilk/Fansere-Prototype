import React, { Component } from 'react'
import { StyleSheet, Container, Header, Content, List, ListItem, Text, Separator, SwipeRow, Icon, Button, View } from 'react-native'
import axios from 'axios'
import TeamDetails from './TeamDetails'

export default class Teams extends React.Component {
    state = { teams: [] }

    componentWillMount() {
      axios.get('https://fanseredb.herokuapp.com/nba_teams')
        .then(response => this.setState({ teams: response.data}))
    }

    render() {
        return this.state.teams.map(team =>
          <TeamDetails key={team.official_name} team={team} />
        )
      }
  }
