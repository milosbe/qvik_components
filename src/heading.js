import React, { Component } from 'react'
import { TextComponent } from 'react-native'

class Heading extends Component {
  render() {
    return <TextComponent style={styles.heading}>Qvik app</TextComponent>
  }
}

const styles = {
  heading: {
    fontSize: 24
  }
}

export default Heading
