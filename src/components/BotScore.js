import React, { Component } from "react";
import PropTypes from "prop-types";
import ReactSpeedometer from "react-d3-speedometer";

const BotScore = props => {
  return (
    <div class="contact-section">
      <div className="contact-section .card">
        <img
          className="card-img-top"
          src={props.profile_url}
          alt="profile pic"
        />
        <div className=".contact-section .card h4">
          <h5 className="contact-section .card hr">{props.screen_name}</h5>
          <h4 className="contact-section .card hr">{props.bot_score}</h4>
        </div>
      </div>
    </div>
  );
};

// and just use it

BotScore.propTypes = {
  bot_score: PropTypes.float,
  profile_url: PropTypes.string,
  screen_name: PropTypes.string
};

export default BotScore;
