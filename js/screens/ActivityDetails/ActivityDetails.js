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

const ActivityDetails = props => {
  return (
    <ImageBackground
      source={require("../../assets/Background/background-3.png")}
      style={styles.background}
    >
      <ScrollView>
        <View style={styles.container}>
          <Text style={styles.title}>Go For Walk</Text>
          <View style={styles.profile}>
            <Image
              style={styles.activityImage}
              source={require("../../assets/Placeholder/placeholder-red.png")}
            />
            <Text style={styles.description}>
              Take a walk and leave your music player behind. Don't be afraid to
              be alone with your thoughts.
              <Text style={{ fontWeight: "700" }}>20 minutes.</Text>
            </Text>
          </View>
          <View>
            <TouchableOpacity
              onPress={() => {
                props.toggleVisibility();
              }}
            >
              <LinearGradient
                colors={[
                  globalStyles.blueGradientColor.start.color,
                  globalStyles.blueGradientColor.end.color
                ]}
                start={{ x: 1.0, y: 0.0 }}
                end={{ x: 1.0, y: 1.0 }}
                style={styles.button}
              >
                <Text style={styles.buttonTitle}>Do it Now</Text>
                <ActivityModal
                  isVisible={props.isVisible}
                  toggleVisibility={props.toggleVisibility}
                />
              </LinearGradient>
            </TouchableOpacity>
            <TouchableOpacity>
              <LinearGradient
                colors={[
                  globalStyles.pinkGradientColor.end.color,
                  globalStyles.pinkGradientColor.start.color
                ]}
                start={{ x: 1.0, y: 0.0 }}
                end={{ x: 1.0, y: 1.0 }}
                style={styles.button}
              >
                <Text style={styles.buttonTitle}>Save for Later</Text>
              </LinearGradient>
            </TouchableOpacity>
          </View>
          <View style={styles.sectionTitle}>
            <Text style={styles.theme}>View Other Activities</Text>
          </View>
          <ScrollView style={styles.carousel} horizontal={true}>
            <Image
              style={styles.image}
              source={require("../../assets/Placeholder/placeholder-red.png")}
            />
            <Image
              style={styles.image}
              source={require("../../assets/Placeholder/placeholder-blue.png")}
            />
            <Image
              style={styles.image}
              source={require("../../assets/Placeholder/placeholder-red.png")}
            />
            <Image
              style={styles.image}
              source={require("../../assets/Placeholder/placeholder-blue.png")}
            />
            <Image
              style={styles.image}
              source={require("../../assets/Placeholder/placeholder-red.png")}
            />
          </ScrollView>
        </View>
      </ScrollView>
    </ImageBackground>
  );
};

export default ActivityDetails;
