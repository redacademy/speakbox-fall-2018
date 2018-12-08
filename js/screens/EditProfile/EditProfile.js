import React from "react";
import PropTypes from "prop-types";
import EditProfileForm from "../../components/EditProfileForm";
import { Text, View, Image, ImageBackground } from "react-native";
import styles from "./styles";
import ChooseAvatar from "../../components/ChooseAvatar/ChooseAvatar";

const EditProfile = ({ navigation }) => {
  return (
    <ImageBackground
      source={require("../../assets/Background/background.png")}
      style={{ width: "100%", height: "100%" }}
    >
      <View style={styles.editProfileContainer}>
        <ChooseAvatar />
        <EditProfileForm navigation={navigation} />
      </View>
    </ImageBackground>
  );
};

EditProfile.propTypes = {};

export default EditProfile;
