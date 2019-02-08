import React from 'react'
import { createBottomTabNavigator, createAppContainer } from 'react-navigation'
import Chat from './Chat/Chat'
import Chatdisplay from './Chat/Chatdisplay'
import SignUp from './SignUp/SignUp'
import Home from './Profile/Home'
import Schedule from './Schedule/Schedule'
import BarMap from './Schedule/BarMap/BarMap'
import Icon from 'react-native-vector-icons/FontAwesome'

const TabNavigator = createBottomTabNavigator({
  Chat: Chatdisplay,
  Profile: Home,
  "Sign Up": SignUp,
  Schedule: Schedule,
  BarMap: BarMap
  },
  {
    defaultNavigationOptions: ({ navigation }) => ({
      tabBarIcon: ({ focused, horizontal, tintColor }) => {
        const { routeName } = navigation.state;
        let IconComponent = Icon;
        let iconName;
        if (routeName === 'Profile') {
          iconName = 'arrow-left';
          // Sometimes we want to add badges to some icons.
          // You can check the implementation below.
          // IconComponent = HomeIconWithBadge;
        } else if (routeName === 'Chat') {
          iconName = 'arrow-left';
        }

        // You can return any component that you like here!
        return <IconComponent name={iconName} size={25} color={tintColor} />;
      },
    }),
},
  {tabBarOptions: {
  activeTintColor: '#7ed957',
  inactiveTintColor: '#ffffff',
  labelStyle: {
    fontSize: 14,
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
},
})
export const Nav = createAppContainer(TabNavigator)
