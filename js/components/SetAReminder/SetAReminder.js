import React, { Component } from "react";
import PropTypes from "prop-types";
import moment from "moment";
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
import globalStyles from "../../config/styles";
import styles from "./styles";

class SetAReminder extends Component {
  constructor(props) {
    super(props);
    this.state = {
      chosenDate: new Date(),
      modalVisible: false,
      reminderSwitch: false
    };
  }

  setDate = newDate => {
    this.setState({ chosenDate: newDate });
  };
  toggleReminderSwitch = value => {
    this.setState({ reminderSwitch: value });
  };
  setModalVisible = visible => {
    this.setState({ modalVisible: visible });
  };

  render() {
    const { navigation } = this.props;
    return (
      <View>
        <Modal
          animationType="fade"
          transparent={true}
          visible={this.state.modalVisible}
        >
          <View style={styles.modalContentContainer}>
            <LinearGradient
<<<<<<< HEAD
              start={{ x: 0, y: 0 }}
              end={{ x: 0, y: 1 }}
              colors={[
                globalStyles.modalGradientColor.start.color,
                globalStyles.modalGradientColor.end.color
              ]}
=======
             start={{ x: 0, y: 0 }}
             end={{ x: 0, y: 1 }}
              colors={["#F3E3D8", "#fff"]}
>>>>>>> add Loading Component with animation
              style={[
                StyleSheet.absoluteFill,
                { height: "100%", width: "100%", borderRadius: 10 }
              ]}
            />
            <Text style={styles.setAReminderTitle}>Set A Reminder</Text>
            {navigation.state.routeName !== "Profile" && (
              <Text style={styles.habit}>
                On average, habits take 66 days to form. To help keep you on
                track, set a daily reminder notification. You can turn this off
                at anytime.
              </Text>
            )}
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
              }}
            >
              <LinearGradient
<<<<<<< HEAD
                start={{ x: 0, y: 0 }}
                end={{ x: 0, y: 1 }}
                colors={[
                  globalStyles.blueGradientColor.start.color,
                  globalStyles.blueGradientColor.end.color
                ]}
=======
              start={{ x: 0, y: 0 }}
              end={{ x: 0, y: 1 }}
                colors={["#A4E8FF", "#6BCCFD"]}
>>>>>>> add Loading Component with animation
                style={[
                  StyleSheet.absoluteFill,
                  {
                    height: "100%",
                    width: "100%",
                    borderRadius: 20,
                    padding: 20
                  }
                ]}
              />
              <Text style={styles.setReminder}>Set Reminder</Text>
            </TouchableOpacity>
            {navigation.state.routeName !== "Profile" && (
              <TouchableOpacity
                activeOpacity={0.6}
                onPress={() => {
                  this.setModalVisible(!this.state.modalVisible);
                  navigation.navigate("DashBoard");
                }}
              >
                <Text style={styles.skip}>Skip</Text>
              </TouchableOpacity>
            )}
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
              <Text>{moment(this.state.chosenDate).format("LT")}</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    );
  }
}

SetAReminder.propTypes = {};

export default SetAReminder;
