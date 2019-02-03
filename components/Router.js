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
<<<<<<< HEAD
  ScheduleItem: ScheduleItem
=======
  ScheduleItem : ScheduleItem
>>>>>>> 59ef24a3f1ea06565a8c595477dfdda6a71fddf5
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
