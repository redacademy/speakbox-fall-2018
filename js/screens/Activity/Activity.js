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

const Activity = props => {
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
            <ScrollView style={styles.carousel} horizontal={true} />
            <View style={styles.sectionTitle}>
              <Text style={styles.theme}>Mind</Text>
            </View>
            {props.activities && (
              <ScrollView style={styles.carousel} horizontal={true}>
                {props.activities.map((activity, key) => {
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
                        style={styles.image}
                        source={{
                          uri: activity.image_url
                        }}
                      />
                    </TouchableOpacity>
                  );
                })}
              </ScrollView>
            )}
            <View style={styles.sectionTitle}>
              <Text style={styles.theme}>Body</Text>
            </View>
            {props.activities && (
              <ScrollView style={styles.carousel} horizontal={true}>
                {props.activities.map((activity, key) => {
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
                        style={styles.image}
                        source={{ uri: activity.image_url }}
                      />
                    </TouchableOpacity>
                  );
                })}
              </ScrollView>
            )}
            <View style={styles.sectionTitle}>
              <Text style={styles.theme}>Social</Text>
            </View>
            {props.activities && (
              <ScrollView style={styles.carousel} horizontal={true}>
                {props.activities.map((activity, key) => {
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
                        style={styles.image}
                        source={{ uri: activity.image_url }}
                      />
                    </TouchableOpacity>
                  );
                })}
              </ScrollView>
            )}
          </View>
        </View>
      </ScrollView>
    </ImageBackground>
  );
};
Activity.propTypes = {
  activities: PropTypes.object.isRequired,
  navigation: PropTypes.object.isRequired
};

export default Activity;
