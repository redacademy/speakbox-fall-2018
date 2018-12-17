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
import ActivityModal from "../../components/ActivityModal";
import PropTypes from "prop-types";

const ActivityDetails = props => {
  return (
    <ImageBackground
      source={require("../../assets/Background/background-3.png")}
      style={styles.background}
    >
      <ScrollView>
        <View style={styles.container}>
          <Text style={styles.title}>
            {props.activity && props.activity.title}
          </Text>
          <View style={styles.profile}>
            <Image
              style={styles.activityImage}
              source={{ uri: props.activity && props.activity.image_url }}
            />
            <Text style={styles.description}>
              {props.activity && props.activity.description}
              <Text style={styles.time}>20 minutes.</Text>
            </Text>
          </View>
          <View>
            <TouchableOpacity
              onPress={() => {
                props.toggleVisibility();
              }}
            >
              <LinearGradient
                start={{ x: 0, y: 0 }}
                end={{ x: 0, y: 1 }}
                colors={[
                  globalStyles.blueGradientColor.start.color,
                  globalStyles.blueGradientColor.end.color
                ]}
                style={styles.button}
              >
                <Text style={styles.buttonTitle}>Do it Now</Text>
                <ActivityModal
                  activity={props.activity}
                  isVisible={props.isVisible}
                  toggleVisibility={props.toggleVisibility}
                  navigation={props.navigation}
                />
              </LinearGradient>
            </TouchableOpacity>
            <TouchableOpacity>
              <LinearGradient
                start={{ x: 0, y: 0 }}
                end={{ x: 0, y: 1 }}
                colors={[
                  globalStyles.pinkGradientColor.start.color,
                  globalStyles.pinkGradientColor.end.color
                ]}
                style={styles.button}
              >
                <Text style={styles.buttonTitle}>Save for Later</Text>
              </LinearGradient>
            </TouchableOpacity>
          </View>
          <View style={styles.sectionTitle}>
            <Text style={styles.theme}>View Other Activities</Text>
          </View>
          {props.allActivities && (
            <ScrollView style={styles.carousel} horizontal={true}>
              {props.allActivities.map((activity, key) => {
                return (
                  <TouchableOpacity
                    key={key}
                    onPress={() => {
                      props.navigation.navigate("ActivityDetails", {
                        id: activity.id
                      });
                    }}
                  >
                    <Image
                      style={styles.carouselImage}
                      source={{
                        uri: activity.image_url
                      }}
                    />
                  </TouchableOpacity>
                );
              })}
            </ScrollView>
          )}
        </View>
      </ScrollView>
    </ImageBackground>
  );
};
ActivityDetails.propTypes = {
  activity: PropTypes.oneOfType([PropTypes.object, PropTypes.array]),
  allActivities: PropTypes.oneOfType([PropTypes.object, PropTypes.array]),
  navigation: PropTypes.object.isRequired,
  isVisible: PropTypes.bool.isRequired,
  toggleVisibility: PropTypes.oneOfType([PropTypes.bool, PropTypes.func])
};

export default ActivityDetails;
