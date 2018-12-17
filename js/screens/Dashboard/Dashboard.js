import React from "react";
import PropTypes from "prop-types";
import {
  Text,
  View,
  ImageBackground,
  TouchableOpacity,
  StyleSheet
} from "react-native";
import styles from "./styles";
import globalStyles from "../../config/styles";
import LinearGradient from "react-native-linear-gradient";

const Dashboard = ({ navigation }) => {
  return (
    <ImageBackground
      source={require("../../assets/Background/background-1.png")}
      style={{ width: "100%", height: "100%" }}
    >
      <View style={styles.dashContainer}>
        <Text style={styles.dashTitle}>Emotional Graph</Text>
        <TouchableOpacity
          activeOpacity={0.6}
          style={styles.checkinButton}
          onPress={() => {
            navigation.navigate("Checkin");
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
          <Text style={styles.checkin}>Checkin</Text>
        </TouchableOpacity>
      </View>
    </ImageBackground>
    // <Checkin navigation={navigation} />
  );
};

export default Dashboard;
