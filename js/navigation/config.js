import React from "react";
import { Text } from "react-native";
import { Header } from "react-navigation";

export const sharedNavigationOptions = navigation => ({
  headerBackTitle: null,
  header: props => <Header {...props} />,

  headerTitle: (
    <Text style={{ height: "100%", width: "50%", marginBottom: 10 }}>
      hello
    </Text>
  ),

  headerStyle: {
    backgroundColor: "black"
  }
});
