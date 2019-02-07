import React from 'react';
import { Text, View } from 'react-native';

const TeamDetails = (props) => {
  return (
    <View>
      <Text>{props.team.official_name}</Text>
    </View>
  )
}


export default TeamDetails
