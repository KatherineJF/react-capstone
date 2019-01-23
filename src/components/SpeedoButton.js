import React, { Component } from "react";
// import ReactSpeedometer from "../index";
import PropTypes from "prop-types";
import ReactSpeedometer from "react-d3-speedometer";
import BotScore from "./BotScore";

// a custom button with state to demonstrate force rendering
class SpeedoButton extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      toggleStatus: false,
      value: 0,
      startColor: "blue",
      segments: 5,
      width: 300,
      height: 300
    };
  }

  render() {
    return (
      <div>
        <ReactSpeedometer
          maxValue={5}
          value={this.props.bot_score}
          startColor={this.state.startColor}
          forceRender={true}
          segments={this.state.segments}
          width={this.state.width}
          height={this.state.height}
        />
      </div>
    );
  }
}

SpeedoButton.propTypes = {
  bot_score: PropTypes.float
};

export default SpeedoButton;
