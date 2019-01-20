import React, { Component } from "react";

const TwitterBotScore = props => {
  return (
    <p>
      {props.screen_name} Twitter Bot Scsore is {props.bot_score}
      <img src={props.profile_url} />
    </p>
  );
};

export default TwitterBotScore;
