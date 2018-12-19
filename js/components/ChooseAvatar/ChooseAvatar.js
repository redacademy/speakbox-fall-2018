import React, { Component } from "react";
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
import Avatar from "./Avatar";

const profileAvatars = [
  {
    id: 0,
    avatar: require("../../assets/Avatars/beachBear.png"),
    selected: false
  },
  {
    id: 1,
    avatar: require("../../assets/Avatars/blueYellowBear.png"),
    selected: false
  },
  {
    id: 2,
    avatar: require("../../assets/Avatars/freshLilacBear.png"),
    selected: false
  },
  {
    id: 3,
    avatar: require("../../assets/Avatars/greenBear.png"),
    selected: false
  },
  {
    id: 4,
    avatar: require("../../assets/Avatars/pinkBear.png"),
    selected: false
  },
  {
    id: 5,
    avatar: require("../../assets/Avatars/saffronBear.png"),
    selected: false
  }
];
export default class ChooseAvatar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      modalVisible: false,
      avatars: profileAvatars
    };
  }
  setModalVisible = visible => {
    this.setState({ modalVisible: visible });
  };

  selectAvatar = avatar => {
    const updatedAvatars = this.state.avatars.map(profileAvatar => {
      if (profileAvatar.id === avatar.id) {
        profileAvatar.selected = !profileAvatar.selected;
      } else {
        profileAvatar.selected = false;
      }
      return profileAvatar;
    });
    this.setState({ avatars: updatedAvatars });
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
              {this.state.avatars.map((avatar, index) => (
                <TouchableOpacity
                  key={index}
                  activeOpacity={0.6}
                  style={avatar.selected && styles.touch}
                  onPress={() => this.selectAvatar(avatar)}
                >
                  <Avatar
                    avatar={avatar.avatar}
                    style={
                      avatar.selected ? styles.avatarSelected : styles.avatar
                    }
                  />
                </TouchableOpacity>
              ))}
            </View>
            <TouchableOpacity
              activeOpacity={0.6}
              style={styles.saveButton}
              onPress={() => {
                this.setModalVisible(!this.state.modalVisible);
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
            source={require("../../assets/Avatars/beachBear.png")}
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
