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
  Body,
  Left,
  Right
} from 'native-base'
import {
  TouchableOpacity,
  View,
  TouchableWithoutFeedback,
  TouchableHighlight
} from 'react-native'
import Modal from 'react-native-modal'
import ImagePicker from 'react-native-image-picker'

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
    path: 'images'
  }
}

export default class Notification extends Component {
  constructor(props) {
    super(props)
    this.state = {
      isModalVisible: false
    }
  }
  setModalVisible = visible => {
    this.setState({ isModalVisible: visible })
  }

  openMycamera = () => {
    console.log('click')
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

        this.setState({
          avatarSource: source
        })
      }
    })
  }

  render() {
    const { modalVisible } = this.state
    return (
      <Container>
        <Header>
          <Button
            transaprent
            style={{
              position: 'absolute',
              top: 5,
              right: 15
            }}
            onPress={() => this.setModalVisible(true)}
          >
            <Icon
              name="camera"
              style={{
                color: 'white',
                fontSize: 30
              }}
            />
          </Button>
        </Header>
        <Content>
          <View style={{ flex: 1 }}>
            <TouchableOpacity onPress={() => this.setModalVisible(true)}>
              <Text>Show Modal</Text>
            </TouchableOpacity>
            <Modal
              isVisible={this.state.isModalVisible}
              style={{ marginBottom: 0, paddingBottom: 0 }}
              onBackButtonPress={() => this.setModalVisible(false)}
            >
              <TouchableHighlight>
                {/* <TouchableHighlight onPress={() => this.setModalVisible(false)}> */}
                <View
                  style={{
                    height: 500,
                    backgroundColor: 'transparent',
                    alignContent: 'center',
                    justifyContent: 'center'
                  }}
                >
                  <View style={{ height: 250 }}>
                    <List>
                      <ListItem button onPress={() => this.openMycamera()}>
                        <Body>
                          <Text style={{ marginLeft: 20 }}>拍摄</Text>
                          <Text note style={{ position: 'absolute', right: 5 }}>
                            照片
                          </Text>
                        </Body>
                      </ListItem>
                      <ListItem button onPress={() => this.openMycamera()}>
                        <Text style={{ marginLeft: 20 }}>从相册选取</Text>
                      </ListItem>
                    </List>
                  </View>
                </View>
              </TouchableHighlight>
            </Modal>
          </View>
        </Content>
      </Container>
    )
  }
}
