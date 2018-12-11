import React from "react";
import { View, Text, FlatList, TouchableOpacity } from "react-native";
import PropTypes from "prop-types";
import LinearGradient from "react-native-linear-gradient";
import styles from "./styles";
import AskButton from "../../components/AskButton";
import FilterButton from "../../components/FilterButton/FilterButton";
import TopicListItem from "../../components/TopicListItem";
import globalStyles from "../../config/styles";

const CommunityCategory = props => {
  return (
    <LinearGradient
      start={{ x: 1, y: 0 }}
      end={{ x: 1, y: 1 }}
      colors={[
        globalStyles.screenGradientColor.start.color,
        globalStyles.screenGradientColor.end.color
      ]}
      style={styles.linearGradient}
    >
      <View style={styles.container}>
        <View style={styles.topContainer}>
          <Text style={styles.title}>{props.name}</Text>
          <AskButton navigation={props.navigation} />
        </View>
        <View style={styles.bottomContainer}>
          <View style={styles.filterContainer}>
            <Text style={styles.sortBy}>Sort By:</Text>
            <View style={styles.filters}>
              <FilterButton text={"Latest to Oldest"} />
              <FilterButton text={"Oldest to Latest"} />
              <FilterButton text={"Unanswered"} />
              <FilterButton text={"My posts"} />
            </View>
          </View>
          {props.topics && (
            <FlatList
              data={props.topics.data}
              keyExtractor={(item, index) => `list-item-${index}`}
              renderItem={({ item }) => (
                <TouchableOpacity
                  onPress={() => {
                    props.navigation.navigate("CommunityTopic", {
                      topic: item
                    });
                  }}
                >
                  <TopicListItem item={item} />
                </TouchableOpacity>
              )}
            />
          )}
        </View>
      </View>
    </LinearGradient>
  );
};

CommunityCategory.propTypes = {};

export default CommunityCategory;
