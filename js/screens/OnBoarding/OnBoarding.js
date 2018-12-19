import React, { Component } from 'react'
import {
  StyleSheet,
  Text,
  View,
  ImageBackground,
  Image,
  TouchableOpacity,
  TextInput
} from 'react-native'
import OnBoardingSwiper from './../../components/OnBoardingSwiper'
import SetAReminder from './../../components/SetAReminder'
import { Form, Field } from 'react-final-form'
import styles from './styles'

export default class OnBoarding extends Component {
  constructor(props) {
    super(props)
  }

  onSubmit = values => {
    this.callingAPI(values)
  }
  validate = values => {
    const errors = {}
    if (!values.email) {
      errors.email = 'Required'
    }
    if (!values.password) {
      errors.password = 'Required'
    }
    return errors
  }

  render() {
    console.log(this.props)
    const { navigation } = this.props
    console.log(this.props)
    return (
      <OnBoardingSwiper>
        <ImageBackground
          source={require('../../assets/Background/background-3.png')}
          style={styles.background}
        >
          <View style={styles.container}>
            <View style={styles.slide}>
              <Text style={styles.header}>Welcome to Speakbox</Text>

              <Image
                style={styles.logoImage}
                source={require('../../assets/Icons/speakbox-logo-final.png')}
              />
              <Text style={styles.text}>
                Live healthier, anywhere. Improve your mental well-being by
                forming daily habits of journaling and mood check-ins. Find and
                record activities to see what activities best elevate your
                mental well-being.
              </Text>
            </View>
          </View>
        </ImageBackground>

        <ImageBackground
          source={require('../../assets/Background/background-3.png')}
          style={styles.background}
        >
          <View style={styles.container}>
            <View style={styles.slide}>
              <Text style={styles.header}>Connect with Others</Text>
              <Image
                style={styles.logoImage}
                source={require('../../assets/Icons/speakbox-logo-final.png')}
              />
              <Text style={styles.text}>
                You’re not alone, check out your community forum to read and
                post questions on mental, physical, and social health. Get
                support from caring people who've shared similar experiences.
              </Text>
            </View>
          </View>
        </ImageBackground>

        <ImageBackground
          source={require('../../assets/Background/background-3.png')}
          style={styles.background}
        >
          <View style={styles.container}>
            <View style={styles.slide}>
              <Text style={styles.plantHeader}>Name Your Plant</Text>

              <Image
                style={styles.plantImage}
                source={require('../../assets/Flowers/babyFlower.png')}
              />
              <Text style={styles.text}>
                Here’s your very own plant to nurture and grow! We’ll explain
                how to take care of it. But first, let’s give it a name.
              </Text>
              <Text style={styles.plantText}>Name your plant:</Text>
              <Form
                onSubmit={values => this.onSubmit(values)}
                validate={values => this.validate(values)}
                render={({ handleSubmit, pristine, invalid }) => (
                  <View style={styles.formContainer}>
                    <Field
                      name='name'
                      render={({ input, meta }) => {
                        return (
                          <TextInput
                            {...input}
                            placeholder='Name'
                            autoCorrect={false}
                            invalid={meta.touched && meta.error}
                            style={styles.plantInput}
                          />
                        )
                      }}
                    />
                    <TouchableOpacity style={styles.button}>
                      <Text style={styles.buttonText}>Submit</Text>
                    </TouchableOpacity>
                  </View>
                )}
              />
            </View>
          </View>
        </ImageBackground>

        <ImageBackground
          source={require('../../assets/Background/background-3.png')}
          style={styles.background}
        >
          <View style={styles.container}>
            <View style={styles.slide}>
              <Text style={styles.plantHeader}>Care for Your Plant</Text>

              <Text style={styles.textInstructions}>
                Like a plant, your well-being takes time to grow. Water your
                plant as you nourish your mind, complete consecutive daily
                journal entries. For PLANTNAME to reach full bloom, you will
                need a 20-day streak!
              </Text>

              <View style={styles.instructionsContainer}>
                <Text style={styles.textInstructionsContainer}>
                  5 DAYS: 25%
                </Text>
                <Text style={styles.textInstructionsContainer}>
                  10 DAYS: 50%
                </Text>
                <Text style={styles.textInstructionsContainer}>
                  15 DAYS: 75%
                </Text>
                <Text style={styles.textInstructionsContainer}>
                  20 DAYS: 100%
                </Text>
              </View>
            </View>
          </View>
        </ImageBackground>

        <ImageBackground
          source={require('../../assets/Background/background-3.png')}
          style={styles.background}
        >
          <View style={styles.container}>
            <View style={styles.slide}>
              <Text style={styles.plantHeader}>Set a Reminder</Text>
              <Text style={styles.textInstructions}>
                On average, habits take 66 days to form. To help keep you on
                track, set a daily reminder notification. You can turn this off
                at anytime.
              </Text>

              <TouchableOpacity
                style={styles.button}
                activeOpacity={0.6}
                onPress={() => {
                  navigation.navigate('App')
                }}
              >
                <Text style={styles.buttonText}>Set Reminder</Text>
              </TouchableOpacity>
              <TouchableOpacity
                activeOpacity={0.6}
                onPress={() => {
                  navigation.navigate('App')
                }}
              >
                <Text style={styles.skipText}>Skip</Text>
              </TouchableOpacity>
            </View>
          </View>
        </ImageBackground>
      </OnBoardingSwiper>
    )
  }
}
