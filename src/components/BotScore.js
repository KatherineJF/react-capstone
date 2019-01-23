import React, { Component } from "react";
import PropTypes from "prop-types";
import "./BotScore.css";
import ReactSpeedometer from "react-d3-speedometer";
import {
  TwitterTimelineEmbed,
  TwitterShareButton,
  TwitterFollowButton,
  TwitterHashtagButton,
  TwitterMentionButton,
  TwitterTweetEmbed,
  TwitterMomentShare,
  TwitterDMButton,
  TwitterVideoEmbed,
  TwitterOnAirButton
} from "react-twitter-embed";

const BotScore = props => {
  return (
    <a href={`https://twitter.com/${props.screen_name}`} className="card">
      <img className="card-img-top" src={props.profile_url} alt="profile pic" />

      <div className="h4">
        <h5 className="hr">{props.screen_name}</h5>
        <ReactSpeedometer
          width={150}
          height={150}
          minValue={0}
          maxValue={5}
          startColor="#00ff2e"
          endColor="#ff0000"
          value={props.bot_score}
        />
        <div>
          <TwitterTimelineEmbed
            sourceType="profile"
            screenName={props.screen_name}
            options={{ height: 400 }}
          />
        </div>
      </div>
    </a>
  );
};

BotScore.propTypes = {
  bot_score: PropTypes.float,
  profile_url: PropTypes.string,
  screen_name: PropTypes.string
};

export default BotScore;
