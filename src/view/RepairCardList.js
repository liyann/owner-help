import React, { Component } from 'react'
import {
  Container,
  Header,
  Content,
  Card,
  CardItem,
  Text,
  Icon,
  Right,
} from 'native-base'

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
export default class RepairCardList extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    const {}
    return (
      <Container>
        <Body>
          <Title>报修列表</Title>
        </Body>
        <Content>
          <Card>
            <CardItem header>
              <Text>木工类</Text>
            </CardItem>
            <CardItem>
              <Body>
                <Text>玻璃窗移动困难，轨道损毁严重</Text>
              </Body>
              <Text>2017-12-14 14:33:21</Text>
            </CardItem>
            <CardItem footer>
              <Text>GeekyAnts</Text>
              <Button warning><Text>评价</Text></Button>
            </CardItem>
          </Card>
        </Content>
      </Container>
    )
  }
}
