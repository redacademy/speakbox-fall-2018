import React from "react";
import { Text, View, ImageBackground, TouchableOpacity, StyleSheet } from "react-native";
import Graph from "../../components/Graph";
import styles from "./styles";
import globalStyles from "../../config/styles";
import LinearGradient from "react-native-linear-gradient";

const Dashboard = ({ navigation }) => {
  return (
    <ImageBackground
      source={require("../../assets/Background/background-1.png")}
      style={styles.backgroundImage}
    >
      <View style={styles.dashContainer}>
        <Text style={styles.dashTitle}>Emotional Graph</Text>
        <Graph />
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
            style={[StyleSheet.absoluteFill, styles.gradient]}
          />
          <Text style={styles.checkin}>Checkin</Text>
        </TouchableOpacity>
      </View>
    </ImageBackground>
  );
};

export default Dashboard;
