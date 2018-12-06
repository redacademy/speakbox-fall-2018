import React, { Component, Fragment } from 'react'
import {
  View,
  Text,
  Image,
  ImageBackground
} from 'react-native'
import LoginForm from '../../components/LoginForm'
import styles from './styles'


const UserLogin = () => {

  return (
    <ImageBackground
      source={require('../../assets/Background/background.png')}
      style={styles.background}
    >
      <View style={styles.container}>
        <Image
          style={styles.logoImage}
          source={require('../../assets/Icons/speakbox-logo-final.png')}
        />
        <Text style={styles.logoHeader}>Speakbox</Text>
        <LoginForm />
      </View>
    </ImageBackground>
  )
}

export default UserLogin
