import { TabNavigator, StackNavigator } from 'react-navigation'
import React from 'react'
import { View, Text, Button, TextInput } from 'react-native'
import Ionicons from 'react-native-vector-icons/Ionicons'
import FooterTabsBadge from './src/components/FooterTabsBadge'
import MCIcons from 'react-native-vector-icons/MaterialCommunityIcons'
import Notification from './src/view/notification'
import Profile from './src/view/profile'
import Repair from './src/view/repair'
import Style from './src/style/global'
const RootTabs = TabNavigator(
  {
    Home: {
      screen: Notification,
      navigationOptions: {
        tabBarLabel: '通知',
        tabBarIcon: ({ tintColor, focused }) => (
          <MCIcons
            name={focused ? 'email' : 'email-outline'}
            size={26}
            style={{ color: tintColor }}
          />
        ),
      },
    },
    Repair: {
      screen: Repair,
      navigationOptions: {
        tabBarLabel: '报修',
        tabBarIcon: ({ tintColor, focused }) => (
          <Ionicons
            name={focused ? 'ios-camera' : 'ios-camera-outline'}
            size={26}
            style={{ color: tintColor }}
          />
        ),
      },
    },
    Profile: {
      screen: Profile,
      navigationOptions: {
        tabBarLabel: '我的',
        tabBarIcon: ({ tintColor, focused }) => (
          <Ionicons
            name={focused ? 'ios-person' : 'ios-person-outline'}
            size={26}
            style={{ color: tintColor }}
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

export default RootTabs
