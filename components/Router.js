import React from 'react'
import { createBottomTabNavigator, createAppContainer } from 'react-navigation'
import Chat from './Chat/Chat'
import SignUp from './SignUp/SignUp'
import Home from './Profile/Home'
import Schedule from './Schedule/Schedule'
const TabNavigator = createBottomTabNavigator({
  Chat: Chat,
  Profile: Home,
  SignUp: SignUp,
  Schedule: Schedule,
})


export const Nav = createAppContainer(TabNavigator)
