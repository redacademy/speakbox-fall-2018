import { StyleSheet, Dimensions } from 'react-native'
import globalStyles from '../../config/styles'
const { width, height } = Dimensions.get('window')

const styles = StyleSheet.create({
  formContainer: {
    alignItems: 'center',
    justifyContent: 'center'
  },
  inputContainer: {
    justifyContent: 'space-between',
    height: height / 7.2
  },
  enterEmail: {
    color: '#B5ADAD',
    fontFamily: 'Quicksand'
  }, 
  usernameInput: {
    ...globalStyles.inputElements,
    ...globalStyles.inputBorderShadow,
    ...globalStyles.inputBoxFont
  },
  linkButtonContainer: {
    justifyContent: 'space-evenly',
    height: height / 4
  },	
  button: {
    backgroundColor: '#FFB5BA',
    ...globalStyles.buttonElements
  },
  buttonText: {
    ...globalStyles.buttonText
  },
  backToLogin: {
    ...globalStyles.linksLoginForgotPassword
  }
})

export default styles
