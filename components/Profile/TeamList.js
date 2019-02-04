import React, { Component } from 'react';
import { Container, Header, Content, List, ListItem, Text, Separator, SwipeRow, Icon, Button, View } from 'native-base';
import axios from 'axios';
import TeamInfo from './TeamInfo'

class TeamsList extends Component {
  state = { teams: [] }

  componentWillMount() {
    axios.get('heroku-db-when-working')
      .then(response => this.setState({ teams: response.data}))
  }

  renderTeams() {
      return this.state.teams.map(team =>
        <TeamDetails key={team.official_name} team={team} />
      )
    }
}
