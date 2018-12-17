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
  }
})

export default styles
