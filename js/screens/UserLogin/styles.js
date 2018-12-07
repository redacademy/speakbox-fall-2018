import { StyleSheet, Dimensions } from 'react-native'
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
    justifyContent: 'space-between',
    height: height / 3
  },
  logoImage: {
    height: height / 5,
    width: width / 4,
    alignSelf: 'center',
    resizeMode: 'center',
    marginTop: 50,
    marginBottom: -10
  },
  logoHeader: {
    color: '#5D5D5D',
    alignSelf: 'center',
    fontSize: 40
  }
})

export default styles
