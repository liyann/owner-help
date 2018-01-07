import React, {Component} from 'react'
import {Image, StyleSheet} from 'react-native'
import EnIcon from 'react-native-vector-icons/Entypo'
import * as Actions from '../../actions'
import {setUser} from '../../actions'
import {connect} from 'react-redux'
import {login} from '../../services/api'
import {
  Container,
  Content,
  Item,
  Input,
  Button,
  Icon,
  View,
  Text,
} from 'native-base'
import styles from './styles'
import {Radio} from 'native-base'
import Storage from '../../utils/storage'

const validate = values => {
  const error = {}
  error.email = ''
  error.password = ''
  console.log(values)
  var ema = values.email
  var pw = values.password
  if (values.email === undefined) {
    ema = ''
  }
  if (values.password === undefined) {
    pw = ''
  }
  if (ema.length < 8 && ema !== '') {
    error.email = 'too short'
  }
  if (!ema.includes('@') && ema !== '') {
    error.email = '@ not included'
  }
  if (pw.length > 12) {
    error.password = 'max 11 characters'
  }
  if (pw.length < 5 && pw.length > 0) {
    error.password = 'Weak'
  }
  return error
}

class Login extends Component {
  constructor(props) {
    super(props)

    this.state = {
      name: '',
      email: 'admin',
      password: 'admin',
      userType: 'owner',//manager,worker
    }
  }

  changeUserType = (type) => {
    this.setState({userType: type})
  }

  setUser(name) {
    this.props.setUser(name)
  }

  getToken = () => {
    console.log('this.props:', this.props)
    const body = {
      email: this.state.email,
      password: this.state.password,
    }
    let token = ''
    login(body).then(res => {
      token = res.data
      Storage.set('token', token).then(() => {
        Storage.get('token').then(value => {
          console.log('Token', value)
          this.props.navigation.navigate('Home')
        })
        // this.props.navigation.navigate('Home')
      })
    })
  }


  render() {
    const {userType} = this.state
    return (
      <Container>
        <View style={styles.container}>
          <Content>
            <View style={StyleLogin.icon}>
              <EnIcon name='tools' size={100} color='#5067FF'/>
              <Text>业主帮</Text>
            </View>
            <View style={styles.bg}>
              <View
                style={{
                  display: 'flex',
                  flexDirection: 'row',
                  justifyContent: 'center',
                  marginTop: -100,
                  marginBottom: 30,
                }}
              >
                <View
                  style={{
                    width: 50,
                    marginRight: 50,
                    justifyContent: 'center',
                    alignItems: 'center',
                  }}
                >
                  <Text>业主</Text>
                  <Radio selected={userType === 'owner'} onPress={() => this.changeUserType('owner')}/>
                </View>

                <View
                  style={{
                    width: 50,
                    marginRight: 50,
                    justifyContent: 'center',
                    alignItems: 'center',
                  }}
                >
                  <Text>管理</Text>
                  <Radio selected={userType === 'manager'} onPress={() => this.changeUserType('manager')}/>
                </View>

                <View
                  style={{
                    width: 50,
                    marginRight: 50,
                    justifyContent: 'center',
                    alignItems: 'center',
                  }}
                >
                  <Text>维修</Text>
                  <Radio selected={userType === 'worker'} onPress={() => this.changeUserType('worker')}/>
                </View>
              </View>
              <Item>
                <Icon active name='person'/>
                <Input
                  placeholder="邮箱"
                  onChangeText={(email) => this.setState({email})}
                />
              </Item>
              <Item>
                <Icon active name='unlock'/>
                <Input
                  placeholder="密码"
                  onChangeText={(password) => this.setState({password})}
                />
              </Item>
            </View>
            <View style={StyleLogin.btnGroup}>
              <Button
                style={styles.btn}
                onPress={this.getToken}
              >
                <Text>登录</Text>
              </Button>
              <Button
                style={styles.btn}
                onPress={() => this.props.navigation.navigate('Home')}
              >
                <Text>注册</Text>
              </Button>
            </View>
          </Content>
        </View>
      </Container>
    )
  }
}


export default connect((state) => state)(Login)

const StyleLogin = StyleSheet.create({
  centerRadio: {
    width: 50,
    marginRight: 50,
    justifyContent: 'center',
    alignItems: 'center',
  },
  btnGroup: {
    marginLeft: 100,
    flexDirection: 'row',
    width: 150,
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  icon: {alignItems: 'center', justifyContent: 'center', marginTop: 50},
})
