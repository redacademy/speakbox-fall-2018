import { StyleSheet, Dimensions } from 'react-native'
import globalStyles from '../../config/styles'
const { width, height } = Dimensions.get('window')

const styles = StyleSheet.create({
  container: {
    flex: 1,
    height,
    width,
    justifyContent: 'space-between'
  },
  background: {
    width,
    height
  },
  logoContainer: {
    ...globalStyles.logoContainerLoginForgotPassword
  },
  logoImage: {
    ...globalStyles.logoImageLoginForgotPassword
  },
  logoHeader: {
    ...globalStyles.titleFontLoginForgotPassword
  },
  confirmationContainer: {
    justifyContent: 'space-between'
  },  
  confirmationMessage: {
    color: '#B5ADAD',
    fontFamily: 'Quicksand',
    textAlign: 'center',
    alignSelf: 'center',
    width: width / 1.2,
    height: height / 4
  },
  backToLogin: {
    ...globalStyles.linksLoginForgotPassword,
    height: height / 2
  }
})

export default styles