import { StyleSheet, Dimensions } from 'react-native'
const { width, height } = Dimensions.get('window')

const styles = StyleSheet.create({
  container: {
    flex: 1,
    height,
    width,
    justifyContent: 'center'
  },
  background: {
    width: Dimensions.get('window').width,
    height: Dimensions.get('window').height
  },
  logoImage: {
    height: 80,
    width: 80,
    alignSelf: 'center',
    marginTop: 40,
    marginBottom: 15
  },
  logoHeader: {
    color: '#5D5D5D',
    alignSelf: 'center',
    fontSize: 40,
    marginBottom: 60
  },
  usernameInput: {
    justifyContent: 'flex-start',
    borderWidth: 1,
    paddingTop: 12,
    paddingBottom: 12,
    paddingLeft: 10,
    marginLeft: 20,
    marginRight: 20,
    marginTop: 40,
    marginBottom: 15,
    borderRadius: 3,
    borderColor: '#FFFF',
    shadowOpacity: 0.75,
    shadowRadius: 5,
    shadowColor: '#B5ADAD',
    shadowOffset: { height: 1, width: 1 }
  },
  passwordInput: {
    justifyContent: 'flex-start',
    borderWidth: 1,
    paddingTop: 12,
    paddingBottom: 12,
    paddingLeft: 10,
    marginLeft: 20,
    marginRight: 20,
    marginBottom: 15,
    borderRadius: 3,
    borderColor: '#FFFF',
    shadowOpacity: 0.75,
    shadowRadius: 5,
    shadowColor: '#B5ADAD',
    shadowOffset: { height: 1, width: 1 }
  },
  forgotPassword: {
    color: '#B5ADAD',
    alignSelf: 'center',
    marginBottom: 30
  },
  button: {
    color: 'white',
    backgroundColor: '#FFB5BA',
    borderRadius: 30,
    marginLeft: 80,
    marginRight: 80,
    padding: 15,
    fontSize: 12,
    marginBottom: 15
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
