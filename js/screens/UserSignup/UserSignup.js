import React from 'react'
import { View, ImageBackground } from 'react-native'
import SignupForm from '../../components/SignupForm'
import ChooseAvatar from '../../components/ChooseAvatar'
import styles from './styles'

const UserSignup = ({ navigation }) => {
  return (
    <ImageBackground
      source={require('../../assets/Background/background-1.png')}
      style={styles.background}
    >
      <View style={styles.container}>
        <View style={styles.signupAvatar}>
          <ChooseAvatar />
        </View>
        <SignupForm navigation={navigation} />
      </View>
    </ImageBackground>
  )
}

export default UserSignup