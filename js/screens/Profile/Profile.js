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
import LinearGradient from "react-native-linear-gradient";
import SetAReminder from "../../components/SetAReminder/";
import styles from "./styles";
import globalStyles from "../../config/styles";


const Profile = ({ navigation }) => {
  return (
    <ImageBackground
      source={require("../../assets/Background/background.png")}
      style={{ width: "100%", height: "100%" }}
    >
      <ScrollView>
        <View style={styles.profileContainer}>
          <Image
            style={styles.avatar}
            source={require("../../assets/Avatars/beachBear.png")}
          />
          <Text style={styles.accountName}>Account Name</Text>
          <TouchableOpacity
            activeOpacity={0.6}
            style={styles.editAccountButton}
            onPress={() => {
              navigation.navigate("EditProfile");
            }}
          >
            <LinearGradient
              start={{ x: 0, y: 0 }}
              end={{ x: 0, y: 1 }}
              colors={[
                globalStyles.pinkGradientColor.start.color,
                globalStyles.pinkGradientColor.end.color
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
          <SetAReminder navigation={navigation} />
          <TouchableOpacity
            activeOpacity={0.6}
            style={styles.logoutButton}
            onPress={() => {}}
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
            <Text style={styles.logout}>Log Out</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </ImageBackground>
  );
};

Profile.propTypes = {};

export default Profile;
