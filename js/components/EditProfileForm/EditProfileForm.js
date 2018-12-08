import React, { Component } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet
} from "react-native";
import { Form, Field } from "react-final-form";
import LinearGradient from "react-native-linear-gradient";
import globalStyles from "../../config/styles";
import styles from "./styles";

export default class EditProfileForm extends Component {
  constructor(props) {
    super(props);
  }

  onSubmit = values => {};
  validate = values => {};

  render() {
    const { navigation } = this.props;
    return (
      <Form
        onSubmit={values => this.onSubmit(values)}
        validate={values => this.validate(values)}
        render={({ handleSubmit, pristine, invalid }) => (
          <View style={styles.formContainer}>
            <View>
              <Text style={styles.formTitle}>First Name</Text>
              <Field
                name="FirstName"
                render={({ input, meta }) => {
                  return (
                    <TextInput
                      style={styles.formInput}
                      {...input}
                      placeholder="FirstName"
                      autoCapitalize="none"
                    />
                  );
                }}
              />
              <Text style={styles.formTitle}>Last Name</Text>
              <Field
                name="LastName"
                render={({ input, meta }) => {
                  return (
                    <TextInput
                      {...input}
                      style={styles.formInput}
                      placeholder="LastName"
                      autoCapitalize="none"
                    />
                  );
                }}
              />
              <Text style={styles.formTitle}>Password</Text>
              <Field
                name="Password"
                render={({ input, meta }) => {
                  return (
                    <TextInput
                      {...input}
                      style={styles.formInput}
                      placeholder="Password"
                    />
                  );
                }}
              />
              <Text style={styles.formTitle}>Email</Text>
              <Field
                name="Email"
                render={({ input, meta }) => {
                  return (
                    <TextInput
                      {...input}
                      style={styles.formInput}
                      placeholder="Email"
                    />
                  );
                }}
              />
              <Text style={styles.formTitle}>Plant Name</Text>
              <Field
                name="PlantName"
                render={({ input, meta }) => {
                  return (
                    <TextInput
                      {...input}
                      style={styles.formInput}
                      placeholder="PlantName"
                    />
                  );
                }}
              />
            </View>
            <TouchableOpacity
              activeOpacity={0.6}
              style={styles.confirmButton}
              onPress={() => {
                navigation.navigate("Profile");
              }}
            >
              <LinearGradient
<<<<<<< HEAD
                 start={{ x: 0, y: 0 }}
                 end={{ x: 0, y: 1 }}
                 colors={[
                   globalStyles.blueGradientColor.start.color,
                   globalStyles.blueGradientColor.end.color
                 ]}
=======
                start={{ x: 0, y: 0 }}
                end={{ x: 0, y: 1 }}
                colors={["#A4E8FF", "#6BCCFD"]}
>>>>>>> add Loading Component with animation
                style={[
                  StyleSheet.absoluteFill,
                  {
                    height: "100%",
                    width: "100%",
                    borderRadius: 20,
                    padding: 20
                  }
                ]}
              />
              <Text style={styles.confirm}>Confirm</Text>
            </TouchableOpacity>
          </View>
        )}
      />
    );
  }
}
