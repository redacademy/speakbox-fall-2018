import React from "react";
import {
  Text,
  View,
  ScrollView,
  Image,
  ImageBackground,
  TouchableOpacity
} from "react-native";
import styles from "./styles";

const Activity = ({ navigation }) => {
  return (
    <ImageBackground
      source={require("../../assets/Background/background-2.png")}
      style={styles.background}
    >
      <ScrollView>
        <View style={styles.pickActivity}>
          <Text style={styles.title}>Pick an Activity</Text>
        </View>
        <View style={styles.container}>
          <View>
            <View style={styles.sectionTitle}>
              <Text style={styles.theme}>Saved</Text>
            </View>
            <ScrollView style={styles.carousel} horizontal={true}>
              <TouchableOpacity
                onPress={() => {
                  navigation.navigate("ActivityDetails");
                }}
              >
                <Image
                  style={styles.image}
                  source={require("../../assets/Placeholder/placeholder-red.png")}
                />
              </TouchableOpacity>
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

export default Activity;
