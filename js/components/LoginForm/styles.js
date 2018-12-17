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
    height: height / 5.5
  },
  usernameInput: {
    ...globalStyles.inputElements,
    ...globalStyles.inputBorderShadow,
    ...globalStyles.inputBoxFont
  },
  passwordInput: {
    ...globalStyles.inputElements,
    ...globalStyles.inputBorderShadow,
    ...globalStyles.inputBoxFont
  },
  linkButtonContainer: {
    justifyContent: 'space-evenly',
    height: height / 4
  },
  forgotPassword: {
    ...globalStyles.linksLoginForgotPassword
  },
  button: {
    backgroundColor: '#FFB5BA',
    ...globalStyles.buttonElements
  },
  buttonText: {
    ...globalStyles.buttonText
  },
  createAccount: {
    ...globalStyles.linksLoginForgotPassword
  }
})

export default styles
