import React from "react";
import {
  View,
  Text,
  FlatList,
  TouchableOpacity,
  ImageBackground
} from "react-native";
import PropTypes from "prop-types";
import styles from "./styles";
import AskButton from "../../components/AskButton";
import FilterButton from "../../components/FilterButton/FilterButton";
import TopicListItem from "../../components/TopicListItem";

const CommunityCategory = props => {
  return (
    <ImageBackground
      source={require("../../assets/Background/background-1.png")}
      style={styles.linearGradient}
    >
      <View style={styles.container}>
        <View style={styles.topContainer}>
          <Text style={styles.title}>{props.name}</Text>
          <AskButton
            navigation={props.navigation}
            categoryID={props.categoryID}
          />
        </View>
        <View style={styles.bottomContainer}>
          <View style={styles.filterContainer}>
            <Text style={styles.sortBy}>Sort By:</Text>
            <View style={styles.filters}>
              <FilterButton
                text={"Latest to Oldest"}
                filterName={"lateToOld"}
                getPosts={props.getPosts}
              />
              <FilterButton
                text={"Oldest to Latest"}
                filterName={"oldToLate"}
                getPosts={props.getPosts}
              />
              <FilterButton
                text={"Unanswered"}
                filterName={"unanswered"}
                getPosts={props.getPosts}
              />
              <FilterButton
                text={"My posts"}
                filterName={"mine"}
                getPosts={props.getPosts}
              />
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
    </ImageBackground>
  );
};

CommunityCategory.propTypes = {
  categoryID: PropTypes.number.isRequired,
  getPosts: PropTypes.func.isRequired,
  name: PropTypes.string.isRequired,
  navigation: PropTypes.object.isRequired,
  topics: PropTypes.oneOfType([PropTypes.object, PropTypes.array])
};

export default CommunityCategory;
