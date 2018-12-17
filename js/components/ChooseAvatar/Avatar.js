import React, { Component } from "react";
import PropTypes from "prop-types";
import {
  Text,
  View,
  Modal,
  TouchableOpacity,
  StyleSheet,
  Image
} from "react-native";
import LinearGradient from "react-native-linear-gradient";
import globalStyles from "../../config/styles";
import styles from "./styles";

export default class Avatar extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { avatar, style } = this.props;
    return (
      <View>
        <Image style={style} source={avatar} />
      </View>
    );
  }
}
