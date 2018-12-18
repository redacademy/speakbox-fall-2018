import React, { Component } from 'react'
import OnBoarding from './OnBoarding'
import { View } from 'react-native'

export default class OnBoardingContainer extends Component {
  constructor(props) {
    super(props)
  }
  render() {
    return (
      <View>
        <OnBoarding navigation={this.props.navigation} />
      </View>
    )
  }
}
