import React from "react";
import PropTypes from "prop-types";
import { View, Text, TextInput, Picker, Button } from "react-native";
import { Form, Field } from "react-final-form";
import LinearGradient from "react-native-linear-gradient";
import styles from "./styles";

const CommunityQuestionForm = props => {
  return (
    <Form
      style={styles.form}
      onSubmit={values => {
        console.log(`Submitted: ${values}`);
      }}
      render={({ handleSubmit, pristine, invalid, values, form }) => (
        <View style={styles.formView}>
          <Field name="question">
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
          <Field name="context">
            {({ input, meta }) => (
              <React.Fragment>
                <Text style={styles.formLabel}>Context (optional):</Text>
                <TextInput style={styles.questionContext} {...input} />
              </React.Fragment>
            )}
          </Field>
          <Field name="topic">
            {({ input, meta }) => (
              <React.Fragment>
                <Text style={styles.formLabel}>Topic:</Text>
                <Picker
                  {...input}
                  style={styles.picker}
                  itemStyle={styles.pickerItems}
                >
                  <Picker.Item label="Physical Health" value="physicalhealth" />
                  <Picker.Item label="Mental Health" value="mentalhealth" />
                  <Picker.Item label="Work" value="work" />
                  <Picker.Item label="School" value="school" />
                  <Picker.Item label="Relationships" value="relationships" />
                </Picker>
              </React.Fragment>
            )}
          </Field>
          <LinearGradient
            start={{ x: 1, y: 0 }}
            end={{ x: 1, y: 1 }}
            colors={["#A4E8FF", "#6BCCFD"]}
            style={styles.submitButton}
          >
            <Button
              onPress={() => {
                console.log("Pressed");
              }}
              color="#FFFFFF"
              title="Submit"
            />
          </LinearGradient>
        </View>
      )}
    />
  );
};

CommunityQuestionForm.propTypes = {};

export default CommunityQuestionForm;
