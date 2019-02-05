import React from 'react'
import { createBottomTabNavigator, createAppContainer } from 'react-navigation'
import Chat from './Chat/Chat'
import Chatdisplay from './Chat/Chatdisplay'
import SignUp from './SignUp/SignUp'
import Home from './Profile/Home'
import Schedule from './Schedule/Schedule'
import ScheduleItem from './Schedule/ScheduleItem'
import BarMap from './Schedule/BarMap/BarMap'

const TabNavigator = createBottomTabNavigator({
  Chat: Chatdisplay,
  Profile: Home,
  SignUp: SignUp,
  Schedule: Schedule,
  BarMap: BarMap,
}, {tabBarOptions: {
  activeTintColor: '#7ed957',
  labelStyle: {
    fontSize: 14,
  },
  style: {
    backgroundColor: '#545454',
  },
}})


export const Nav = createAppContainer(TabNavigator)
