import React, { Component } from "react";
import { View, Text, FlatList } from "react-native";
import styles from "./styles";

class ActivityLogModal extends Component {
  constructor() {
    super();
  }
  render() {
    return (
      <View style={styles.dimContainer}>
        <FlatList
          data={[1, 2, 3]}
          keyExtractor={(item, index) => `list-item-${index}`}
          renderItem={({ item }) => (
            <View style={styles.journalList}>
              <View style={styles.activityDate}>
                <Text style={styles}>Date</Text>
                <Text style={styles.activity}>Activity Title</Text>
              </View>
              <View style={styles.activityRating}>
                <Text style={styles.rating}>Helpfulness:</Text>
                <Text style={styles.number}>4</Text>
              </View>
            </View>
          )}
        />
      </View>
    );
  }
}

export default ActivityLogModal;
