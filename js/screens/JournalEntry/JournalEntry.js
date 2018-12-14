import React from "react";
import { View, Text, ScrollView } from "react-native";
import JournalEntryForm from "../../components/JournalEntryForm";
import LinearGradient from "react-native-linear-gradient";
import moment from "moment";
import styles from "./styles";
import PropTypes from "prop-types";
import globalStyles from "../../config/styles";
const JournalEntry = props => {
  return (
    <LinearGradient
      start={{ x: 1, y: 0 }}
      end={{ x: 1, y: 1 }}
      colors={[
        globalStyles.screenGradientColor.start.color,
        globalStyles.screenGradientColor.end.color
      ]}
      style={styles.linearGradient}
    >
      <ScrollView contentContainerStyle={styles.container}>
        <View style={styles.dateContainer}>
          <Text style={styles.date}>
            {moment(Date.now()).format("MMMM DD YYYY")}
          </Text>
        </View>
        <View style={styles.streakContainer}>
          <Text style={styles.streak}>Journal Steak: </Text>
        </View>

        <View style={styles.formContainer}>
          <JournalEntryForm navigation={props.navigation} />
        </View>
      </ScrollView>
    </LinearGradient>
  );
};

JournalEntry.propTypes = {
  navigation: PropTypes.object.isRequired
};
export default JournalEntry;
