import { StyleSheet, Dimensions } from 'react-native'
const { width, height } = Dimensions.get('window')

const styles = StyleSheet.create({
  formContainer: {
    alignItems: 'center',
    justifyContent: 'center'
  },
  inputContainer: {
    justifyContent: 'space-between',
    height: height / 6
  },  
  usernameInput: {
    justifyContent: 'flex-start',
    borderWidth: 1,
    borderRadius: 3,
    borderColor: '#FFFF',
    shadowOpacity: 0.75,
    shadowRadius: 5,
    shadowColor: '#B5ADAD',
    shadowOffset: { height: 1, width: 1 },
    width: width / 1.1,
    padding: 12
  },
  passwordInput: {
    justifyContent: 'flex-start',
    borderWidth: 1,
    borderRadius: 3,
    borderColor: '#FFFF',
    shadowOpacity: 0.75,
    shadowRadius: 5,
    shadowColor: '#B5ADAD',
    shadowOffset: { height: 1, width: 1 },
    width: width / 1.1,
    padding: 12
  },
  linkButtonContainer: {
    justifyContent: 'space-evenly',
    height: height / 4
  },
  forgotPassword: {
    color: '#B5ADAD',
    alignSelf: 'center',
    textDecorationLine: 'underline'
  },
  button: {
    color: 'white',
    backgroundColor: '#FFB5BA',
    borderRadius: 30,
    width: width / 2.5,
    padding: 12
  },
  buttonText: {
    color: '#FFFF',
    alignSelf: 'center'
  },
  createAccount: {
    color: '#B5ADAD',
    alignSelf: 'center',
    textDecorationLine: 'underline'
  }
})

export default styles
