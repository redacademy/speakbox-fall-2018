import { StyleSheet, Dimensions } from 'react-native'
import globalStyles from '../../config/styles'
const { width, height } = Dimensions.get('window')

const styles = StyleSheet.create({
  background: {
    width,
    height
  },
  container: {
    flex: 1,
    top: height / 7
  },
  slide: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#FFFF',
    width: width / 1.2,
    height: '50%',
    alignSelf: 'center',
    borderRadius: 12,
    height: height / 1.3
  },
  header: {
    color: '#5D5D5D',
    fontFamily: 'Quicksand',
    fontSize: 20,
    width: width / 2,
    textAlign: 'center',
    textTransform: 'uppercase'
  },
  plantHeader: {
    color: '#5D5D5D',
    fontFamily: 'Quicksand',
    fontSize: 20,
    textAlign: 'center',
    textTransform: 'uppercase'
  },
  logoImage: {
    height: height / 5,
    width: width / 4,
    alignSelf: 'center',
    resizeMode: 'center'
  },
  plantImage: {
    height: height / 5,
    width: width / 4,
    alignSelf: 'center',
    resizeMode: 'center'
  },
  text: {
    color: '#5D5D5D',
    fontFamily: 'Quicksand',
    fontSize: 14,
    width: width / 1.6,
    textAlign: 'center'
  },
  plantText: {
    color: '#5D5D5D',
    fontFamily: 'Quicksand',
    fontSize: 14,
    width: width / 1.6,
    marginTop: 15,
    fontWeight: 'bold'
  },
  plantInput: {
    fontFamily: 'Avenir',
    color: '#5D5D5D',
    backgroundColor: '#FFFF',
    justifyContent: 'flex-start',
    borderWidth: 1,
    borderRadius: 3,
    borderColor: '#D3D3D3',
    width: width / 1.6,
    margin: 15,
    padding: 7
  },
  button: {
    backgroundColor: '#4BBCF4',
    alignSelf: 'center',
    marginBottom: 15,
    ...globalStyles.buttonElements
  },
  buttonText: {
    ...globalStyles.buttonText
  },
  textInstructions: {
    color: '#5D5D5D',
    fontFamily: 'Quicksand',
    fontSize: 14,
    width: width / 1.6,
    textAlign: 'center',
    margin: 10
  },
  instructionsContainer: {
    flexDirection: 'column',
    marginBottom: 15,
    marginTop: 15
  },
  textInstructionsContainer: {
    color: '#5D5D5D',
    fontFamily: 'Quicksand',
    fontSize: 14,
    width: width / 1.6,
    textAlign: 'center',
    fontWeight: 'bold'
  },
  skipText: {
    color: '#B5ADAD',
    fontFamily: 'Avenir',
    fontSize: 14,
    width: width / 1.6,
    textAlign: 'center',
    textDecorationLine: 'underline',
    textTransform: 'uppercase'
  }
})

export default styles
