import React, { Component, Fragment } from 'react'
import { View, Text, Image, ImageBackground } from 'react-native'
import ForgotPasswordForm from '../../components/ForgotPasswordForm'
import styles from './styles'

const ForgotPassword = ({ navigation }) => {
  return (
    <ImageBackground
      source={require('../../assets/Background/background.png')}
      style={styles.background}
    >
      <View style={styles.container}>
        <View style={styles.logoContainer}>
          <Image
            style={styles.logoImage}
            source={require('../../assets/Icons/speakbox-logo-final.png')}
          />
          <Text style={styles.logoHeader}>Speakbox</Text>
        </View>
        <ForgotPasswordForm navigation={navigation} />
      </View>
    </ImageBackground>
  )
}

export default ForgotPassword
