import React, { Component } from 'react'
import { Text } from 'react-native'

class Heading extends Component {
  render() {
    return <Text style={styles.heading}>Qvik app</Text>
  }
}

const styles = {
  heading: {
    fontSize: 24
  }
}

export default Heading
