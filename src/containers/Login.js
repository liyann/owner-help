import React, { Component } from 'react';
import {Container, Header, Content, Form, Button, Input, Item, Radio, Text} from 'native-base'
export default class Login extends Component {

  render() {
    return (
      <Container>
        <Header>
          <Content>
            <Form>
              <Item>
                <Text>业主</Text>
                <Radio selected={true}/>
                <Text>物业管理</Text>
                <Radio selected={false}/>
                <Text>物业服务</Text>
                <Radio selected={false}/>
              </Item>
              <Item>
                <Input placeholder="用户名" />
              </Item>
              <Item>
                <Input placeholder="密码" />
              </Item>
              <Item>
                <Button><Text>提交</Text></Button>
              </Item>
            </Form>
          </Content>
        </Header>
      </Container>

    )
  }
}

