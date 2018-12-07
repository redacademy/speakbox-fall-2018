import React from "react";
import PropTypes from "prop-types";
import { Text, View, ScrollView, Image, ImageBackground } from "react-native";
import styles from "./styles";

const EditProfile = () => {
  return (
    <ImageBackground
      source={require("../../assets/Background/background.png")}
      style={{ width: "100%", height: "100%" }}
    >
      <ScrollView>
        <View style={styles.editProfileContainer}>
          <Image
            style={{ width: 120, height: 120 }}
            source={{ uri: "https://speakbox.ca/images/logo.png" }}
            // source={require("../../assets/Avatars/beachBear.svg")}
          />
        </View>
      </ScrollView>
    </ImageBackground>
  );
};

EditProfile.propTypes = {};

export default EditProfile;
