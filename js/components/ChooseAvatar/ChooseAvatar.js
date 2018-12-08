import React, { Component, Fragment } from "react";
import PropTypes from "prop-types";
import moment from "moment";
import {
  Text,
  View,
  Modal,
  TouchableOpacity,
  StyleSheet,
  Image
} from "react-native";
import LinearGradient from "react-native-linear-gradient";
<<<<<<< HEAD
import globalStyles from "../../config/styles";
=======
>>>>>>> add Loading Component with animation
import styles from "./styles";

export default class ChooseAvatar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      modalVisible: false,
      currAvatar: "",
      avatar1: false,
      avatar2: false,
      avatar3: false,
      avatar4: false,
      avatar5: false,
      avatar6: false
    };
  }
  setModalVisible = visible => {
    this.setState({ modalVisible: visible });
  };

  selectedAvatar = avatar => {
    let lastAvatar = this.state.currAvatar;
    this.setState({
<<<<<<< HEAD
      [lastAvatar]: (this.state[lastAvatar] = false),
      [avatar]: !this.state[avatar],
      currAvatar: avatar
    });
    console.log(this.state);
=======
      [lastAvatar]: !this.state[lastAvatar],
      [avatar]: !this.state[avatar],
      currAvatar: avatar
    });
>>>>>>> add Loading Component with animation
  };

  render() {
    return (
      <View>
        <Modal
          animationType="fade"
          transparent={true}
          visible={this.state.modalVisible}
        >
          <View style={styles.modalContentContainer}>
            <LinearGradient
<<<<<<< HEAD
              start={{ x: 0, y: 0 }}
              end={{ x: 0, y: 1 }}
              colors={[
                globalStyles.modalGradientColor.start.color,
                globalStyles.modalGradientColor.end.color
              ]}
=======
              useAngle={true}
              angle={180}
              angleCenter={{ x: 0.5, y: 0.5 }}
              colors={["#F3E3D8", "#fff"]}
>>>>>>> add Loading Component with animation
              style={[
                StyleSheet.absoluteFill,
                { height: "100%", width: "100%", borderRadius: 10 }
              ]}
            />
            <Text style={styles.chooseAvatarTitle}>Select a new icon:</Text>
            <View style={styles.avatarContainer}>
              <TouchableOpacity
                activeOpacity={0.6}
<<<<<<< HEAD
                style={this.state.avatar1 && styles.touch}
=======
                style={styles.setReminderButton}
>>>>>>> add Loading Component with animation
                onPress={() => {
                  this.selectedAvatar("avatar1");
                }}
              >
                <Image
                  style={
                    this.state.avatar1 ? styles.avatarSelected : styles.avatar
                  }
<<<<<<< HEAD
                  source={require("../../assets/Avatars/beachBear.png")}
=======
                  source={{ uri: "https://speakbox.ca/images/logo.png" }}
>>>>>>> add Loading Component with animation
                />
              </TouchableOpacity>
              <TouchableOpacity
                activeOpacity={0.6}
<<<<<<< HEAD
                style={this.state.avatar2 && styles.touch}
=======
                style={styles.setReminderButton}
>>>>>>> add Loading Component with animation
                onPress={() => {
                  this.selectedAvatar("avatar2");
                }}
              >
                <Image
                  style={
                    this.state.avatar2 ? styles.avatarSelected : styles.avatar
                  }
<<<<<<< HEAD
                  source={require("../../assets/Avatars/blueYellowBear.png")}
=======
                  source={{ uri: "https://speakbox.ca/images/logo.png" }}
>>>>>>> add Loading Component with animation
                />
              </TouchableOpacity>
              <TouchableOpacity
                activeOpacity={0.6}
<<<<<<< HEAD
                style={this.state.avatar3 && styles.touch}
=======
                style={styles.setReminderButton}
>>>>>>> add Loading Component with animation
                onPress={() => {
                  this.selectedAvatar("avatar3");
                }}
              >
                <Image
                  style={
                    this.state.avatar3 ? styles.avatarSelected : styles.avatar
                  }
<<<<<<< HEAD
                  source={require("../../assets/Avatars/freshLilacBear.png")}
=======
                  source={{ uri: "https://speakbox.ca/images/logo.png" }}
>>>>>>> add Loading Component with animation
                />
              </TouchableOpacity>
              <TouchableOpacity
                activeOpacity={0.6}
<<<<<<< HEAD
                style={this.state.avatar4 && styles.touch}
=======
                style={styles.setReminderButton}
>>>>>>> add Loading Component with animation
                onPress={() => {
                  this.selectedAvatar("avatar4");
                }}
              >
                <Image
                  style={
                    this.state.avatar4 ? styles.avatarSelected : styles.avatar
                  }
<<<<<<< HEAD
                  source={require("../../assets/Avatars/greenBear.png")}
=======
                  source={{ uri: "https://speakbox.ca/images/logo.png" }}
>>>>>>> add Loading Component with animation
                />
              </TouchableOpacity>
              <TouchableOpacity
                activeOpacity={0.6}
<<<<<<< HEAD
                style={this.state.avatar5 && styles.touch}
=======
                style={styles.setReminderButton}
>>>>>>> add Loading Component with animation
                onPress={() => {
                  this.selectedAvatar("avatar5");
                }}
              >
                <Image
                  style={
                    this.state.avatar5 ? styles.avatarSelected : styles.avatar
                  }
<<<<<<< HEAD
                  source={require("../../assets/Avatars/pinkBear.png")}
=======
                  source={{ uri: "https://speakbox.ca/images/logo.png" }}
>>>>>>> add Loading Component with animation
                />
              </TouchableOpacity>
              <TouchableOpacity
                activeOpacity={0.6}
<<<<<<< HEAD
                style={this.state.avatar6 && styles.touch}
=======
                style={styles.setReminderButton}
>>>>>>> add Loading Component with animation
                onPress={() => {
                  this.selectedAvatar("avatar6");
                }}
              >
                <Image
                  style={
                    this.state.avatar6 ? styles.avatarSelected : styles.avatar
                  }
<<<<<<< HEAD
                  source={require("../../assets/Avatars/saffronBear.png")}
=======
                  source={{ uri: "https://speakbox.ca/images/logo.png" }}
>>>>>>> add Loading Component with animation
                />
              </TouchableOpacity>
            </View>
            <TouchableOpacity
              activeOpacity={0.6}
              style={styles.saveButton}
              onPress={() => {
                this.setModalVisible(!this.state.modalVisible);
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
                useAngle={true}
                angle={180}
                angleCenter={{ x: 0.5, y: 0.5 }}
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
              <Text style={styles.save}>Save</Text>
            </TouchableOpacity>
          </View>
        </Modal>
        <TouchableOpacity
          activeOpacity={0.6}
          onPress={() => {
            this.setModalVisible(true);
          }}
        >
          <Image
<<<<<<< HEAD
            style={styles.editAvatar}
            source={require("../../assets/Avatars/beachBear.png")}
          />
          <Image
            style={styles.cameraIcon}
            source={require("../../assets/Icons/camera-icon.png")}
=======
            style={{ width: 120, height: 120 }}
            source={{ uri: "https://speakbox.ca/images/logo.png" }}
>>>>>>> add Loading Component with animation
          />
        </TouchableOpacity>
      </View>
    );
  }
}
