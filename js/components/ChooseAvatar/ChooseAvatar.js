import React, { Component, Fragment } from "react";
import PropTypes from "prop-types";
import {
  Text,
  View,
  Modal,
  TouchableOpacity,
  StyleSheet,
  Image
} from "react-native";
import LinearGradient from "react-native-linear-gradient";
import globalStyles from "../../config/styles";
import styles from "./styles";

const myAvatar = {
  avatar1: require("../../assets/Avatars/beachBear.png"),
  avatar2: require("../../assets/Avatars/blueYellowBear.png"),
  avatar3: require("../../assets/Avatars/freshLilacBear.png"),
  avatar4: require("../../assets/Avatars/greenBear.png"),
  avatar5: require("../../assets/Avatars/pinkBear.png"),
  avatar6: require("../../assets/Avatars/saffronBear.png")
};

export default class ChooseAvatar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      modalVisible: false,
      currAvatar: "",
      selectedAvatar: "avatar1",
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
      [lastAvatar]: (this.state[lastAvatar] = false),
      [avatar]: !this.state[avatar],
      currAvatar: avatar
    });
    console.log(this.state);
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
              start={{ x: 0, y: 0 }}
              end={{ x: 0, y: 1 }}
              colors={[
                globalStyles.modalGradientColor.start.color,
                globalStyles.modalGradientColor.end.color
              ]}
              style={[
                StyleSheet.absoluteFill,
                { height: "100%", width: "100%", borderRadius: 10 }
              ]}
            />
            <Text style={styles.chooseAvatarTitle}>Select a new icon:</Text>
            <View style={styles.avatarContainer}>
              <TouchableOpacity
                activeOpacity={0.6}
                style={this.state.avatar1 && styles.touch}
                onPress={() => {
                  this.selectedAvatar("avatar1");
                }}
              >
                <Image
                  style={
                    this.state.avatar1 ? styles.avatarSelected : styles.avatar
                  }
                  source={require("../../assets/Avatars/beachBear.png")}
                />
              </TouchableOpacity>
              <TouchableOpacity
                activeOpacity={0.6}
                style={this.state.avatar2 && styles.touch}
                onPress={() => {
                  this.selectedAvatar("avatar2");
                }}
              >
                <Image
                  style={
                    this.state.avatar2 ? styles.avatarSelected : styles.avatar
                  }
                  source={require("../../assets/Avatars/blueYellowBear.png")}
                />
              </TouchableOpacity>
              <TouchableOpacity
                activeOpacity={0.6}
                style={this.state.avatar3 && styles.touch}
                onPress={() => {
                  this.selectedAvatar("avatar3");
                }}
              >
                <Image
                  style={
                    this.state.avatar3 ? styles.avatarSelected : styles.avatar
                  }
                  source={require("../../assets/Avatars/freshLilacBear.png")}
                />
              </TouchableOpacity>
              <TouchableOpacity
                activeOpacity={0.6}
                style={this.state.avatar4 && styles.touch}
                onPress={() => {
                  this.selectedAvatar("avatar4");
                }}
              >
                <Image
                  style={
                    this.state.avatar4 ? styles.avatarSelected : styles.avatar
                  }
                  source={require("../../assets/Avatars/greenBear.png")}
                />
              </TouchableOpacity>
              <TouchableOpacity
                activeOpacity={0.6}
                style={this.state.avatar5 && styles.touch}
                onPress={() => {
                  this.selectedAvatar("avatar5");
                }}
              >
                <Image
                  style={
                    this.state.avatar5 ? styles.avatarSelected : styles.avatar
                  }
                  source={require("../../assets/Avatars/pinkBear.png")}
                />
              </TouchableOpacity>
              <TouchableOpacity
                activeOpacity={0.6}
                style={this.state.avatar6 && styles.touch}
                onPress={() => {
                  this.selectedAvatar("avatar6");
                }}
              >
                <Image
                  style={
                    this.state.avatar6 ? styles.avatarSelected : styles.avatar
                  }
                  source={require("../../assets/Avatars/saffronBear.png")}
                />
              </TouchableOpacity>
            </View>
            <TouchableOpacity
              activeOpacity={0.6}
              style={styles.saveButton}
              onPress={() => {
                this.setModalVisible(!this.state.modalVisible);
                if (this.state.currAvatar !== "") {
                  this.setState({ selectedAvatar: this.state.currAvatar });
                }
              }}
            >
              <LinearGradient
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
              <Text style={styles.save}>Save</Text>
            </TouchableOpacity>
          </View>
        </Modal>
        <TouchableOpacity
          activeOpacity={0.6}
          style={styles.mainTouch}
          onPress={() => {
            this.setModalVisible(true);
          }}
        >
          <Image
            style={styles.editAvatar}
            source={myAvatar[this.state.selectedAvatar]}
          />
          <Image
            style={styles.cameraIcon}
            source={require("../../assets/Icons/camera-icon.png")}
          />
        </TouchableOpacity>
      </View>
    );
  }
}
