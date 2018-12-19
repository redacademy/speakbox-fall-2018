import React, { Component } from "react";
import {
  View,
  ScrollView,
  TouchableOpacity,
  Text,
  Image,
  ImageBackground,
  Slider,
  StyleSheet,
} from "react-native";
import getAPI from "../../config/api";
import { Form, Field } from "react-final-form";
import Slide from "./Slide";
import LinearGradient from "react-native-linear-gradient";
import styles from "./styles";
import globalStyles from "../../config/styles";

const faces = {
  face1: require("../../assets/Faces/awfulFace.png"),
  face2: require("../../assets/Faces/badFace.png"),
  face3: require("../../assets/Faces/okayFace.png"),
  face4: require("../../assets/Faces/goodFace.png"),
  face5: require("../../assets/Faces/greatFace.png")
};

export default class Checkin extends Component {
  constructor(props) {
    super(props);
    this.state = {
      addEmotions: false,
      sliderValue: 5
    };
  }

  slide = value => {
    this.setState({ sliderValue: value });
  };

  checkin = async values => {
    const response = await getAPI("/daily-checkins", {
      method: "POST",
      headers: {
        Authorization: `Bearer${[token]}`
      },
      body: JSON.stringify(values)
    });
  };

  render() {
    const { navigation } = this.props;
    return (
      <ImageBackground
        source={require("../../assets/Background/background-3.png")}
        style={styles.backgroundImage}
      >
        <ScrollView>
          <View style={!this.state.addEmotions && styles.checkinContainer}>
            <View style={styles.mainCheckin}>
              <Text style={styles.mainCheckinTitle}>How are you feeling?</Text>
              <Image
                style={styles.checkinFace}
                source={
                  this.state.sliderValue < 2
                    ? faces.face1
                    : (this.state.sliderValue > 2) &
                      (this.state.sliderValue < 4)
                    ? faces.face2
                    : (this.state.sliderValue > 4) &
                      (this.state.sliderValue < 6)
                    ? faces.face3
                    : (this.state.sliderValue > 6) &
                      (this.state.sliderValue < 8)
                    ? faces.face4
                    : this.state.sliderValue > 8 && faces.face5
                }
              />
              {this.state.sliderValue < 2 ? (
                <Text style={styles.checkinTitle}>Terrible</Text>
              ) : (this.state.sliderValue < 4) &
                (this.state.sliderValue > 2) ? (
                <Text style={styles.checkinTitle}>Bad</Text>
              ) : (this.state.sliderValue > 4) &
                (this.state.sliderValue < 6) ? (
                <Text style={styles.checkinTitle}>Okay</Text>
              ) : (this.state.sliderValue > 6) &
                (this.state.sliderValue < 8) ? (
                <Text style={styles.checkinTitle}>Good</Text>
              ) : (
                this.state.sliderValue > 8 && (
                  <Text style={styles.checkinTitle}>Great</Text>
                )
              )}
              <Slider
                style={styles.checkinSlider}
                maximumValue={10}
                minimumValue={0}
                minimumTrackTintColor={globalStyles.blueGradientColor.end.color}
                maximumTrackTintColor={
                  globalStyles.blueGradientColor.start.color
                }
                value={this.state.sliderValue}
                onValueChange={value => this.slide(value)}
              />
            </View>
            <View style={styles.addEmotionsContainer}>
              <TouchableOpacity
                onPress={() => {
                  this.setState({ addEmotions: !this.state.addEmotions });
                }}
              >
                <Text style={styles.mainCheckinTitle}>Add Emotions</Text>
                <Image
                  style={
                    this.state.addEmotions ? styles.arrowUp : styles.arrowDown
                  }
                  source={require("../../assets//Icons/Triangle.png")}
                />
              </TouchableOpacity>
            </View>
            {this.state.addEmotions ? (
              <Form
                onSubmit={values => this.checkin(values)}
                render={({ handleSubmit, pristine, invalid, values }) => (
                  <View style={styles.formContainer}>
                    <Field
                      name="joy"
                      render={({ input, meta }) => {
                        return <Slide id={1} input={input} />;
                      }}
                    />
                    <Field
                      name="sadness"
                      render={({ input, meta }) => {
                        return <Slide id={2} input={input} />;
                      }}
                    />
                    <Field
                      name="comfort"
                      render={({ input, meta }) => {
                        return <Slide id={3} input={input} />;
                      }}
                    />
                    <Field
                      name="fear"
                      render={({ input, meta }) => {
                        return <Slide id={4} input={input} />;
                      }}
                    />
                    <Field
                      name="esteem"
                      render={({ input, meta }) => {
                        return <Slide id={5} input={input} />;
                      }}
                    />
                    <Field
                      name="shame"
                      render={({ input, meta }) => {
                        return <Slide id={6} input={input} />;
                      }}
                    />
                    <Field
                      name="anger"
                      render={({ input, meta }) => {
                        return <Slide id={7} input={input} />;
                      }}
                    />
                    <Field
                      name="calmness"
                      render={({ input, meta }) => {
                        return <Slide id={8} input={input} />;
                      }}
                    />
                    <TouchableOpacity
                      activeOpacity={0.6}
                      style={styles.submitButton}
                      onPress={() => {
                        handleSubmit();
                        navigation.navigate("DashBoard");
                      }}
                    >
                      <LinearGradient
                        start={{ x: 0, y: 0 }}
                        end={{ x: 0, y: 1 }}
                        colors={[
                          globalStyles.blueGradientColor.start.color,
                          globalStyles.blueGradientColor.end.color
                        ]}
                        style={[
                          StyleSheet.absoluteFill,
                          styles.gradient
                        ]}
                      />
                      <Text style={styles.submit}>Submit</Text>
                    </TouchableOpacity>
                  </View>
                )}
              />
            ) : (
              <TouchableOpacity
                activeOpacity={0.6}
                style={styles.submitButton}
                onPress={() => {
                  navigation.navigate("DashBoard");
                }}
              >
                <LinearGradient
                  start={{ x: 0, y: 0 }}
                  end={{ x: 0, y: 1 }}
                  colors={[
                    globalStyles.blueGradientColor.start.color,
                    globalStyles.blueGradientColor.end.color
                  ]}
                  style={[
                    StyleSheet.absoluteFill,
                    styles.gradient
                  ]}
                />
                <Text style={styles.submit}>Submit</Text>
              </TouchableOpacity>
            )}
          </View>
        </ScrollView>
      </ImageBackground>
    );
  }
}
