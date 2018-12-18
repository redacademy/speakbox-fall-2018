import React from 'react'
import { Text, View, Image, ImageBackground } from 'react-native'
import Onboarding from 'react-native-onboarding-swiper'
import styles from './styles'
import NameYourPlantForm from './../../components/NameYourPlantForm'
import PlantCareInstructions from './../../components/PlantCareInstructions'

const StaticPage = props => {
  return (
    <View style={styles.contentContainer}>
      <View style={styles.imageHeaderContainer}>
        <Text style={styles.titleText}>{props.title}</Text>
        <Image
          source={require('./../../assets/Icons/onboarding-logo.png')}
          style={styles.staticPageImage}
        />
      </View>
      <Text style={styles.subtitleText}>{props.subtitle}</Text>
    </View>
  )
}

// const Subtitle = props => {
//   return <Text style={styles.subtitleText}>{props.subtitle}</Text>
// }

const PlantForm = props => {
  return (
    <View>
      <Text style={styles.titleText}>{props.title}</Text>
      <Image
        source={require('./../../assets/Flowers/babyFlower.png')}
        style={styles.staticPageImage}
      />
      <NameYourPlantForm />
    </View>
  )
}

const Dots = ({ selected }) => {
  let backgroundColor = 'white'
  backgroundColor = selected ? '#FFB5BA' : '#D8D8D8'
  return (
    <View
      style={{
        width: 12,
        height: 12,
        marginHorizontal: 3,
        backgroundColor: backgroundColor,
        borderColor: 'white',
        borderWidth: 1,
        borderRadius: 9,
        marginBottom: 20
      }}
    />
  )
}

const OnBoarding = () => {
  const Pages = [
    {
      subtitle: (
        <StaticPage
          title={'Welcome to Speakbox'}
          subtitle={
            'Live healthier, anywhere. Improve your mental well-being by forming daily habits of journaling and mood check-ins. Find and record activities to see what activities best elevate your mental well-being.'
          }
        />
      ),
      backgroundColor: '#FFFFFF'
      // subtitle: (
      //   <Subtitle
      //     subtitle={
      //       'Live healthier, anywhere. Improve your mental well-being by forming daily habits of journaling and mood check-ins. Find and record activities to see what activities best elevate your mental well-being.'
      //     }
      //   />
      // )
    },
    {
      backgroundColor: '#FFFFFF',
      subtitle: (
        <StaticPage
          title={'Connect with Others'}
          subtitle={
            "Utilize our community forum to read and post questions on mental, physical, and social health. Get support from caring people who've shared similar experiences."
          }
        />
      )
    }
    // {
    //   backgroundColor: '#FFFFFF',
    //   subtitle: <PlantForm title={'Name Your Plant'} />
    // }
  ]

  return (
    <ImageBackground
      source={require('./../../assets/Background/background-3.png')}
      style={{ width: '100%', height: '100%' }}
    >
      <View style={styles.container}>
        <View style={styles.onboardingContainer}>
          <Onboarding
            bottomBarHighlight={false}
            pages={Pages}
            showSkip={false}
            showNext={false}
            // onDone={() => {
            //   navigation.navigate('Listings')
            // }}
            // imageContainerStyles={styles.onboardingContainer}
            DotComponent={Dots}
          />
        </View>
      </View>
    </ImageBackground>
  )
}

export default OnBoarding





// import React, { Component } from 'react';
// import { Text, View, Image, ImageBackground } from 'react-native'

// export default class OnBoarding extends Component {
//   render() {
//     return (
//       <View style={[styles.slide, { backgroundColor: '#C04DEE' }]}>
//         <Text style={styles.header}>EAT</Text>
//         <Text style={styles.text}>Good nutrition is an important part of leading a healthy lifestyle</Text>
//       </View>
//     );
//   }
// }

// const styles = StyleSheet.create({
//   // Slide styles
//   slide: {
//     flex: 1,                    // Take up all screen
//     justifyContent: 'center',   // Center vertically
//     alignItems: 'center',       // Center horizontally
//   },
//   // Header styles
//   header: {
//     color: '#FFFFFF',
//     fontFamily: 'Avenir',
//     fontSize: 30,
//     fontWeight: 'bold',
//     marginVertical: 15,
//   },
//   // Text below header
//   text: {
//     color: '#FFFFFF',
//     fontFamily: 'Avenir',
//     fontSize: 18,
//     marginHorizontal: 40,
//     textAlign: 'center',
//   },
// });