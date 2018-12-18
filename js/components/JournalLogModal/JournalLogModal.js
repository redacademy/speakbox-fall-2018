import React, { Component } from "react";
import { View, Text, FlatList } from "react-native";
import styles from "./styles";
import PropTypes from "prop-types";
import apiPromise from "../../config/api";

class JournalLogModal extends Component {
  constructor() {
    super();
    this.state = {
      journalLogs: {},
      error: null
    };
  }
  getJournalLogs = async () => {
    const res = null;
    const token =
      "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJodHRwczpcL1wvYXBpLnNwZWFrYm94LXN0YWdpbmcuY2FcL2FwaVwvYXV0aFwvbG9naW4iLCJpYXQiOjE1NDUyNDMwOTgsImV4cCI6MTU0NTI0NjY5OCwibmJmIjoxNTQ1MjQzMDk4LCJqdGkiOiJZOVVBMXhkQklCWmZ1RHJ2Iiwic3ViIjoxMSwicHJ2IjoiODdlMGFmMWVmOWZkMTU4MTJmZGVjOTcxNTNhMTRlMGIwNDc1NDZhYSJ9.dmoRUGoXEDKKiuunY-KLxxt8gvKxBnQpmyGFprDylMc";
    try {
      const res = await apiPromise(`/journal-entries`, {
        headers: {
          Authorization: `Bearer${[token]}`
        }
      });
      console.log(res);
      this.setState({ journalLogs: res, error: null });
    } catch (error) {
      this.setState({ error });
    }
  };

  componentDidMount() {
    this.getJournalLogs();
  }
  render() {
    return (
      <View style={styles.dimContainer}>
        <FlatList
          data={[1, 2, 3]}
          keyExtractor={(item, index) => `list-item-${index}`}
          renderItem={({ item }) => (
            <View style={styles.journalList}>
              <Text>Date</Text>
              <Text style={styles.emotions}>Emotions</Text>
            </View>
          )}
        />
      </View>
    );
  }
}
export default JournalLogModal;
