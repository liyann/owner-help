import {TabNavigator, StackNavigator} from 'react-navigation'
import React from 'react'
import {View, Text, Button, TextInput} from 'react-native'
import Ionicons from 'react-native-vector-icons/Ionicons'
import MCIcons from 'react-native-vector-icons/MaterialCommunityIcons'
import Notification from './notification'
import Profile from './profile'
import Style from '../themes/global'
import HomeRepair from './repair/HomeRepair'

export default TabNavigator(
  {
    Home: {
      screen: Notification,
      navigationOptions: {
        tabBarLabel: '通知',
        tabBarIcon: ({tintColor, focused}) => (
          <MCIcons
            name={focused ? 'email' : 'email-outline'}
            size={26}
            style={{color: tintColor}}
          />
        ),
      },
    },
    Repair: {
      screen: HomeRepair,
      navigationOptions: {
        tabBarLabel: '报修',
        tabBarIcon: ({tintColor, focused}) => (
          <Ionicons
            name={focused ? 'ios-add' : 'ios-add-outline'}
            size={26}
            style={{color: tintColor}}
          />
        ),
      },
    },
    Profile: {
      screen: Profile,
      navigationOptions: {
        tabBarLabel: '我的',
        tabBarIcon: ({tintColor, focused}) => (
          <Ionicons
            name={focused ? 'ios-person' : 'ios-person-outline'}
            size={26}
            style={{color: tintColor}}
          />
        ),
      },
    },
  },
  {
    tabBarPosition: 'bottom',
    animationEnabled: true,
    tabBarOptions: {
      showIcon: true,
      labelStyle: {
        fontSize: 12,
      },
      style: {
        backgroundColor: Style.globalColor,
      },
    },
  },
)
