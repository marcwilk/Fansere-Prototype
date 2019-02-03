import React from 'react'
import { createBottomTabNavigator, createAppContainer } from 'react-navigation'
import Chat from './Chat/Chat'
import SignUp from './SignUp/SignUp'
import Home from './Profile/Home'
import Schedule from './Schedule/Schedule'
import ScheduleItem from './Schedule/ScheduleItem'

const TabNavigator = createBottomTabNavigator({
  Chat: Chat,
  Profile: Home,
  SignUp: SignUp,
  Schedule: Schedule, 
  ScheduleItem: ScheduleItem
})


export const Nav = createAppContainer(TabNavigator)
