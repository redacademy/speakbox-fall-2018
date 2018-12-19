import { StyleSheet, Dimensions } from 'react-native'
const { width, height } = Dimensions.get('window')

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width,
    justifyContent: 'space-between'
  },
  background: {
    width,
    height
  },
  signupAvatar: {
    height: height / 3,
    width: width / 3,
    alignSelf: 'center'
  }
})

export default styles