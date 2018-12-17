import React, { Component } from "react";
import { View, Text, Slider } from "react-native";
import styles from "./styles";
import globalStyles from "../../config/styles";

export default class Slide extends Component {
  constructor(props) {
    super(props);
    this.state = {
      slideValue: 0
    };
  }

  createRange(min, max) {
    const range = [];
    for (let index = min; index <= max; index++) {
      range.push(index);
    }
    return range;
  }

  render() {
    const { id, input } = this.props;
    return (
      <View style={styles.slideContainer}>
        {id === 1 ? (
          <Text style={styles.checkinTitle}>Joy</Text>
        ) : id === 2 ? (
          <Text style={styles.checkinTitle}>Sadness</Text>
        ) : id === 3 ? (
          <Text style={styles.checkinTitle}>Fear</Text>
        ) : id === 4 ? (
          <Text style={styles.checkinTitle}>Comfort</Text>
        ) : id === 5 ? (
          <Text style={styles.checkinTitle}>Shame</Text>
        ) : id === 6 ? (
          <Text style={styles.checkinTitle}>Esteem</Text>
        ) : id === 7 ? (
          <Text style={styles.checkinTitle}>Anger</Text>
        ) : (
          id === 8 && <Text style={styles.checkinTitle}>Calmness</Text>
        )}
        <Slider
          {...input}
          maximumValue={10}
          minimumValue={0}
          minimumTrackTintColor={globalStyles.blueGradientColor.end.color}
          maximumTrackTintColor={globalStyles.blueGradientColor.start.color}
          value={parseInt(input.value)}
          onSlidingComplete={value => {
            let roundedValue = Math.round(parseInt(value));
            input.onChange(roundedValue);
            this.setState({ slideValue: roundedValue });
          }}
        />
        <View style={styles.rating}>
          {this.createRange(0, 10).map((number, index) => {
            return (
              <Text
              key={index}
                style={
                  this.state.slideValue === number
                    ? styles.highlight
                    : styles.noHighlight
                }
              >
                {number}
              </Text>
            );
          })}
        </View>
      </View>
    );
  }
}
