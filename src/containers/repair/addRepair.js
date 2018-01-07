import React, {Component} from 'react'
import {
  Container,
  Content,
  Button,
  Icon,
  Text,
  List,
  ListItem,
  Input,
  Picker, Left, Body,
} from 'native-base'
import {
  View,
  TouchableWithoutFeedback,
  Image,
  StyleSheet
} from 'react-native'
import ImagePicker from 'react-native-image-picker'
import {repairList} from '../../static'
import {uploadImg as uploadImgRequest} from '../../services/api'

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
      desc:''
    }
  }

  onValueChange = value => {
    console.log(value)
    this.setState({
      selected: value,
    })
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
        let source = {uri: response.uri, name: response.fileName, type: response.type}

        // You can also display the image using data:
        // let source = { uri: 'data:image/jpeg;base64,' + response.data };
        console.log('====================================')
        console.log(response)
        console.log('====================================')
        this.setState({
          Imgs: [
            ...Imgs,
            {source},
          ],
        })
      }
    })
  }

  postMessage = () => {
    return
  }

  uploadImg = () => {
    let formData = new FormData()
    this.state.Imgs.forEach((img) => {
      formData.append('file', img.source)
    })
    uploadImgRequest(formData).then(res => {
      console.log('RES:', res)
    })
  }

  onDescChange=(value)=>{
    this.setState({desc:value})
  }

  on

  submitRecord = () => {

  }


  render() {
    const {Imgs,desc} = this.state
    const renderRepairList = repairList.map((item, index) => (
      <PickerItem label={item.desc} value={item.value} key={index}/>
    ))
    return (
      <Container>
        <Content>
          <View
            style={{
              flex: 1,
              flexDirection: 'row',
              justifyContent: 'flex-start',
              alignItems: 'center',
              padding: 10,
              // backgroundColor: '#D3D3D3',
              height: 120,
            }}
          >
            {Imgs.length > 0 &&
            Imgs.map((img, index) => (
              <Image
                key={index}
                source={{uri: img.source.uri}}
                style={{width: 80, height: 80, marginRight: 10}}
              />
            ))}
            <TouchableWithoutFeedback onPress={this.openMycamera}>
              <View
                style={{
                  width: 70,
                  height: 70,
                  borderWidth: .8,
                  borderColor: '#8c9291',
                  justifyContent: 'center',
                  alignItems: 'center',
                  borderRadius: 4,
                  marginRight: 10,
                  backgroundColor: '#fff',
                }}
              >
                <Icon
                  name="ios-add-circle-outline"
                  style={{fontSize: 50, color: 'gray'}}
                />
              </View>
            </TouchableWithoutFeedback>
          </View>
          <List>
            <ListItem itemDivider>
              <Text>报修描述</Text>
            </ListItem>
            <ListItem style={listItemStyle.wrapper}>
              <Input
                placeholder="请用简短的话描述报修的内容"
                multiline={true}
                value={desc}
                onChangeText={this.onDescChange}
              />
            </ListItem>
            <ListItem itemDivider>
              <Text>报修类型</Text>
            </ListItem>
            <ListItem style={listItemStyle.wrapper}>
              <Picker
                placeholder="请选择一个报修项目"
                selectedValue={this.state.selected}
                onValueChange={this.onValueChange}
                style={{width: 300}}
              >
                {renderRepairList}
              </Picker>
            </ListItem>
            <ListItem itemDivider>
              <Text>报修地址</Text>
            </ListItem>
            <ListItem style={listItemStyle.wrapper}>
              <Text>碧水豪园 x15# 327</Text>
              <Text>李雁南 13588176510</Text>
            </ListItem>
            <View style={{marginTop: 20}}>
              <Button full success onPress={this.uploadImg}><Text>提交</Text></Button>
            </View>
          </List>
        </Content>
      </Container>

    )
  }
}


const listItemStyle = StyleSheet.create({
  wrapper: {width: '100%', marginLeft: 0, paddingLeft: 0, paddingRight: 0, marginRight: 0},
})
