import React from 'react'
import { createBottomTabNavigator, createAppContainer } from 'react-navigation'
import Chat from './Chat/Chat'
import Chatdisplay from './Chat/Chatdisplay'
import SignUp from './SignUp/SignUp'
import Home from './Profile/Home'
import Schedule from './Schedule/Schedule'
<<<<<<< HEAD
import ScheduleItem from './Schedule/ScheduleItem'
import BarMap from './Schedule/BarMap/BarMap'
=======
import Icon from 'react-native-vector-icons/FontAwesome'
>>>>>>> d14054e65b5280e70e72a732842420aae9bdf483

const TabNavigator = createBottomTabNavigator({
  Chat: Chatdisplay,
  Profile: Home,
  "Sign Up": SignUp,
  Schedule: Schedule,
<<<<<<< HEAD
  BarMap: BarMap,
}, {tabBarOptions: {
  activeTintColor: '#7ed957',
  inactiveTintColor: '#ffffff',
  labelStyle: {
    fontSize: 14,
=======
>>>>>>> d14054e65b5280e70e72a732842420aae9bdf483
  },
  {
  defaultNavigationOptions: ({ navigation }) => ({
      tabBarIcon: ({ focused, horizontal, tintColor }) => {
        const { routeName } = navigation.state;
        let IconComponent = Icon;
        let iconName;
        if (routeName === 'Profile') {
          iconName = 'home';
        } else if (routeName === 'Chat') {
          iconName = 'comments';
        }
        else if (routeName === 'Sign Up') {
          iconName = 'user-plus';
        }
        else if (routeName === 'Schedule') {
          iconName = 'bookmark';
        }
        return <IconComponent name={iconName} size={22} color={tintColor} paddingTop={10} />;
      },
    }),
    tabBarOptions: {
     activeTintColor: '#7ed957',
     inactiveTintColor: '#ffffff',
     labelStyle: {
       fontSize: 14,
   },
   style: {
     backgroundColor: '#545454',
     color: '#7ed957',
     paddingTop: 5
   },
 },
  },
{
  tabBarOptions: {
    activeTintColor: '#7ed957',
    inactiveTintColor: '#ffffff',
    labelStyle: {
      fontSize: 14,
    },
    style: {
      backgroundColor: '#545454',
      color: '#7ed957',
    },
  },
});

export const Nav = createAppContainer(TabNavigator)
