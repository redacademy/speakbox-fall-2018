import React, { Component } from 'react'
import { View, Text, TextInput, TouchableOpacity } from 'react-native'
import getAPI from './../../config/api'
import { Form, Field } from 'react-final-form'
import styles from './styles'

export default class ForgotPasswordForm extends Component {
  callingAPI = async values => {
    const res = await getAPI('/auth/password/forgot', {
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
    return (
      <Form
        onSubmit={values => this.onSubmit(values)}
        validate={values => this.validate(values)}
        render={({ handleSubmit, pristine, invalid }) => (
          <View style={styles.formContainer}>
            <View style={styles.inputContainer}>
              <Text style={styles.enterEmail}>
                *Enter email to recover password
              </Text>
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
                        style={{ fontFamily: 'Quicksand' }}
                      />
                    )
                  }}
                />
              </View>
            </View>
            <View style={styles.linkButtonContainer}>
              <TouchableOpacity
                style={styles.button}
                onPress={() => handleSubmit()}
              >
                <Text style={styles.buttonText}>Submit</Text>
              </TouchableOpacity>
              <Text style={styles.backToLogin}>Back to login</Text>
            </View>
          </View>
        )}
      />
    )
  }
}
