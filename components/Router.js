import React from 'react'
import { createBottomTabNavigator, createAppContainer } from 'react-navigation'
import Chat from './Chat/Chat'
import Chatlist from './Chat/Chatlist'
import SignUp from './SignUp/SignUp'
import Home from './Profile/Home'
import Schedule from './Schedule/Schedule'

const TabNavigator = createBottomTabNavigator({
  Chat: Chatlist,
  Profile: Home,
  SignUp: SignUp,
  Schedule: Schedule
})


export const Nav = createAppContainer(TabNavigator)
