import React, { Component, Fragment } from 'react'
import {
  View,
  Text,
  Button,
  TextInput,
  TouchableOpacity,
  Image,
  ImageBackground
} from 'react-native'
import { getAPI } from '../../config/api'
import { Form, Field } from 'react-final-form'
import LinearGradient from 'react-native-linear-gradient'
import styles from './styles'

export default class UserLogin extends Component {
  onSubmit = values => {
    console.log(values)
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

  // callingAPI = async () => {
  //   const res = await getAPI('/auth/login', {
  //     method: 'POST',
  //     body: JSON.stringify({
  //       email: 'user@example.com',
  //       password: 'secret'
  //     })
  //   })
  // }

  render() {
    return (
      <ImageBackground
        source={require('../../assets/Background/background.png')}
        style={{ width: '100%', height: '100%' }}
      >
        <View style={styles.container}>
          <Image
            style={styles.logoImage}
            source={require('../../assets/Icons/speakbox-logo-final.png')}
          />
          <Text style={styles.logoHeader}>Speakbox</Text>
          <Form
            style={styles.formContainer}
            onSubmit={values => this.onSubmit(values)}
            validate={values => this.validate(values)}
            render={({ handleSubmit, pristine, invalid }) => (
              <View>
                <View style={styles.usernameInput}>
                  <Field
                    name='email'
                    render={({ input, meta }) => {
                      return <TextInput placeholder='Username' />
                    }}
                  />
                </View>
                <View style={styles.passwordInput}>
                  <Field
                    name='password'
                    render={({ input, meta }) => {
                      return (
                        <TextInput
                          secureTextEntry={true}
                          placeholder='Password'
                        />
                      )
                    }}
                  />
                </View>
                <Text style={styles.forgotPassword}>Forgot Password?</Text>
                <TouchableOpacity
                  style={styles.button}
                  onPress={() => handleSubmit()}
                >
                  <Text style={styles.buttonText}>SIGN IN</Text>
                </TouchableOpacity>
                <Text style={styles.createAccount}>Create Account</Text>
              </View>
            )}
          />
        </View>
      </ImageBackground>
    )
  }
}