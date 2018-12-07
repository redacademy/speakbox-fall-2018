import React from "react";
import PropTypes from "prop-types";
import {
  Text,
  View,
  ScrollView,
  Image,
  TouchableOpacity,
  StyleSheet,
  ImageBackground
} from "react-native";
import SetAReminder from "../../components/SetAReminder/";
import styles from "./styles";

const Profile = ({ navigation }) => {
  return (
    <ImageBackground          
      source={require("../../assets/Background/background.png")}
      style={{ width: "100%", height: "100%" }}
    >
      <ScrollView>
        <View style={styles.profileContainer}>
          <Image
            style={{ width: 120, height: 120 }}
            source={{ uri: "https://speakbox.ca/images/logo.png" }}
            // source={require("../../assets/Avatars/beachBear.svg")}
          />
          <Text style={styles.accountName}>Account Name</Text>
          <TouchableOpacity
            activeOpacity={0.6}
            style={styles.editAccountButton}
            onPress={() => {
              navigation.navigate("EditProfile");
            }}
          >
            <Text style={styles.editAccount}>Edit Account</Text>
          </TouchableOpacity>
          <View style={styles.plantContainer}>
            <Text style={styles.plantName}>[Plant Name] Progress</Text>
            {/* BABY FLOWER
        <Image
          style={styles.plant}
          source={require("../../assets/Flowers/babyFlower.png")}
        /> */}
            {/* CHILD FLOWER
        <Image
          style={styles.plant}
          source={require("../../assets/Flowers/childFlower.png")}
        /> */}
            {/* TEEN FLOWER
            <Image
          style={styles.plant}
          source={require("../../assets/Flowers/teenFlower.png")}
        /> */}
            {/* ADULT FLOWER */}
            <Image
              style={styles.plant}
              source={require("../../assets/Flowers/adultFlower.png")}
            />
          </View>
          <Text style={styles.plantDescription}>
            [Plant Name] is [number] journal entries away from sprouting a bud!
          </Text>
          <SetAReminder />
          <TouchableOpacity
            activeOpacity={0.6}
            style={styles.logoutButton}
            onPress={() => {}}
          >
            <Text style={styles.logout}>Log Out</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </ImageBackground>
  );
};

Profile.propTypes = {};

export default Profile;
