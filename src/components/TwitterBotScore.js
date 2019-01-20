import React from "react";
import "./TwitterBotScore.css";
import PropTypes from "prop-types";

const TwitterBotScore = props => {
  return (
    <div class="container">
      <div className="card">
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

TwitterBotScore.propTypes = {
  screen_name: PropTypes.string,
  bot_score: PropTypes.integer,
  profile_url: PropTypes.string
};

export default TwitterBotScore;
