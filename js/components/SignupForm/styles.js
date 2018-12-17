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
    height: height / 1.6
  },
  signupHeader: {
    color: '#5D5D5D',
    fontFamily: 'Quicksand',
    textTransform: 'uppercase'
  },
  usernameInput: {
    ...globalStyles.inputElements,
    ...globalStyles.inputBorderShadow,
    ...globalStyles.inputBoxFont,
    backgroundColor: '#FFFF'
  },
  passwordInput: {
    ...globalStyles.inputElements,
    ...globalStyles.inputBorderShadow,
    ...globalStyles.inputBoxFont,
    backgroundColor: '#FFFF'
  },
  togglePassword: {
    height: height / 20,
    width: width / 14,
    position: 'absolute',
    right: 4
  },
  toggleEye: {
    resizeMode: 'contain',
    height: height / 26,
    width: width / 14
  },
  buttonContainer: {
    justifyContent: 'space-evenly',
    height: height / 6
  },
  button: {
    backgroundColor: '#4BBCF4',
    ...globalStyles.buttonElements
  },
  buttonText: {
    ...globalStyles.buttonText
  }
})

export default styles
