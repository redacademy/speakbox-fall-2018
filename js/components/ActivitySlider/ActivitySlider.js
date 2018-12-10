import React from "react";
import { View, Slider } from "react-native";
import styles from "./styles";

export default class ActivitySlider extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: 5
    };
  }

  change(value) {
    this.setState(() => {
      return {
        value: parseFloat(value)
      };
    });
  }

  render() {
    const { value } = this.state;
    return (
      <View style={styles.container}>
        <Slider
          step={1}
          maximumValue={5}
          minimumValue={1}
          maximumTrackTintColor={"#FFB5BA"}
          minimumTrackTintColor={"#A4E8FF"}
          onValueChange={this.change.bind(this)}
          value={3}
        />
      </View>
    );
  }
}
