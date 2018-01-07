import React, {Component} from 'react'
import {
  Container,
  Header,
  Body,
  Content,
  Card,
  CardItem,
  Text,
  Icon,
  Right,
  Button, Title, Left, Label,
} from 'native-base'

import {StyleSheet, View, Easing, Animated} from 'react-native'
import {StackNavigator} from 'react-navigation'
import AddRepairScreen from './addRepair'
import EvaluateScreen from './evaluate'
import {primaryStyles} from '../../static'

const styles = StyleSheet.create({
  time: {
    position: 'absolute',
    right: 10,
  },
  timeText: {
    fontSize: 12,
  },

})
const repaireHistory = [
  {
    time: '2017-12-14 14:33:21',
    resPerson: 'zhangsan',
    desc: '玻璃窗移动困难，轨道损毁严重',
    isEvaluated: false,
    evaluatedDesc: '解决问题及时，服务态度好',
    evaluatedLevel: 1,
    type: 0,
  },
  {
    time: '2017-12-14 14:33:21',
    resPerson: 'zhangsan',
    desc: '玻璃窗移动困难，轨道损毁严重',
    isEvaluated: true,
    evaluatedDesc: '解决问题及时，服务态度好',
    evaluatedLevel: 2,
    type: 1,
  },
  {
    time: '2017-12-14 14:33:21',
    resPerson: 'zhangsan',
    desc: '玻璃窗移动困难，轨道损毁严重',
    isEvaluated: false,
    evaluatedDesc: '解决问题及时，服务态度好',
    evaluatedLevel: 3,
    type: 2,
  },
]


class RepairCardList extends Component {

  gotoEvaluteScreen=()=>{
    const {navigation} = this.props
    navigation.navigate('Evaluate')
  }

  render() {
    return (
      <Container>
        <Content>
          <Card>
            <CardItem header>
              <Text>木工类</Text>
            </CardItem>
            <CardItem>
              <Body>
              <Text>玻璃窗移动困难，轨道损毁严重</Text>
              </Body>
            </CardItem>
            <CardItem>
              <View style={styles.time}>
                <Text style={styles.timeText}>2017-12-14 14:33:21</Text>
              </View>
            </CardItem>
            <CardItem footer>
              <Left>
                <Label>报修人：</Label>
                <Text>张三</Text>
              </Left>
              <Right style={styles.evaluate}>
                <Button warning onPress={this.gotoEvaluteScreen}><Text>去评价</Text></Button>
                {/*<Button success><Text>已评价</Text></Button>*/}
              </Right>
            </CardItem>
          </Card>
          <Card>
            <CardItem header>
              <Text>水工类</Text>
            </CardItem>
            <CardItem>
              <Body>
              <Text>水龙头破坏，需要换新</Text>
              </Body>
            </CardItem>
            <CardItem>
              <View style={styles.time}>
                <Text style={styles.timeText}>2017-12-14 14:33:21</Text>
              </View>
            </CardItem>
            <CardItem footer>
              <Left>
                <Label>报修人：</Label>
                <Text>张三</Text>
              </Left>
              <Right style={styles.evaluate}>
                <Button warning onPress={this.gotoEvaluteScreen}><Text>去评价</Text></Button>
                {/*<Button success><Text>已评价</Text></Button>*/}
              </Right>
            </CardItem>
          </Card>
        </Content>
      </Container>
    )
  }
}


const HomeHeader = (navigation) => {
  return (
    <Header>
      <Body>
      <Title>报修列表</Title>
      </Body>
      <Right>
        <Button transparent onPress={() => navigation.navigate('Repair')}>
          <Icon name="camera" style={{fontSize: 40}}/></Button>
      </Right>
    </Header>
  )
}

const AddRepairHeader = (navigation) => {
  return (
    <Header>
      <Left>
        <Button transparent onPress={() => navigation.goBack()}><Icon name="ios-arrow-back"/></Button>
      </Left>
      <Body>
      <Title>评价</Title>
      </Body>
    </Header>
  )
}

const navigationConfig = {
  transitionConfig: () => ({
    transitionSpec: {
      duration: 300,
      easing: Easing.out(Easing.poly(4)),
      timing: Animated.timing,
    },
    screenInterpolator: sceneProps => {
      const {layout, position, scene} = sceneProps
      const {index} = scene

      const height = layout.initHeight
      const translateY = position.interpolate({
        inputRange: [index - 1, index, index + 1],
        outputRange: [height, 0, 0],
      })

      const opacity = position.interpolate({
        inputRange: [index - 1, index - 0.99, index],
        outputRange: [0, 1, 1],
      })

      return {opacity, transform: [{translateY}]}
    },
  }),

}

const HomeRepair = StackNavigator({
  RepairCardList: {
    path: 'RepairCardList',
    screen: RepairCardList,
    navigationOptions: ({navigation}) => ({
      header: HomeHeader(navigation),
    }),
  },
  Evaluate: {
    path: 'Evaluate/:id',
    screen: EvaluateScreen,
    navigationOptions: ({navigation}) => ({
      header: AddRepairHeader(navigation),
      title: '评价',
      swipeEnabled:false,
      tabBarPosition:false,
      tabBarVisible:false,
      headerStyle: {
        backgroundColor: primaryStyles.mainColor,
      },
      headerTitleStyle: {
        color: 'white',
      },
    }),
  },
  Repair: {
    path: 'Repair',
    screen: AddRepairScreen,
    navigationOptions: ({navigation}) => ({
      header: AddRepairHeader(navigation),
      title: '发起报修',
      swipeEnabled:false,
      tabBarVisible:false,
      headerStyle: {
        backgroundColor: primaryStyles.mainColor,
      },
      headerTitleStyle: {
        color: 'white',
      },
    }),
  },
}, navigationConfig)

export default HomeRepair
