import React from "react";
import PropTypes from "prop-types";
import { View, Text } from "react-native";
import styles from "./styles";
function TopicListItem(props) {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>{props.item.created_at}</Text>
      <Text style={styles.date}>{props.item.title}</Text>
      <Text style={styles.commentCount}>
        {props.item.comment_count} Comments
      </Text>
    </View>
  );
}

TopicListItem.propTypes = {};

export default TopicListItem;
