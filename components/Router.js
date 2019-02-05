import React from 'react'
import { createBottomTabNavigator, createAppContainer } from 'react-navigation'
import Chat from './Chat/Chat'
import Chatdisplay from './Chat/Chatdisplay'
import SignUp from './SignUp/SignUp'
import Home from './Profile/Home'
import Schedule from './Schedule/Schedule'
import ScheduleItem from './Schedule/ScheduleItem'

const TabNavigator = createBottomTabNavigator({
  Chat: Chatdisplay,
  Profile: Home,
  SignUp: SignUp,
  Schedule: Schedule,
  ScheduleItem: ScheduleItem
}, {tabBarOptions: {
  activeTintColor: '#fff',
  inactiveTintColor: 'black',
  labelStyle: {
    fontSize: 14
  },
  style: {
    backgroundColor: '#7ed957',
    color: '#7ed957'
  }
}})


export const Nav = createAppContainer(TabNavigator)
