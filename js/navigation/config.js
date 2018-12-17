import React from "react";
import { Image, View, TouchableOpacity } from "react-native";
import { Header } from "react-navigation";
import styles from "./styles";

export const sharedNavigationOptions = navigation => ({
  headerBackTitle: null,
  header: props => <Header {...props} />,
  headerRight: (
    <View style={styles.header}>
      <TouchableOpacity
        onPress={() => {
          navigation.navigate("Profile");
        }}
      >
        <Image
          style={styles.profileIcon}
          source={require("../assets/Icons/profile-photo-icon.png")}
        />
      </TouchableOpacity>
    </View>
  ),

  headerStyle: {
    borderBottomColor: "transparent"
  }
});
