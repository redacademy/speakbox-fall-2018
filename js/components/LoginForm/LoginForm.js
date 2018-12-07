import React, { Component } from 'react'
import { View, Text, TextInput, TouchableOpacity } from 'react-native'
import getAPI from '../../config/api'
import { Form, Field } from 'react-final-form'
import styles from './styles'

export default class LoginForm extends Component {
  constructor(props) {
    super(props)
  }

  callingAPI = async values => {
    const res = await getAPI('/auth/login', {
      method: 'POST',
      body: JSON.stringify(values)
    })
    console.log(res)
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
    return (
      <Form
        onSubmit={values => this.onSubmit(values)}
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
                        placeholder='Username'
                        autoCapitalize='none'
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
                      />
                    )
                  }}
                />
              </View>
            </View>
            <View style={styles.linkButtonContainer}>
              <Text style={styles.forgotPassword}>Forgot Password?</Text>
              <TouchableOpacity
                style={styles.button}
                onPress={() => handleSubmit()}
              >
                <Text style={styles.buttonText}>SIGN IN</Text>
              </TouchableOpacity>
              <Text style={styles.createAccount}>Create Account</Text>
            </View>
          </View>
        )}
      />
    )
  }
}
