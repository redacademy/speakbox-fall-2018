import React, { Component } from 'react'
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  Image,
  ScrollView
} from 'react-native'
import getAPI from '../../config/api'
import { Form, Field } from 'react-final-form'
import styles from './styles'
export default class SignupForm extends Component {
  constructor(props) {
    super(props)
    this.state = { hidePassword: true }
  }

  callingAPI = async values => {
    await getAPI('/auth/register', {
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

  managePasswordVisibility = () => {
    this.setState({ hidePassword: !this.state.hidePassword })
  }

  render() {
    const { navigation } = this.props
    return (
      <ScrollView>
        <Form
          onSubmit={values => {
            this.onSubmit(values)
            navigation.navigate('Signin')
          }}
          validate={values => this.validate(values)}
          render={({ handleSubmit, pristine, invalid }) => (
            <View style={styles.formContainer}>
              <View style={styles.inputContainer}>
                <Text style={styles.signupHeader}>First Name</Text>
                <View style={styles.usernameInput}>
                  <Field
                    name='first_name'
                    render={({ input, meta }) => {
                      return (
                        <TextInput
                          {...input}
                          style={{ fontFamily: 'Avenir' }}
                          invalid={meta.touched && meta.error}
                        />
                      )
                    }}
                  />
                </View>

                <Text style={styles.signupHeader}>Last Name</Text>
                <View style={styles.usernameInput}>
                  <Field
                    name='last_name'
                    render={({ input, meta }) => {
                      return (
                        <TextInput
                          {...input}
                          style={{ fontFamily: 'Avenir' }}
                          invalid={meta.touched && meta.error}
                        />
                      )
                    }}
                  />
                </View>

                <Text style={styles.signupHeader}>Email</Text>
                <View style={styles.usernameInput}>
                  <Field
                    name='email'
                    render={({ input, meta }) => {
                      return (
                        <TextInput
                          {...input}
                          autoCapitalize='none'
                          style={{ fontFamily: 'Avenir' }}
                          invalid={meta.touched && meta.error}
                        />
                      )
                    }}
                  />
                </View>

                <Text style={styles.signupHeader}>Password</Text>
                <View style={styles.passwordInput}>
                  <Field
                    name='password'
                    render={({ input, meta }) => {
                      return (
                        <View>
                          <TextInput
                            secureTextEntry={true}
                            {...input}
                            secureTextEntry={this.state.hidePassword}
                            style={{ fontFamily: 'Avenir' }}
                            invalid={meta.touched && meta.error}
                          />

                          <TouchableOpacity
                            activeOpacity={0.8}
                            style={styles.togglePassword}
                            onPress={this.managePasswordVisibility}
                          >
                            <Image
                              source={
                                this.state.hidePassword
                                  ? require('./../../assets/Icons/eye-icon-2.png')
                                  : require('./../../assets/Icons/eye-icon-2.png')
                              }
                              style={styles.toggleEye}
                            />
                          </TouchableOpacity>
                        </View>
                      )
                    }}
                  />
                </View>
                <Text style={styles.signupHeader}>Re-enter Password</Text>
                <View style={styles.passwordInput}>
                  <Field
                    name='password_confirmation'
                    render={({ input, meta }) => {
                      return (
                        <View>
                          <TextInput
                            secureTextEntry={true}
                            {...input}
                            secureTextEntry={this.state.hidePassword}
                            style={{ fontFamily: 'Avenir' }}
                          />

                          <TouchableOpacity
                            activeOpacity={0.8}
                            style={styles.togglePassword}
                            onPress={this.managePasswordVisibility}
                          >
                            <Image
                              source={
                                this.state.hidePassword
                                  ? require('./../../assets/Icons/eye-icon-2.png')
                                  : require('./../../assets/Icons/eye-icon-2.png')
                              }
                              style={styles.toggleEye}
                            />
                          </TouchableOpacity>
                        </View>
                      )
                    }}
                  />
                </View>
              </View>

              <View style={styles.buttonContainer}>
                <TouchableOpacity
                  style={styles.button}
                  onPress={() => handleSubmit()}
                >
                  <Text style={styles.buttonText}>Confirm</Text>
                </TouchableOpacity>
              </View>
            </View>
          )}
        />
      </ScrollView>
    )
  }
}
