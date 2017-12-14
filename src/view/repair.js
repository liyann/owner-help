import React, { Component } from 'react'
import {
  Container,
  Header,
  Content,
  Button,
  Icon,
  Text,
  List,
  ListItem,
  Item,
  Input,
  Body,
  Left,
  Right,
  Card,
  CardItem,
  Title,
  Picker,
  Form,
} from 'native-base'
import {
  TouchableOpacity,
  View,
  TouchableWithoutFeedback,
  TouchableHighlight,
  TextInput,
  Image,
} from 'react-native'
import Modal from 'react-native-modal'
import ImagePicker from 'react-native-image-picker'
import MaterialIcons from 'react-native-vector-icons/MaterialIcons'
import { repairList } from '../static'

const PickerItem = Picker.Item
const photoOptions = {
  //底部弹出框选项
  title: '请选择',
  cancelButtonTitle: '取消',
  takePhotoButtonTitle: '拍照',
  chooseFromLibraryButtonTitle: '相册',
  quality: 0.75,
  allowsEditing: true,
  cameraType: 'back',
  noData: false,
  storageOptions: {
    skipBackup: true,
    path: 'images',
  },
}

export default class AddRepair extends Component {
  constructor(props) {
    super(props)
    this.state = {
      Imgs: [],
      selected: undefined,
    }
  }
  setModalVisible = visible => {
    this.setState({ isModalVisible: visible })
  }
  onValueChange = value => {
    this.setState({
      selected: value,
    })
  }

  openMycamera = () => {
    const { Imgs } = this.state
    ImagePicker.showImagePicker(photoOptions, response => {
      if (response.didCancel) {
        console.log('User cancelled image picker')
      } else if (response.error) {
        console.log('ImagePicker Error: ', response.error)
      } else if (response.customButton) {
        console.log('User tapped custom button: ', response.customButton)
      } else {
        let source = { uri: response.uri }

        // You can also display the image using data:
        // let source = { uri: 'data:image/jpeg;base64,' + response.data };
        console.log('====================================')
        console.log(response)
        console.log('====================================')
        this.setState({
          Imgs: [
            ...Imgs,
            {
              source: source,
            },
          ],
        })
      }
    })
  }

  postMessage = () => {
    return
  }

  render() {
    const { Imgs } = this.state
    const renderRepairList = repairList.map((item, index) => (
      <PickerItem label={item.desc} value={item.value} key={index} />
    ))
    return (
      <Container>
        <Header>
          <Body>
            <Title>发起报修</Title>
          </Body>
          <Right>
            <Button success onPress={() => this.postMessage()}>
              <Text>发送</Text>
            </Button>
          </Right>
        </Header>
        <Content>
          <View
            style={{
              flex: 1,
              flexDirection: 'row',
              justifyContent: 'flex-start',
              alignItems: 'center',
              padding: 10,
              backgroundColor: '#D3D3D3',
              height: 120,
            }}
          >
            {Imgs.length > 0 &&
              Imgs.map((img, index) => (
                <Image
                  key={index}
                  source={{ uri: img.source.uri }}
                  style={{ width: 80, height: 80, marginRight: 10 }}
                />
              ))}
            <TouchableHighlight onPress={() => this.openMycamera()}>
              <View
                style={{
                  height: 80,
                  width: 80,
                  borderWidth: 1,
                  borderColor: 'gray',
                  display: 'flex',
                  justifyContent: 'center',
                  alignItems: 'center',
                  backgroundColor: 'white',
                }}
              >
                <Icon
                  name="ios-add-circle-outline"
                  style={{ fontSize: 50, color: 'gray' }}
                />
              </View>
            </TouchableHighlight>
          </View>
          <Form>
            <List>
              <ListItem itemDivider>
                <Text>报修描述</Text>
              </ListItem>
              <ListItem>
                <Input
                  placeholder="请用简短的话描述报修的内容"
                  multiline={false}
                />
              </ListItem>
              <ListItem itemDivider>
                <Text>报修类型</Text>
              </ListItem>
              <ListItem>
                <Picker
                  placeholder="请选择一个报修项目"
                  selectedValue={this.state.selected}
                  onValueChange={this.onValueChange}
                  style={{ width: 300 }}
                >
                  {renderRepairList}
                </Picker>
              </ListItem>
              <ListItem itemDivider>
                <Text>报修地址</Text>
              </ListItem>
              <ListItem>
                <Text>碧水豪园 15# 327</Text>
                <Text>李雁南 13588176510</Text>
              </ListItem>
            </List>
          </Form>
        </Content>
      </Container>
    )
  }
}
