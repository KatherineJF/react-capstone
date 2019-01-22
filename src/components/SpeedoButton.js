import React, { Component } from "react";
// import ReactSpeedometer from "../index";
import PropTypes from "prop-types";
import ReactSpeedometer from "react-d3-speedometer";

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

    this.values = [
      {
        value: 0,
        startColor: "blue",
        segments: 5,
        width: 300,
        height: 300,
        maxValue: 5
      },
      {
        value: 222,
        startColor: "orange",
        segments: 5,
        width: 400,
        height: 400
      }
    ];
  }

  render() {
    return (
      <div>
        <h4>
          Click the below button to force rerendering the whole component on
          props change. By default, on props change, only the speedometer
          value/needle value will be updated and animated for smooth
          visualization. Below button will toggle between two sets of totally
          different appearances, when forceRender option is given true.
        </h4>

        <button
          onClick={() => {
            // change the toggle status
            this.setState({
              toggleStatus: !this.state.toggleStatus
            });
            // now set the new set of values
            let new_values = this.state.toggleStatus
              ? this.values[0]
              : this.values[1];

            this.setState(new_values);
            console.log(this.state.values[0]);
          }}
        >
          <strong>Force Re render component on props change</strong>
        </button>
        <ReactSpeedometer
          maxValue={5}
          value={this.state.bot_score}
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

export default SpeedoButton;
