import React, {Component} from 'react'
import {Text, View} from 'react-native'
import {
  Button, Container, Content, Header, Label, Left, List, ListItem, Body, Title, Right, Icon,
  Form, Item, Input,
} from 'native-base'
import BackHeader from '../components/BackHeader'

import {StackNavigator} from 'react-navigation'


class Profile extends Component {
  gotoModifyPwd = () => {
    this.props.navigation.navigate('ModifyPwd')
  }

  render() {
    return (
      <Container>
        <Header>
          <Body>
            <Title>个人信息</Title>
          </Body>
        </Header>
        <Content>
          <List>
            <ListItem first>
              <Left><Text>姓名</Text></Left>
              <Body><Text>张三</Text></Body>
            </ListItem>
            <ListItem bordered>
              <Left><Text>手机号</Text></Left>
              <Body><Text>13588176510</Text></Body>
            </ListItem>
            <ListItem bordered>
              <Left><Text>邮箱</Text></Left>
              <Body><Text>example@gmail.com</Text></Body>
            </ListItem>
            <ListItem bordered>
              <Left><Text>账号密码</Text></Left>
              <Body>
                <Button transparent onPress={this.gotoModifyPwd}>
                  <Text>修改</Text>
                  <Icon name="ios-arrow-forward"/>
                </Button>
              </Body>
            </ListItem>
            <ListItem last>
              <Left><Text>地址</Text></Left>
              <Body><Text>碧水豪园38幢</Text></Body>
            </ListItem>
          </List>
        </Content>
      </Container>
    )
  }
}


class ModifyPwd extends Component {
  render() {
    const {navigation} = this.props
    return (
      <Container>
        <BackHeader navigation={navigation} title="修改密码"/>
        <Content>
          <Form>
            <Item inlineLabel>
              <Input placeholder='原密码'/>
            </Item>
            <Item inlineLabel>
              <Input placeholder='新密码'/>
            </Item>
            <Item inlineLabel>
              <Input placeholder='确认新密码'/>
            </Item>
            <Item inlineLabel>
              <View style={{paddingVertical:10,marginBottom:20}}>
                <Text>
                  密码长度至少8个字符，最多32个字符
                </Text>
              </View>
            </Item>
              <View style={{paddingHorizontal:10}}>
                <Button full success><Text>确定</Text></Button>
              </View>

          </Form>
        </Content>
      </Container>
    )
  }
}

const HomeProfile = StackNavigator({
  Prifile: {
    screen: Profile,
  },
  ModifyPwd: {
    screen: ModifyPwd,
    navigationOptions: {
      tabBarVisible: false,
    },
  },
}, {
  headerMode: 'none',
})

export default HomeProfile