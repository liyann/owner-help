import React, {Component} from 'react'
import {
  Container, Header, Content, List, ListItem, Text, Input, Label, Form, Item, Icon, Left, Body,
  Button,
} from 'native-base'
import {View, TextInput, StyleSheet, TouchableWithoutFeedback, Image} from 'react-native'
import ImagePicker from 'react-native-image-picker'

class UselessTextInput extends Component {
  render() {
    return (
      <TextInput
        {...this.props}
        editable={true}
        maxLength={80}
        underlineColorAndroid='transparent' //设置下划线背景色透明 达到去掉下划线的效果
      />
    )
  }
}

class UselessTextInputMultiline extends Component {
  constructor(props) {
    super(props)
    this.state = {
      text: '',

    }
  }

  render() {
    return (
      <View style={{
        marginHorizontal: 20,
        position: 'relative',
        borderColor: '#8c9291',
        borderWidth: .8,
        borderRadius: 4,
        marginTop: 10,

      }}
      >
        <UselessTextInput
          multiline={true}
          numberOfLines={4}
          onChangeText={(text) => this.setState({text})}
          value={this.state.text}
          placeholder='请输入评价内容，不超过80个字。'
        />
        <View style={{position: 'absolute', top: 50, right: 10}}>
          <Text style={{color: 'gray'}}>0/80</Text>
        </View>
      </View>
    )
  }
}

class StarEvaluate extends Component {
  constructor(props) {
    super(props)
    this.state = {
      lightStarIndex: 1,
    }
  }

  adjustLightStar = (index) => {
    this.setState({lightStarIndex: index})
  }

  render() {
    const {label} = this.props
    const _starArray = [1, 2, 3, 4, 5]
    const _starRenderArray = _starArray.map(index => {
      if (index <= this.state.lightStarIndex) {
        return (
          <TouchableWithoutFeedback key={index} onPress={this.adjustLightStar.bind(this, index)}>
            <Icon name="md-star" style={{color: 'orange'}}/>
          </TouchableWithoutFeedback>
        )
      } else {
        return (
          <TouchableWithoutFeedback key={index} onPress={this.adjustLightStar.bind(this, index)}>
            <Icon name="md-star-outline"/>
          </TouchableWithoutFeedback>
        )
      }
    })

    return (
      <View style={{display: 'flex', flexDirection: 'row', justifyContent: 'space-around', padding: 10}}>
        <View style={{marginRight: 60}}>
          <Text style={{color: '#272727'}}>{label}</Text>
        </View>
        <View style={{display: 'flex', flexDirection: 'row', justifyContent: 'space-around', alignItems: 'center'}}>
          {_starRenderArray}
        </View>
      </View>
    )
  }
}

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

export default class EvaluateScreen extends Component {
  constructor(props) {
    super(props)
    this.state = {
      Imgs: [],
    }
  }


  openMycamera = () => {
    const {Imgs} = this.state
    ImagePicker.showImagePicker(photoOptions, response => {
      if (response.didCancel) {
        console.log('User cancelled image picker')
      } else if (response.error) {
        console.log('ImagePicker Error: ', response.error)
      } else if (response.customButton) {
        console.log('User tapped custom button: ', response.customButton)
      } else {
        let source = {uri: response.uri}

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


  render() {
    const {Imgs} = this.state
    return (
      <Container>
        <Content>

          <Form >
            <UselessTextInputMultiline/>
            <Item style={{marginTop: 20}}>
              <StarEvaluate label='响应速度'/>
            </Item>
            <Item>
              <StarEvaluate label='维修质量'/>
            </Item>
            <Item>
              <StarEvaluate label='服务态度'/>
            </Item>
            <Item style={{justifyContent: 'flex-start', paddingVertical: 30,}}>
              {Imgs.length > 0 &&
              Imgs.map((img, index) => (
                <View style={styles.photoBoxStyle}>
                  <Image
                    key={index}
                    source={{uri: img.source.uri}}
                  />
                </View>

              ))}
              <TouchableWithoutFeedback onPress={this.openMycamera}>
                <View style={styles.cameraBoxStyle}>
                  <Icon name="ios-camera-outline" style={{color: 'gray', fontSize: 50}}/>
                </View>
              </TouchableWithoutFeedback>
              {Imgs.length === 0 && <View><Text>上传图片反馈</Text></View>}
            </Item>
            <Button full success><Text>提交</Text></Button>
          </Form>

        </Content>
      </Container>
    )
  }
}


const styles = StyleSheet.create({
  cameraBoxStyle: {
    width: 70,
    height: 70,
    borderWidth: .8,
    borderColor: '#8c9291',
    justifyContent: 'center',
    alignItems: 'center',
    paddingLeft: 8,
    borderRadius: 4,
    marginRight: 10,
  },
  photoBoxStyle: {
    width: 70,
    height: 70,
    borderWidth: .8,
    borderColor: '#8c9291',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 4,
    marginRight: 10,
  },
})
