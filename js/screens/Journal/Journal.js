import React from "react";
import PropTypes from "prop-types";
import { Text, View, Button } from "react-native";

const Journal = props => {
  return (
    <View>
      <Text>Journal</Text>
      <Button
        title="Journal"
        onPress={() => {
          props.navigation.navigate("JournalEntry");
        }}
      />
    </View>
  );
};

Journal.propTypes = {};

export default Journal;
