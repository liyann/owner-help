import React, { Component } from 'react'

class Select extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    const { modalVisible, setModalVisible } = this.props
    return (
      <View
        style={{
          marginTop: 22
        }}
      >
        <Modal
          animationType={'fade'}
          transparent={true}
          visible={modalVisible}
          onRequestClose={() => {
            alert('Modal has been closed.')
          }}
        >
          <View style={{ marginTop: 500, backgroundColor: 'yellow' }}>
            <View>
              <Text>翻转!</Text>

              <TouchableHighlight
                onPress={() => {
                  setModalVisible(!modalVisible)
                }}
              >
                <Text>Hide Modalhhahh</Text>
              </TouchableHighlight>
            </View>
          </View>
        </Modal>

        <TouchableHighlight
          onPress={() => {
            setModalVisible(true)
          }}
        >
          <Text>显示</Text>
        </TouchableHighlight>
      </View>
    )
  }
}

export default Select
