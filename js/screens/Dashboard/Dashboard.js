import React from "react";
import PropTypes from "prop-types";
import { Text, View, Dimensions, ImageBackground } from "react-native";
import { BarChart } from "react-native-chart-kit";
import styles from "./styles";

const data = {
  labels: ["January", "February", "March", "April", "May", "June"],
  datasets: [
    {
      data: [20, 45, 28, 80, 99, 43]
    }
  ]
};
const chartConfig = {
  backgroundGradientFrom: "#1E2923",
  backgroundGradientTo: "#08130D",
  color: (opacity = 1) => `rgba(26, 255, 146, ${opacity})`
};
const Dashboard = () => {
  return (
    <ImageBackground
      source={require("../../assets/Background/background-1.png")}
      style={{ width: "100%", height: "100%" }}
    >
      <View style={styles.dashContainer}>
        <Text style={styles.dashTitle}>Emotional Graph</Text>
        {/* <BarChart
        style={styles.barGraph}
        data={data}
        chartConfig={chartConfig}
      /> */}
      </View>
    </ImageBackground>
  );
};

Dashboard.propTypes = {};

export default Dashboard;
