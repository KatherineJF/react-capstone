import React, { Component } from "react";
import axios from "axios";
import { Button, Container, Row, Col } from "reactstrap";
import ReactDOM from "react-dom";
import TwitterBotScore from "./TwitterBotScore";
import logo from "./logo.svg";
import StackGrid from "react-stack-grid";

// import "snapsvg-cjs";
// import Snap from "snapsvg-cjs";
// import Snap from "imports-loader?this=>window,fix=>module.exports=0!snapsvg/dist/snap.svg.js";
// import ReactSnap from "react-snap-svg";

// ReactDOM.render(
//   <ReactSnap>
//     {s => {
//       s.circle(150, 150, 100);
//     }}
//   </ReactSnap>
// );
// import Tweet from './Tweet';
// import PropTypes from 'prop-types';
// axios.defaults.xsrfCookieName = 'csrftoken'
// axios.defaults.xsrfHeaderName = 'X-CSRFToken'

const URL2 = "http://127.0.0.1:8000/check_account_in/";

class TimeLine extends Component {
  constructor(props) {
    super(props);
    this.state = {
      error: null,
      isLoading: false,
      tweets: [],
      twitter_user: ""
    };
  }

  onSubmitHandlerMulti = event => {
    console.log("onSubmitHandler");
    event.preventDefault();
    this.multiBotScore();
  };

  onChangeMulti = event => {
    this.setState({
      twitter_user: event.target.value
    });
  };

  multiBotScore = () => {
    this.setState({
      isLoading: true
    });

    axios
      .get(`${URL2}?twitter_user=${this.state.twitter_user}`, {
        withCredentials: true
      })
      // .then(res => res.json())
      .then(
        result => {
          console.log(result);
          this.setState({
            isLoading: false,
            tweets: result.data
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
    const { error, isLoading, tweets } = this.state;
    console.log("TWEETS");
    console.log(tweets);
    if (error) {
      return <div> Error: {error.message} </div>;
    }

    const tweetstack = tweets.map(tweet => {
      // return (
      //   <li key={tweet.screen_name}>
      //     {tweet.screen_name} {tweet.bot_score}
      //   </li>
      // );
      return (
        <TwitterBotScore
          key={tweet.screen_name}
          bot_score={tweet.bot_score}
          screen_name={tweet.screen_name}
          profile_url={tweet.profile_url}
        />
      );
    });
    return (
      <Container>
        {isLoading === true && (
          <div>
            {<img src={logo} className="App-logo" alt="logo" />}
            <p>Loading</p>
            <p> Computing Score</p>
          </div>
        )}
        <head />
        <main>
          <div>
            <StackGrid columnWidth={400}>{tweetstack}</StackGrid>
          </div>

          <div class="jumbotron">
            <div class="container">
              <h1 class="display-3">Do I Follow People or Bots?</h1>
              {tweetstack}
              <form name="twitter_user" onSubmit={this.onSubmitHandlerMulti}>
                <div>
                  <label>
                    Follow Bots?:
                    <input
                      type="text"
                      name="name"
                      value={this.state.value}
                      onChange={this.onChangeMulti}
                    />
                  </label>
                  <Button bsStyle="info" type="submit" value="submit">
                    Twitter User
                  </Button>
                </div>
              </form>
            </div>
          </div>
        </main>

        <footer class="container">
          <p>© Company 2017-2018</p>
        </footer>
      </Container>

      // <Row>
      //   <div className="App">
      //     <Col xs="10">{tweetstack}</Col>
      //     <form name="twitter_user" onSubmit={this.onSubmitHandler}>
      //       <div>
      //         <label>
      //           Bot or Not?:
      //           <input
      //             type="text"
      //             name="name"
      //             value={this.state.value}
      //             onChange={this.onChange}
      //           />
      //         </label>
      //         <Button bsStyle="info" type="submit" value="submit">
      //           Twitter User
      //         </Button>
      //       </div>
      //     </form>
      //
      //     <form name="twitter_user" onSubmit={this.onSubmitHandlerMulti}>
      //       <div>
      //         <label>
      //           Follow Bots?:
      //           <input
      //             type="text"
      //             name="name"
      //             value={this.state.value}
      //             onChange={this.onChangeMulti}
      //           />
      //         </label>
      //         <Button bsStyle="info" type="submit" value="submit">
      //           Twitter User
      //         </Button>
      //       </div>
      //     </form>
      //   </div>
      // </Row>
      //
    );
  }
}

export default TimeLine;
