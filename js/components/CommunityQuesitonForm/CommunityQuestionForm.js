import React, { Component } from "react";
import PropTypes from "prop-types";
import { View, Text, TextInput, Picker, Button, Switch } from "react-native";
import { Form, Field } from "react-final-form";
import LinearGradient from "react-native-linear-gradient";
import globalStyles from "../../config/styles";
import styles from "./styles";
import { apiPromise } from "../../lib/API/";

class CommunityQuestionForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isAnon: false
    };
  }

  componentDidMount() {
    const category_id = this.props.navigation.getParam("categoryID");
    this.setState({ category_id: category_id });
  }

  createTopic = async body => {
    const token =
      "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJodHRwczpcL1wvYXBpLnNwZWFrYm94LXN0YWdpbmcuY2FcL2FwaVwvYXV0aFwvbG9naW4iLCJpYXQiOjE1NDQ2NTQyMzgsImV4cCI6MTU0NDY1NzgzOCwibmJmIjoxNTQ0NjU0MjM4LCJqdGkiOiJ6dzFFWkEzcUpxSkZVNktxIiwic3ViIjoxLCJwcnYiOiI4N2UwYWYxZWY5ZmQxNTgxMmZkZWM5NzE1M2ExNGUwYjA0NzU0NmFhIn0.bw7f_UwpbfdFwloC7_EcJ1xB6CJ4GUFb4X718l4k2aE";
    const res = await apiPromise("/topics", {
      method: "POST",
      headers: {
        Authorization: `Bearer${[token]}`
      },
      body: JSON.stringify(body)
    });
  };

  handleForm = values => {
    const body = values;
    body.category_id = this.state.category_id;
    body.is_anonymous = this.state.isAnon;
    this.createTopic(body);
  };

  render() {
    return (
      <Form
        style={styles.form}
        onSubmit={values => {
          this.handleForm(values);

          this.props.navigation.goBack();
        }}
        render={({ handleSubmit, pristine, invalid }) => (
          <View style={styles.formView}>
            <Field name="title">
              {({ input, meta }) => (
                <React.Fragment>
                  <Text style={styles.formLabel}>Question:</Text>
                  <TextInput
                    style={styles.questionInput}
                    placeholder="I was wondering..."
                    {...input}
                  />
                </React.Fragment>
              )}
            </Field>
            <Field name="description">
              {({ input, meta }) => (
                <React.Fragment>
                  <Text style={styles.formLabel}>Context (optional):</Text>
                  <TextInput style={styles.questionContext} {...input} />
                </React.Fragment>
              )}
            </Field>

            <React.Fragment>
              <Text style={styles.formLabel}>Topic:</Text>
              <Picker
                selectedValue={this.state.category_id}
                onValueChange={(itemValue, itemIndex) =>
                  this.setState({ category_id: itemValue })
                }
                style={styles.picker}
                itemStyle={styles.pickerItems}
              >
                <Picker.Item label="Physical Health" value={1} />
                <Picker.Item label="Mental Health" value={2} />
                <Picker.Item label="Work" value={3} />
                <Picker.Item label="School" value={4} />
                <Picker.Item label="Relationships" value={5} />
              </Picker>
            </React.Fragment>

            <View style={styles.switchContainer}>
              <Switch
                value={this.state.isAnon}
                onValueChange={itemValue => {
                  this.setState({ isAnon: itemValue });
                }}
              />
              <Text style={styles.switchLabel}>Remain Anonymous</Text>
            </View>
            <LinearGradient
              start={{ x: 1, y: 0 }}
              end={{ x: 1, y: 1 }}
              colors={[
                globalStyles.blueGradientColor.start.color,
                globalStyles.blueGradientColor.end.color
              ]}
              style={styles.submitButton}
            >
              <Button
                onPress={() => {
                  handleSubmit();
                }}
                color="#FFFFFF"
                title="Submit"
              />
            </LinearGradient>
          </View>
        )}
      />
    );
  }
}

CommunityQuestionForm.propTypes = {};

export default CommunityQuestionForm;
