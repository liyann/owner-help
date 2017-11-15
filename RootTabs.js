import { TabNavigator } from 'react-navigation'
import React from 'react'
import { View, Text, Button, TextInput } from 'react-native'
import Ionicons from 'react-native-vector-icons/Ionicons';
const HomeScreen = ({ navigation }) => (
  <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
    <Text>Home Screen</Text>
    <Button
      onPress={() => navigation.navigate('Details')}
      title='Go to Details'
    >
    </Button>
    <Ionicons
      name={'md-add-circle'}
      size={50}
      style={{ color: '#0666C6' }}
    />
  </View>
)

class ProfileScreen extends React.Component {
  constructor(props) {
    super(props)
    this.state = { text: '' }
  }
  render() {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text>Profile Screen</Text>
        <TextInput
          style={{ height: 80, width: 400 }}
          placeholder='Type here to translate!'
          onChangeText={(text) => {
            this.setState({ text })
          }}
        />
        <Text style={{ padding: 10, fontSize: 42 }}>
          {this.state.text.split(' ').map((word) => word && '🍕').join(' ')}
        </Text>
      </View>
    )
  }
}

const RootTabs = TabNavigator({
  Home: {
    screen: HomeScreen,
    navigationOptions: {
      tabBarLabel: 'Home',
      tabBarIcon: ({ tintColor, focused }) => (
        <Ionicons
          name={focused ? 'ios-home' : 'ios-home-outline'}
          size={26}
          style={{ color: tintColor }}
        />
      )
    }
  },
  Profile: {
    screen: ProfileScreen,
    navigationOptions: {
      tabBarLabel: 'Profile',
      tabBarIcon: ({ tintColor, focused }) => (
        <Ionicons
          name={focused ? 'ios-person' : 'ios-person-outline'}
          size={26}
          style={{ color: tintColor }}
        />
      )

    }
  }
})

export default RootTabs