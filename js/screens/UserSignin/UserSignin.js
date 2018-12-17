import React from 'react'
import { View, Text, Image, ImageBackground } from 'react-native'
import SigninForm from '../../components/SigninForm'
import styles from './styles'

const UserSignin = ({ navigation }) => {
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
        <SigninForm navigation={navigation} />
      </View>
    </ImageBackground>
  )
}

export default UserSignin


