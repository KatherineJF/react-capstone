import React, { Component } from "react";
import axios from "axios";
import { Button } from "react-bootstrap";
// import Tweet from './Tweet';
// import PropTypes from 'prop-types';
// axios.defaults.xsrfCookieName = 'csrftoken'
// axios.defaults.xsrfHeaderName = 'X-CSRFToken'

const URL = "http://127.0.0.1:8000/check_account/";

class TimeLine extends Component {
  constructor(props) {
    super(props);
    this.state = {
      error: null,
      isLoaded: false,
      tweets: [],
      twitter_user: ""
    };
  }

  onSubmitHandler = event => {
    console.log("onSubmitHandler");
    event.preventDefault();
    this.singleBotScore();
  };

  onChange = event => {
    this.setState({
      twitter_user: event.target.value
    });
  };

  singleBotScore = () => {
    axios
      .get(`${URL}?twitter_user=${this.state.twitter_user}`, {
        withCredentials: true
      })
      // .then(res => res.json())
      .then(
        result => {
          console.log(result);
          this.setState({
            isLoaded: false,
            tweets: [result.data]
          });
        },
        error => {
          this.setState({
            isLoaded: true,
            error
          });
        }
      );
  };

  render() {
    const { error, isLoaded, tweets } = this.state;
    console.log("TWEETS");
    console.log(tweets);
    if (error) {
      return <div> Error: {error.message} </div>;
    } else if (isLoaded) {
      return <div> Loading... </div>;
    }
    const tweetstack = tweets.map(tweet => {
      return (
        <li key={tweet.screen_name}>
          {tweet.screen_name} {tweet.bot_score}
        </li>
      );
    });
    return (
      <div>
        {tweetstack}
        <form name="twitter_user" onSubmit={this.onSubmitHandler}>
          <div>
            <label>
              Bot or Not?:
              <input
                type="text"
                name="name"
                value={this.state.value}
                onChange={this.onChange}
              />
            </label>
            <Button bsStyle="info" type="submit" value="submit">
              Twitter User
            </Button>
          </div>
        </form>
      </div>
    );
  }
}

export default TimeLine;
