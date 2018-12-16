import React from "react";
import {
  Text,
  View,
  ScrollView,
  Image,
  TouchableOpacity,
  ImageBackground
} from "react-native";
import LinearGradient from "react-native-linear-gradient";
import styles from "./styles";
import globalStyles from "../../config/styles";
import ActivitySlider from "../../components/ActivitySlider";
import PropTypes from "prop-types";
<<<<<<< HEAD
=======

>>>>>>> add propTypes to activity screens

const ActivityComplete = props => {
  return (
    <ImageBackground
      source={require("../../assets/Background/background-3.png")}
      style={styles.background}
    >
      <ScrollView style={styles.scroll}>
        <View style={styles.container}>
          <Text style={styles.title}>
            Good job on completing your activity!
          </Text>
          <Image
            style={styles.image}
            source={require("../../assets/Icons/ribbon2.png")}
          />
          <Text style={styles.activityTitle}>{props.activity.title}</Text>
          <View style={styles.profile}>
            <Image
              style={styles.activityImage}
              source={{ uri: props.activity.image_url }}
            />
          </View>
          <View style={styles.slider}>
            <Text style={styles.question}>How helpful did you find it?</Text>
            <ActivitySlider />
            <View style={styles.numbersRating}>
              <Text style={styles.numbers}>1</Text>
              <Text style={styles.numbers}>2</Text>
              <Text style={styles.numbers}>3</Text>
              <Text style={styles.numbers}>4</Text>
              <Text style={styles.numbers}>5</Text>
            </View>
            <View style={styles.sliderRating}>
              <Text style={styles.helpful}>Not helpful at all</Text>
              <Text style={styles.helpful}>Very helpful</Text>
            </View>
          </View>
          <View>
            <TouchableOpacity>
              <LinearGradient
                colors={[
                  globalStyles.blueGradientColor.start.color,
                  globalStyles.blueGradientColor.end.color
                ]}
                start={{ x: 1.0, y: 0.0 }}
                end={{ x: 1.0, y: 1.0 }}
                style={styles.button}
              >
                <Text style={styles.buttonTitle}>Submit</Text>
              </LinearGradient>
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>
    </ImageBackground>
  );
};
ActivityComplete.propTypes = {
  activity: PropTypes.object.isRequired
};

export default ActivityComplete;
