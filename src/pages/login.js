import React, { Component } from 'react';
import { Container, Header, Content, Form, Button, Input, Item } from 'native-base'
export default class Login extends Component {

  render() {
    return (
      <Container>
        <Header>
          <Content>
            <Form>
              <Item>
                <Input placeholder="用户名" />
              </Item>
              <Item>
                <Input placeholder="密码" />
              </Item>
            </Form>
          </Content>
        </Header>
      </Container>

    )
  }
}

