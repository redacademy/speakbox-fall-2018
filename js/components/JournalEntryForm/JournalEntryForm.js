import React, { Component } from "react";
import { Text, View, TextInput, TouchableOpacity, Image } from "react-native";
import { Form, Field } from "react-final-form";
import LinearGradient from "react-native-linear-gradient";
import ImagePicker from "react-native-image-picker";
import { apiPromise } from "../../lib/API/";
import Ionicon from "react-native-vector-icons/Ionicons";
import globalStyles from "../../config/styles";
import PropTypes from "prop-types";
import styles from "./styles";

class JournalEntryForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      imageSource: []
    };
  }

  removeImg = img => {
    const oldArr = this.state.imageSource;
    const filteredArr = oldArr.filter(element => {
      return element.uri !== img.uri;
    });
    this.setState({ imageSource: filteredArr });
  };

  showImagePicker = () => {
    const options = {
      title: "Select Photo",
      storageOptions: {
        skipBackup: true,
        path: "images"
      }
    };

    ImagePicker.showImagePicker(options, response => {
      const source = { uri: response.uri };
      this.setState({
        imageSource: [...this.state.imageSource, source]
      });
    });
  };

  createJournalEntry = async body => {
    const token =
      "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJodHRwczpcL1wvYXBpLnNwZWFrYm94LXN0YWdpbmcuY2FcL2FwaVwvYXV0aFwvbG9naW4iLCJpYXQiOjE1NDUwOTMzMTAsImV4cCI6MTU0NTA5NjkxMCwibmJmIjoxNTQ1MDkzMzEwLCJqdGkiOiJsNHg2YVg1aVNZb2xpWkJhIiwic3ViIjoxMiwicHJ2IjoiODdlMGFmMWVmOWZkMTU4MTJmZGVjOTcxNTNhMTRlMGIwNDc1NDZhYSJ9.YnZtVv-zTKZBlGL1OqSn6m4js04ppiptSxiiMXXTrvE";
    const res = await apiPromise("/journal-entries", {
      method: "POST",
      headers: {
        Authorization: `Bearer${[token]}`
      },
      body: JSON.stringify(body.content)
    });
  };

  render() {
    return (
      <Form
        onSubmit={values => {
          this.createJournalEntry(values);
        }}
        render={({ handleSubmit, pristine, invalid }) => (
          <View style={styles.formView}>
            <Field name="content">
              {({ input, meta }) => (
                <TextInput
                  style={styles.contentInput}
                  placeholder="Write anything on your mind..."
                  {...input}
                />
              )}
            </Field>
            <Field name="tags">
              {({ input, meta }) => (
                <TextInput
                  style={styles.tagsInput}
                  placeholder="Add #emotions (optional)"
                  {...input}
                />
              )}
            </Field>
            <Field name="images">
              {({ input, meta }) => (
                <View style={styles.cameraIconContainer}>
                  <TouchableOpacity
                    onPress={() => {
                      this.showImagePicker();
                    }}
                  >
                    <Image
                      source={require("../../assets/Icons/camera-icon.png")}
                      style={styles.cameraIcon}
                    />
                  </TouchableOpacity>
                  {this.state.imageSource &&
                    this.state.imageSource.map((img, index) => {
                      return (
                        <View key={index}>
                          <TouchableOpacity
                            onPress={() => {
                              this.removeImg(img);
                            }}
                            style={styles.removeButton}
                          >
                            <Ionicon
                              name="ios-remove-circle"
                              style={styles.removeIcon}
                            />
                          </TouchableOpacity>
                          <Image source={img} style={styles.images} />
                        </View>
                      );
                    })}
                </View>
              )}
            </Field>
            <LinearGradient
              start={{ x: 1, y: 0 }}
              end={{ x: 1, y: 1 }}
              colors={[
                globalStyles.blueGradientColor.start.color,
                globalStyles.blueGradientColor.end.color
              ]}
              style={styles.submitButton}
            >
              <TouchableOpacity
                onPress={() => {
                  handleSubmit();
                }}
                style={styles.submitButton}
              >
                <Text style={styles.submitText}>submit</Text>
              </TouchableOpacity>
            </LinearGradient>
            <TouchableOpacity
              onPress={() => {
                this.props.navigation.navigate("Journal");
              }}
            >
              <Text style={styles.notNowText}>not now</Text>
            </TouchableOpacity>
          </View>
        )}
      />
    );
  }
}

JournalEntryForm.propTypes = {
  navigation: PropTypes.object.isRequired
};
export default JournalEntryForm;
