import React, { Component } from "react";
import axios from "axios";

import { Button, Container, Row, Col } from "reactstrap";
// import Tweet from './Tweet';
// import PropTypes from 'prop-types';
// axios.defaults.xsrfCookieName = 'csrftoken'
// axios.defaults.xsrfHeaderName = 'X-CSRFToken'

const URL = "http://127.0.0.1:8000/check_account/";
const URL2 = "http://127.0.0.1:8000/check_account_in/";

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
  multiBotScore = () => {
    axios
      .get(`${URL2}?twitter_user=${this.state.twitter_user}`, {
        withCredentials: true
      })
      // .then(res => res.json())
      .then(
        result => {
          console.log(result);
          this.setState({
            isLoaded: false,
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
      <Container>
        <head />
        <div class="container">
          <div class="row">
            <div class="col-md-4" />

            <h2>Heading</h2>
            <p>
              Donec sed odio dui. Cras justo odio, dapibus ac facilisis in,
              egestas eget quam. Vestibulum id ligula porta felis euismod
              semper. Fusce dapibus, tellus ac cursus commodo, tortor mauris
              condimentum nibh, ut fermentum massa justo sit amet risus.
            </p>
          </div>
        </div>
        <div>
          <main>
            <div class="jumbotron">
              <div class="container">
                <h1 class="display-3">Bot or Not?</h1>
                {tweetstack}
                <form name="twitter_user" onSubmit={this.onSubmitHandler}>
                  <div>
                    <label>
                      Check Twitter handle:
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
        </div>
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
