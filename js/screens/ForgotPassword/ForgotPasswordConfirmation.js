import React from 'react'
import { View, Text, Image, ImageBackground } from 'react-native'
import styles from './styles'

const ForgotPasswordConfirmation = () => {
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
        <View style={styles.confirmationContainer}>
          <Text style={styles.confirmationMessage}>
            A link has been sent to your email with a temporary password. Please
            log in to your account with your temporary password and change your
            password through your account settings.
          </Text>
          <Text style={styles.backToLogin}>Back to login</Text>
        </View>
      </View>
    </ImageBackground>
  )
}

export default ForgotPasswordConfirmation
