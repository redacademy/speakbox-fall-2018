import React from "react";
import PropTypes from "prop-types";
import { Text, View, TouchableOpacity } from "react-native";
import LinearGradient from "react-native-linear-gradient";
import styles from "./styles";
import AskButton from "../../components/AskButton";
import PrivacyModal from "../../components/PrivacyModal";
import globalStyles from "../../config/styles";
const Community = props => {
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
      <View style={props.isVisible ? styles.dimContainer : styles.container}>
        <AskButton navigation={props.navigation} />
        {props.categories.data &&
          props.categories.data.map((element, key) => {
            return (
              <TouchableOpacity
                style={styles.categories}
                key={key}
                onPress={() => {
                  props.navigation.navigate("CommunityCategory", {
                    category: element
                  });
                }}
              >
                <Text style={styles.categoryText}>{element.name}</Text>
              </TouchableOpacity>
            );
          })}
        <PrivacyModal
          isVisible={props.isVisible}
          toggleVisibility={props.toggleVisibility}
        />
      </View>
    </LinearGradient>
  );
};

Community.propTypes = {};

export default Community;
