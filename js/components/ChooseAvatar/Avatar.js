import React, { Component, Fragment } from "react";
import PropTypes from "prop-types";
import {
  Image
} from "react-native";

export default class Avatar extends Component {
  render() {
    const { avatar, style } = this.props;
    return (
      <Fragment>
        <Image style={style} source={avatar} />
      </Fragment>
    );
  }
}
