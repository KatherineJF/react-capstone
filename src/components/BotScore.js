import React, { Component } from "react";
import PropTypes from "prop-types";

const BotScore = props => {
  const { screen_name, profile_url, bot_score } = props;

  return (
    <p>
      {props.screen_name}
      {props.profile_url}
      {props.bot_score}
    </p>
  );
};

BotScore.propTypes = {
  screen_name: PropTypes.string,
  profile_url: PropTypes.string,
  bot_score: PropTypes.number
};

export default BotScore;
