import React, { Component } from "react";
import PropTypes from "prop-types";
import { Modal, View, TextInput, Text } from "react-native";

import styles from "./styles";

class CommunityCommentModal extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <Modal
        animationType="slide"
        onRequestClose={() => {
          console.log("close");
        }}
        visible={this.props.isVisible}
        transparent={true}
      >
        <View style={styles.modal}>
          <View style={styles.transparent} />
          <View style={styles.input}>
            <Text>Name</Text>
            <TextInput
              multiline={true}
              autoFocus={true}
              placeholder={"Add comment..."}
              onSubmitEditing={event => {
                this.props.insertComment(
                  event.nativeEvent.text,
                  this.props.topicID
                );
                this.props.getTopics();
                this.props.toggleVisibility();
              }}
            />
          </View>
        </View>
      </Modal>
    );
  }
}

CommunityCommentModal.propTypes = {};

export default CommunityCommentModal;
