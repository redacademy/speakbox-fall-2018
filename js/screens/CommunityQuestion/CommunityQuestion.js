import React from "react";
import PropTypes from "prop-types";
import { ScrollView, View, Text, TouchableOpacity } from "react-native";
import CommunityQuestionForm from "../../components/CommunityQuesitonForm";
import LinearGradient from "react-native-linear-gradient";
import styles from "./styles";
import globalStyles from "../../config/styles";
import CrisisModal from "../../components/CrisisModal";

const CommunityQuestion = props => {
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
      <ScrollView>
        <View style={props.isVisible ? styles.dimContainer : styles.container}>
          <Text style={styles.title}>Ask a question</Text>
          <LinearGradient
            start={{ x: 1, y: 0 }}
            end={{ x: 1, y: 1 }}
            colors={["#FAD961", "#EFCC4C"]}
            style={styles.crisisButton}
          >
            <TouchableOpacity
              onPress={() => {
                props.toggleVisibility();
              }}
            >
              <Text style={styles.crisisText}>I'm in a crisis</Text>
            </TouchableOpacity>
          </LinearGradient>

          <CrisisModal
            toggleVisibility={props.toggleVisibility}
            isVisible={props.isVisible}
          />
          <CommunityQuestionForm navigation={props.navigation} />
        </View>
      </ScrollView>
    </LinearGradient>
  );
};

CommunityQuestion.propTypes = {
  navigation: PropTypes.object.isRequired
};

export default CommunityQuestion;
