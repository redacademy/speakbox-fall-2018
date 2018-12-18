import { StyleSheet, Dimensions } from 'react-native'
import globalStyles from '../../config/styles'
const { width, height } = Dimensions.get('window')

const styles = StyleSheet.create({
  fullScreen: {
    width: width,
    height: height
  },
  container: {
    backgroundColor: 'transparent',
    position: 'relative'
  },
  slide: {
    backgroundColor: 'transparent',
  },
  pagination: {
    position: 'absolute',
    bottom: 70,
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'flex-end',
    backgroundColor: 'transparent'
  },
  dot: {
    backgroundColor: '#D8D8D8',
    width: 12,
    height: 12,
    borderRadius: 10,
    margin: 8
  },
  activeDot: {
    backgroundColor: '#FFB5BA'
  }
})

export default styles