import React from "react";
import PropTypes from "prop-types";
import { Text, View, ScrollView, Image, ImageBackground } from "react-native";
import styles from "./styles";

const Activity = () => {
  return (
    <ImageBackground
      source={require("../../assets/Background/background.png")}
      style={styles.background}
    >
      <ScrollView>
        <View style={styles.container}>
          <View style={styles.pickActivity}>
            <Text style={styles.title}>Pick an Activity</Text>
          </View>
          <View>
            <View style={styles.sectionTitle}>
              <Text style={styles.theme}>Mind</Text>
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
            <View style={styles.sectionTitle}>
              <Text style={styles.theme}>Body</Text>
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
            <View style={styles.sectionTitle}>
              <Text style={styles.theme}>Social</Text>
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
        </View>
      </ScrollView>
    </ImageBackground>
  );
};

Activity.propTypes = {};

export default Activity;
