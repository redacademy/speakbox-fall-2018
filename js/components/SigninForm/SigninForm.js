import React, { Component } from 'react'
import { View, Text, TextInput, TouchableOpacity } from 'react-native'
import getAPI from '../../config/api'
import { Form, Field } from 'react-final-form'
import styles from './styles'

export default class SigninForm extends Component {
  constructor(props) {
    super(props)
  }
  callingAPI = async values => {
    const res = await getAPI('/auth/login', {
      method: 'POST',
      body: JSON.stringify(values)
    })
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
    const { navigation } = this.props
    return (
      <Form
        onSubmit={values => {
          this.onSubmit(values)
          navigation.navigate('App')
        }}
        validate={values => this.validate(values)}
        render={({ handleSubmit, pristine, invalid }) => (
          <View style={styles.formContainer}>
            <View style={styles.inputContainer}>
              <View style={styles.usernameInput}>
                <Field
                  name='email'
                  render={({ input, meta }) => {
                    return (
                      <TextInput
                        {...input}
                        placeholder='Email'
                        autoCapitalize='none'
                        autoCorrect={false}
                        invalid={meta.touched && meta.error}
                        style={{ fontFamily: 'Avenir' }}
                      />
                    )
                  }}
                />
              </View>
              <View style={styles.passwordInput}>
                <Field
                  name='password'
                  render={({ input, meta }) => {
                    return (
                      <TextInput
                        {...input}
                        secureTextEntry={true}
                        placeholder='Password'
                        style={{ fontFamily: 'Avenir' }}
                      />
                    )
                  }}
                />
              </View>
            </View>
            <View style={styles.linkButtonContainer}>
              <TouchableOpacity
                activeOpacity={0.6}
                onPress={() => {
                  navigation.navigate('ForgotPassword')
                }}
              >
                <Text style={styles.forgotPassword}>Forgot Password?</Text>
              </TouchableOpacity>

              <TouchableOpacity
                style={styles.button}
                onPress={() => handleSubmit()}
              >
                <Text style={styles.buttonText}>Sign In</Text>
              </TouchableOpacity>

              <TouchableOpacity
                activeOpacity={0.6}
                onPress={() => {
                  navigation.navigate('Signup')
                }}
              >
                <Text style={styles.createAccount}>Create Account</Text>
              </TouchableOpacity>
            </View>
          </View>
        )}
      />
    )
  }
}
