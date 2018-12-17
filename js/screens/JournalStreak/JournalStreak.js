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
import globalStyles from "../../config/styles";
import ActivitySlider from "../../components/ActivitySlider";
import styles from "./styles";

const JournalStreak = props => {
  return (
    <ImageBackground
      source={require("../../assets/Background/background-3.png")}
      style={styles.background}
    >
      <ScrollView style={styles.scroll}>
        <View style={styles.container}>
          <Text style={styles.awesome}>AWESOME!</Text>
          <Image
            style={styles.flower}
            source={require("../../assets/Flowers/childFlower.png")}
          />
          <Text style={styles.message}>
            You have achieved a 5 day streak for journal entries! Albert is 25%
            to full growth. Keep going with your journal entries to watch Albert
            grow.
          </Text>
          <View style={styles.streakSection}>
            <Text style={styles.streak}>JOURNAL STREAK:</Text>
            <Text style={styles.streakNumber}>5</Text>
            <Text style={styles.days}>DAYS</Text>
          </View>
          <Text style={styles.question}>Would you like to do an activity?</Text>
          <View style={styles.options}>
            <TouchableOpacity>
              <LinearGradient
                style={styles.yesButton}
                colors={[
                  globalStyles.blueGradientColor.start.color,
                  globalStyles.blueGradientColor.end.color
                ]}
                start={{ x: 1.0, y: 0.0 }}
                end={{ x: 1.0, y: 1.0 }}
              >
                <Text style={styles.yes}>YES</Text>
              </LinearGradient>
            </TouchableOpacity>
            <Text style={styles.noButton}>NOT NOW</Text>
          </View>
        </View>
      </ScrollView>
    </ImageBackground>
  );
};

export default JournalStreak;
