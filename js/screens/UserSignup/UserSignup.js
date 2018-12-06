import React, { Component, Fragment } from 'react'
import {
  View,
  Text,
  Button,
  TextInput,
  TouchableOpacity,
  Image,
  ImageBackground,
  ScrollView,
  Switch
} from 'react-native'
import { getAPI } from '../../config/api'
import { Form, Field } from 'react-final-form'
import styles from './styles'

const UserSignup = ({ onSubmit, validate, toggleShowPassword, showPassword }) => {
  return (
    <ImageBackground
      source={require('../../assets/Background/background.png')}
      style={{ width: '100%', height: '100%' }}
    >
      <ScrollView>
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
                <Text style={styles.signupHeader}>USERNAME</Text>
                <View style={styles.usernameInput}>
                  <Field
                    name='username'
                    render={({ input, meta }) => {
                      return <TextInput />
                    }}
                  />
                </View>
                <Text style={styles.signupHeader}>EMAIL</Text>
                <View style={styles.usernameInput}>
                  <Field
                    name='email'
                    render={({ input, meta }) => {
                      return <TextInput />
                    }}
                  />
                </View>

                <Text style={styles.signupHeader}>PASSWORD</Text>
                <View style={styles.passwordInput}>
                  <Field
                    name='password'
                    render={({ input, meta }) => {
                      return (
                        <View>
                          <TextInput
                            secureTextEntry={showPassword}
                          />
                          <Switch
                            onValueChange={toggleShowPassword}
                            value={showPassword}
                          />
                        </View>
                      )
                    }}
                  />
                </View>
                <Text style={styles.signupHeader}>RE-ENTER PASSWORD</Text>
                <View style={styles.passwordInput}>
                  <Field
                    name='password'
                    render={({ input, meta }) => {
                      return (
                        <View>
                          <TextInput
                            secureTextEntry={showPassword}
                          />
                          <Switch
                            onValueChange={toggleShowPassword}
                            value={showPassword}
                          />
                        </View>
                      )
                    }}
                  />
                </View>
                <TouchableOpacity
                  style={styles.button}
                  onPress={() => handleSubmit()}
                >
                  <Text style={styles.buttonText}>SUBMIT</Text>
                </TouchableOpacity>
              </View>
            )}
          />
        </View>
      </ScrollView>
    </ImageBackground>
  )
}

export default UserSignup
