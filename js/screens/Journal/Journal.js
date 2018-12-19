import React from "react";
import PropTypes from "prop-types";
import {
  Text,
  View,
  ImageBackground,
  TouchableOpacity,
  ScrollView,
  Button
} from "react-native";
import LinearGradient from "react-native-linear-gradient";
import JournalLogModal from "../../components/JournalLogModal";
import ActivityLogModal from "../../components/ActivityLogModal";
import globalStyles from "../../config/styles";
import styles from "./styles";
import Ionicons from "react-native-vector-icons/Ionicons";

const Journal = props => {
  console.log("journal", props);
  return (
    <ImageBackground
      source={require("../../assets/Background/background-2.png")}
      style={styles.background}
    >
      <ScrollView contentContainerStyle={styles.container}>
        <View style={styles.positionAbsolute}>
          <TouchableOpacity onPress={() => {}}>
            <LinearGradient
              start={{ x: 0, y: 0 }}
              end={{ x: 0, y: 1 }}
              colors={[
                globalStyles.blueGradientColor.start.color,
                globalStyles.blueGradientColor.end.color
              ]}
              style={styles.navigateButton}
            >
              <Ionicons name={"ios-add"} size={25} style={styles.plusIcon} />
            </LinearGradient>
          </TouchableOpacity>
        </View>
        <View style={styles.header}>
          <Text style={styles.title}>MY LOGS</Text>
          <View style={styles.datePicker}>
            <Ionicons name={"ios-play"} style={styles.arrowLeft} />
            <Text style={styles.date}>November, 2018</Text>
            <Ionicons name={"ios-play"} style={styles.arrowRight} />
          </View>
          <View style={styles.dynamicTabs}>
            <TouchableOpacity
              onPress={() => {
                props.journalVisible && props.toggleVisibility();
              }}
            >
              <LinearGradient
                start={{ x: 0, y: 0 }}
                end={{ x: 0, y: 1 }}
                colors={
                  props.journalVisible
                    ? [
                        globalStyles.pinkGradientColor.start.color,
                        globalStyles.pinkGradientColor.end.color
                      ]
                    : ["#D6D8D7", "#D6D8D7"]
                }
                style={styles.button}
              >
                <Text
                  style={
                    props.journalVisible
                      ? styles.buttonTitle
                      : styles.dimButtonTitle
                  }
                >
                  Journal
                </Text>
              </LinearGradient>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => {
                props.activityVisible && props.toggleVisibility();
              }}
            >
              <LinearGradient
                start={{ x: 0, y: 0 }}
                end={{ x: 0, y: 1 }}
                colors={
                  props.activityVisible
                    ? [
                        globalStyles.pinkGradientColor.start.color,
                        globalStyles.pinkGradientColor.end.color
                      ]
                    : ["#D6D8D7", "#D6D8D7"]
                }
                style={styles.button}
              >
                <Text
                  style={
                    props.activityVisible
                      ? styles.buttonTitle
                      : styles.dimButtonTitle
                  }
                >
                  Activity
                </Text>
              </LinearGradient>
            </TouchableOpacity>
          </View>
        </View>

        <View style={styles.body}>
          {props.activityVisible ? <JournalLogModal /> : <ActivityLogModal />}
        </View>
      </ScrollView>
    </ImageBackground>
  );
};

Journal.propTypes = {
  isVisible: PropTypes.bool.isRequired,
  toggleVisibility: PropTypes.oneOfType([PropTypes.bool, PropTypes.func])
};

export default Journal;
