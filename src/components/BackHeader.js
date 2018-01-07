import React, {Component} from 'react'
import {Header, Left, Button, Title, Body, Icon} from 'native-base'

export default  BackHeader = ({navigation, title}) => {
  return (
    <Header>
      <Left>
        <Button transparent onPress={() => navigation.goBack()}><Icon name="ios-arrow-back"/></Button>
      </Left>
      <Body>
      <Title>{title}</Title>
      </Body>
    </Header>
  )
}