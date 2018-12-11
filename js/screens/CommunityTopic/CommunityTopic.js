import React from "react";
import PropTypes from "prop-types";
import {
  View,
  Text,
  ImageBackground,
  TouchableOpacity,
  FlatList
} from "react-native";
import moment from "moment";
import styles from "./styles";
import CommunityCommentModal from "../../components/CommunityCommentModal/CommunityCommentModal";

const CommunityTopic = props => {
  return (
    <ImageBackground
      source={require("../../assets/Background/background-1.png")}
      style={styles.background}
    >
      <View style={props.isVisible ? styles.dimContainer : styles.container}>
        {props.topic.data && (
          <React.Fragment>
            <View style={styles.header}>
              <Text style={styles.headerDate}>
                {moment(props.topic.data.created_at).format(
                  "MMM Do YYYY, h:mm"
                )}
              </Text>
              <Text style={styles.headerName}>
                {props.topic.data.user.data.first_name}
              </Text>
              <Text style={styles.headerTitle}>{props.topic.data.title}</Text>
              <Text style={styles.headerComment}>
                {props.topic.data.comments.data.length} Comments
              </Text>
            </View>

            <View style={styles.container}>
              <View style={styles.flatListContainer}>
                <TouchableOpacity
                  onPress={() => {
                    props.toggleVisibility();
                  }}
                >
                  <View style={styles.commentButton}>
                    <Text style={styles.commentButtonName}>Me</Text>
                    <Text style={styles.commentButtonPlaceholder}>
                      Add a comment...
                    </Text>
                  </View>
                </TouchableOpacity>
                <FlatList
                  data={props.topic.data.comments.data}
                  style={{ marginTop: 5, flex: 1 }}
                  keyExtractor={(item, index) => `list-item-${index}`}
                  renderItem={({ item }) => (
                    <View style={styles.commentButton}>
                      <Text style={styles.headerDate}>
                        {moment(item.created_at).format("MMM Do YYYY, h:mm")}
                      </Text>
                      <Text style={styles.commentButtonName}>
                        {item.user.data.first_name}
                      </Text>
                      <Text style={styles.commentText}>{item.content}</Text>
                    </View>
                  )}
                />
              </View>

              <View style={styles.modal}>
                <CommunityCommentModal
                  isVisible={props.isVisible}
                  toggleVisibility={props.toggleVisibility}
                  insertComment={props.insertComment}
                  getTopics={props.getTopics}
                  topicID={props.topic.data.id}
                />
              </View>
            </View>
          </React.Fragment>
        )}
      </View>
    </ImageBackground>
  );
};

CommunityTopic.propTypes = {};

export default CommunityTopic;
