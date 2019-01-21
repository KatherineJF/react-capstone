import React, { Component } from "react";
import PropTypes from "prop-types";

const BotScore = props => {
  return (
    <div class="contact-section">
      <div className="contact-section .card">
        <img
          className="card-img-top"
          src={props.profile_url}
          alt="profile pic"
        />
        <div className="card-body">
          <h5 className="card-title">{props.screen_name}</h5>
          <h4 className="card-title">{props.bot_score}</h4>
        </div>
      </div>
    </div>
  );
};
BotScore.propTypes = {
  bot_score: PropTypes.float,
  profile_url: PropTypes.string,
  screen_name: PropTypes.string
};

export default BotScore;
