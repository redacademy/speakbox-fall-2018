import React, { Component, Fragment } from "react";
import { Text, View, TouchableOpacity, StyleSheet } from "react-native";
import LinearGradient from "react-native-linear-gradient";
import globalStyles from "../../config/styles";
import styles from "./styles";
import getAPI from "../../config/api";

export default class Graph extends Component {
  constructor() {
    super();
    this.state = {
      bar: {},
      weekBar: [],
      joy: true,
      sadness: true,
      comfort: true,
      fear: true,
      esteem: true,
      shame: true,
      anger: true,
      calmness: true,
      dayToWeek: true
    };
  }
  componentDidMount() {
    this.callAPI();
    this.makeWeeklyData();
  }

  callAPI = async values => {
    const response = await getAPI("/emotional-map", {
      method: "GET",
      headers: {
        Authorization: `Bearer${[token]}`
      },
      body: JSON.stringify(values)
    });
    this.setState({ bar: response });
  };

  makeWeeklyData = () => {
    let newWeeklyData = [];
    for (let i = 1; i <= 8; i++) {
      newWeeklyData.push(this.getRandomNumber(10));
    }
    this.setState({ weekBar: newWeeklyData });
  };

  getRandomNumber = max => {
    return Math.ceil(Math.random() * max);
  };

  generateButtons = () => {
    let allButtons = [];
    for (let i = 1; i <= 8; i++) {
      allButtons.push(
        <TouchableOpacity
          key={i}
          activeOpacity={0.6}
          style={[
            styles.graphButton,
            i === 1
              ? this.state.joy
                ? { backgroundColor: "#78D3FD" }
                : { backgroundColor: "#F3F0EC" }
              : i === 2
              ? this.state.sadness
                ? { backgroundColor: "#D0C4ED" }
                : { backgroundColor: "#F3F0EC" }
              : i === 3
              ? this.state.comfort
                ? { backgroundColor: "#FEC1C2" }
                : { backgroundColor: "#F3F0EC" }
              : i === 4
              ? this.state.fear
                ? { backgroundColor: "#FFEDC3" }
                : { backgroundColor: "#F3F0EC" }
              : i === 5
              ? this.state.esteem
                ? { backgroundColor: "#B2EDD2" }
                : { backgroundColor: "#F3F0EC" }
              : i === 6
              ? this.state.shame
                ? { backgroundColor: "#FFCAF8" }
                : { backgroundColor: "#F3F0EC" }
              : i === 7
              ? this.state.anger
                ? { backgroundColor: "#C9E0F1" }
                : { backgroundColor: "#F3F0EC" }
              : i === 8 && this.state.calmness
              ? { backgroundColor: "#C6CACC" }
              : { backgroundColor: "#F3F0EC" }
          ]}
          onPress={() => {
            i === 1
              ? this.setState({ joy: !this.state.joy })
              : i === 2
              ? this.setState({ sadness: !this.state.sadness })
              : i === 3
              ? this.setState({ comfort: !this.state.comfort })
              : i === 4
              ? this.setState({ fear: !this.state.fear })
              : i === 5
              ? this.setState({ esteem: !this.state.esteem })
              : i === 6
              ? this.setState({ shame: !this.state.shame })
              : i === 7
              ? this.setState({ anger: !this.state.anger })
              : i === 8 && this.setState({ calmness: !this.state.calmness });
          }}
        >
          {i === 1 ? (
            <Text style={styles.graphButtonText}>Joy</Text>
          ) : i === 2 ? (
            <Text style={styles.graphButtonText}>Sadness</Text>
          ) : i === 3 ? (
            <Text style={styles.graphButtonText}>Comfort</Text>
          ) : i === 4 ? (
            <Text style={styles.graphButtonText}>Fear</Text>
          ) : i === 5 ? (
            <Text style={styles.graphButtonText}>Esteem</Text>
          ) : i === 6 ? (
            <Text style={styles.graphButtonText}>Shame</Text>
          ) : i === 7 ? (
            <Text style={styles.graphButtonText}>Anger</Text>
          ) : (
            i === 8 && <Text style={styles.graphButtonText}>Calmness</Text>
          )}
        </TouchableOpacity>
      );
    }
    return allButtons;
  };

  render() {
    return (
      <Fragment>
        {this.state.bar.data !== undefined && (
          <View style={styles.container}>
            <View style={styles.graphTitleContainer}>
              <TouchableOpacity
                activeOpacity={0.6}
                style={
                  this.state.dayToWeek
                    ? styles.graphTitleButton
                    : styles.graphTitleButtonHide
                }
                onPress={() => {
                  this.setState({
                    dayToWeek: !this.state.dayToWeek
                  });
                }}
              >
                {this.state.dayToWeek && (
                  <LinearGradient
                    start={{ x: 0, y: 0 }}
                    end={{ x: 0, y: 1 }}
                    colors={[
                      globalStyles.pinkGradientColor.start.color,
                      globalStyles.pinkGradientColor.end.color
                    ]}
                    style={[
                      StyleSheet.absoluteFill,
                      styles.gradient
                    ]}
                  />
                )}
                <Text style={styles.graphTitle}>Today</Text>
              </TouchableOpacity>
              <TouchableOpacity
                activeOpacity={0.6}
                style={
                  !this.state.dayToWeek
                    ? styles.graphTitleButton
                    : styles.graphTitleButtonHide
                }
                onPress={() => {
                  this.setState({
                    dayToWeek: !this.state.dayToWeek
                  });
                }}
              >
                {!this.state.dayToWeek && (
                  <LinearGradient
                    start={{ x: 0, y: 0 }}
                    end={{ x: 0, y: 1 }}
                    colors={[
                      globalStyles.pinkGradientColor.start.color,
                      globalStyles.pinkGradientColor.end.color
                    ]}
                    style={[
                      StyleSheet.absoluteFill,
                      styles.gradient
                    ]}
                  />
                )}
                <Text style={styles.graphTitle}>This Week</Text>
              </TouchableOpacity>
            </View>
            <View style={styles.graphContainer}>
              <View style={styles.rating}>
                <Text style={styles.ratingNumber}>10</Text>
                <Text style={styles.ratingNumber}>5</Text>
                <Text style={styles.ratingNumber}>0</Text>
              </View>
              <View style={styles.barContainer}>
                <View
                  style={
                    this.state.joy
                      ? [
                          styles.bar,
                          this.state.dayToWeek
                            ? {
                                height: `${this.state.bar.data.joy}0%`,
                                backgroundColor: "#78D3FD"
                              }
                            : {
                                height: `${this.state.weekBar[0]}0%`,
                                backgroundColor: "#78D3FD"
                              }
                        ]
                      : styles.barHide
                  }
                />
                <View
                  style={
                    this.state.sadness
                      ? [
                          styles.bar,
                          this.state.dayToWeek
                            ? {
                                height: `${this.state.bar.data.sadness}0%`,
                                backgroundColor: "#D0C4ED"
                              }
                            : {
                                height: `${this.state.weekBar[1]}0%`,
                                backgroundColor: "#D0C4ED"
                              }
                        ]
                      : styles.barHide
                  }
                />
                <View
                  style={
                    this.state.comfort
                      ? [
                          styles.bar,
                          this.state.dayToWeek
                            ? {
                                height: `${this.state.bar.data.comfort}0%`,
                                backgroundColor: "#FEC1C2"
                              }
                            : {
                                height: `${this.state.weekBar[2]}0%`,
                                backgroundColor: "#FEC1C2"
                              }
                        ]
                      : styles.barHide
                  }
                />
                <View
                  style={
                    this.state.fear
                      ? [
                          styles.bar,
                          this.state.dayToWeek
                            ? {
                                height: `${this.state.bar.data.fear}0%`,
                                backgroundColor: "#FFEDC3"
                              }
                            : {
                                height: `${this.state.weekBar[3]}0%`,
                                backgroundColor: "#FFEDC3"
                              }
                        ]
                      : styles.barHide
                  }
                />
                <View
                  style={
                    this.state.esteem
                      ? [
                          styles.bar,
                          this.state.dayToWeek
                            ? {
                                height: `${this.state.bar.data.esteem}0%`,
                                backgroundColor: "#B2EDD2"
                              }
                            : {
                                height: `${this.state.weekBar[4]}0%`,
                                backgroundColor: "#B2EDD2"
                              }
                        ]
                      : styles.barHide
                  }
                />
                <View
                  style={
                    this.state.shame
                      ? [
                          styles.bar,
                          this.state.dayToWeek
                            ? {
                                height: `${this.state.bar.data.shame}0%`,
                                backgroundColor: "#FFCAF8"
                              }
                            : {
                                height: `${this.state.weekBar[5]}0%`,
                                backgroundColor: "#FFCAF8"
                              }
                        ]
                      : styles.barHide
                  }
                />
                <View
                  style={
                    this.state.anger
                      ? [
                          styles.bar,
                          this.state.dayToWeek
                            ? {
                                height: `${this.state.bar.data.anger}0%`,
                                backgroundColor: "#C9E0F1"
                              }
                            : {
                                height: `${this.state.weekBar[6]}0%`,
                                backgroundColor: "#C9E0F1"
                              }
                        ]
                      : styles.barHide
                  }
                />
                <View
                  style={
                    this.state.calmness
                      ? [
                          styles.bar,
                          this.state.dayToWeek
                            ? {
                                height: `${this.state.bar.data.calmness}0%`,
                                backgroundColor: "#C6CACC"
                              }
                            : {
                                height: `${this.state.weekBar[7]}0%`,
                                backgroundColor: "#C6CACC"
                              }
                        ]
                      : styles.barHide
                  }
                />
              </View>
            </View>

            <View style={styles.graphButtonContainer}>
              {this.generateButtons()}
            </View>
          </View>
        )}
      </Fragment>
    );
  }
}
