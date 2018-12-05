import React, { Component } from "react";
import PropTypes from "prop-types";
import {
  Text,
  View,
  Modal,
  TouchableOpacity,
  Switch,
  StyleSheet,
  DatePickerIOS
} from "react-native";
import LinearGradient from "react-native-linear-gradient";
import styles from "./styles";

class SetAReminder extends Component {
  constructor(props) {
    super(props);
    this.state = {
      chosenDate: new Date(),
      chosenTime: "8:30",
      modalVisible: false,
      reminderSwitch: false
    };
  }
  setDate = newDate => {
    console.log(newDate)
    this.setState({ chosenDate: newDate });
  };
  toggleReminderSwitch = value => {
    this.setState({ reminderSwitch: value });
  };
  setModalVisible(visible) {
    this.setState({ modalVisible: visible });
  }

  render() {
    return (
      <View>
        <Modal
          animationType="fade"
          transparent={true}
          visible={this.state.modalVisible}
        >
          <View style={styles.modalContentContainer}>
            <LinearGradient
              useAngle={true}
              angle={180}
              angleCenter={{ x: 0.5, y: 0.5 }}
              colors={["#F3E3D8", "#fff"]}
              style={[
                StyleSheet.absoluteFill,
                { height: "100%", width: "100%", borderRadius: 10 }
              ]}
            />
            <Text style={styles.setAReminder}>Set A Reminder</Text>
            <DatePickerIOS
              mode={"time"}
              date={this.state.chosenDate}
              onDateChange={this.setDate}
            />
            <TouchableOpacity
              activeOpacity={0.6}
              style={styles.setReminderButton}
              onPress={() => {
                this.setModalVisible(!this.state.modalVisible);
                this.setState({ chosenTime: this.state.chosenDate.toString() });
              }}
            >
              <Text style={styles.setReminder}>Set Reminder</Text>
            </TouchableOpacity>
          </View>
        </Modal>
        <View style={styles.reminderContainer}>
          <Text style={styles.reminder}>Reminders</Text>
          <View style={styles.reminderColumn}>
            <View style={styles.reminderRow1}>
              <Text>On/Off:</Text>
              <Switch
                style={{
                  transform: [{ scaleX: 0.7 }, { scaleY: 0.6 }]
                }}
                trackColor={{ true: "#61C0BF" }}
                onValueChange={this.toggleReminderSwitch}
                value={this.state.reminderSwitch}
              />
            </View>
            <TouchableOpacity
              activeOpacity={0.6}
              style={styles.reminderRow2}
              onPress={() => {
                this.setModalVisible(true);
              }}
            >
              <Text>Time:</Text>
              <Text>{this.state.chosenTime}</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    );
  }
}

SetAReminder.propTypes = {};

export default SetAReminder;
