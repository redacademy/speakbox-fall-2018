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
import moment from "moment";
import globalStyles from "../../config/styles";
import styles from "./styles";

export default class EditProfileForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      initialValues: {}
    };
  }
  componentDidMount() {
    this.getUser();
  }

  getUser = async values => {
    const token =
      "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJodHRwczpcL1wvYXBpLnNwZWFrYm94LXN0YWdpbmcuY2FcL2FwaVwvYXV0aFwvbG9naW4iLCJpYXQiOjE1NDUwODg1MzYsImV4cCI6MTU0NTA5MjEzNiwibmJmIjoxNTQ1MDg4NTM2LCJqdGkiOiJjWkVEUUNIOUhCQThuRm5CIiwic3ViIjoxMSwicHJ2IjoiODdlMGFmMWVmOWZkMTU4MTJmZGVjOTcxNTNhMTRlMGIwNDc1NDZhYSJ9.dl5rMAt8pZbSjWi78n9G_38truTTvcEqAV34XLLIn-M";
    const response = await getAPI("/me", {
      method: "GET",
      headers: {
        Authorization: `Bearer${[token]}`
      },
      body: JSON.stringify(values)
    });
    this.setState({
      initialValues: {
        first_name: response.data.first_name,
        last_name: response.data.last_name,
        email: response.data.email
      }
    });
  };

  updateUser = async values => {
    const token =
      "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJodHRwczpcL1wvYXBpLnNwZWFrYm94LXN0YWdpbmcuY2FcL2FwaVwvYXV0aFwvbG9naW4iLCJpYXQiOjE1NDUwODg1MzYsImV4cCI6MTU0NTA5MjEzNiwibmJmIjoxNTQ1MDg4NTM2LCJqdGkiOiJjWkVEUUNIOUhCQThuRm5CIiwic3ViIjoxMSwicHJ2IjoiODdlMGFmMWVmOWZkMTU4MTJmZGVjOTcxNTNhMTRlMGIwNDc1NDZhYSJ9.dl5rMAt8pZbSjWi78n9G_38truTTvcEqAV34XLLIn-M";
    let date = moment(new Date())
      .format("L LTS")
      .replace(/(\/)/g, "-")
      .replace(/(\AM+)/g, "");

    let info = {
      id: 1,
      first_name: values.first_name,
      last_name: values.last_name,
      email: values.email,
      phone_number: "123-456-7890",
      settings: {
        notification_method: "Phone"
      },
      updated_at: date
    };

    const updateInfo = await getAPI("/me", {
      method: "PUT",
      headers: {
        Authorization: `Bearer${[token]}`
      },
      body: JSON.stringify(info)
    });

    this.props.navigation.navigate("Profile");
  };

  render() {
    return (
      <Form
        onSubmit={values => this.updateUser(values)}
        initialValues={this.state.initialValues}
        render={({ handleSubmit, pristine, invalid, values }) => (
          <View style={styles.formContainer}>
            <View>
              <Text style={styles.formTitle}>First Name</Text>
              <Field
                name="first_name"
                render={({ input, meta }) => {
                  return (
                    <TextInput
                      style={styles.formInput}
                      {...input}
                      autoCapitalize="none"
                    />
                  );
                }}
              />
              <Text style={styles.formTitle}>Last Name</Text>
              <Field
                name="last_name"
                render={({ input, meta }) => {
                  return (
                    <TextInput
                      style={styles.formInput}
                      {...input}
                      autoCapitalize="none"
                    />
                  );
                }}
              />
              <Text style={styles.formTitle}>Email</Text>
              <Field
                name="email"
                render={({ input, meta }) => {
                  return (
                    <TextInput
                      style={styles.formInput}
                      {...input}
                      autoCapitalize="none"
                    />
                  );
                }}
              />
              <Text style={styles.formTitle}>Plant Name</Text>
              <Field
                name="plant_name"
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
              style={styles.confirmButton}
              onPress={() => handleSubmit()}
            >
              <LinearGradient
                start={{ x: 0, y: 0 }}
                end={{ x: 0, y: 1 }}
                colors={[
                  globalStyles.blueGradientColor.start.color,
                  globalStyles.blueGradientColor.end.color
                ]}
                 start={{ x: 0, y: 0 }}
                 end={{ x: 0, y: 1 }}
                 colors={[
                   globalStyles.blueGradientColor.start.color,
                   globalStyles.blueGradientColor.end.color
                 ]}
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
