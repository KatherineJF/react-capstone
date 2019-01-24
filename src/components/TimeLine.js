import React, { Component } from "react";
import axios from "axios";
import { Button, Container, Row, Col } from "reactstrap";
import ReactDOM from "react-dom";
import BotScore from "./BotScore";
import logo from "./logo.svg";
import StackGrid from "react-stack-grid";
import RobotWar from "./RobotWar.jpg";
import "./TimeLine.css";
import ReactSpeedometer from "./SpeedoButton";
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

const URL = "http://127.0.0.1:8000/check_account/";
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
    this.setState({
      isLoading: true
    });
    axios
      .get(`${URL}?twitter_user=${this.state.twitter_user}`, {
        withCredentials: true
      })
      // .then(res => res.json())
      .then(
        result => {
          console.log(result);
          this.setState({
            isLoading: false,
            tweets: [result.data]
          });
        },
        error => {
          this.setState({
            isLoading: true,
            error
          });
        }
      );
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

    // const boardList = this.state.cards.map(card => {
    //   console.log(card.id);
    //   return (
    //     <Card {...card} key={card.id} removeCardCallback={this.removeCard} />
    //   );
    // });

    const botscore = this.state.tweets.map(score => {
      console.log(score, "this is the score object");
      return <BotScore {...score} key={score.screen_name} />;
    });

    return (
      <Container>
        <p>Bot or Not?</p>
        <div />
        <div class="signup-section">
          <form name="twitter_user" onSubmit={this.onSubmitHandler}>
            <label style={{ color: "white" }}>
              Check Twitter handle @:
              <input
                type="text"
                name="name"
                value={this.state.value}
                onChange={this.onChange}
              />
            </label>
            <Button bsStyle="info" type="submit" value="submit">
              Submit
            </Button>
          </form>
          <form name="twitter_user" onSubmit={this.onSubmitHandlerMulti}>
            <label style={{ color: "white" }}>
              Follow Bots? Check @:
              <input
                type="text"
                name="name"
                value={this.state.value}
                onChange={this.onChangeMulti}
              />
            </label>
            <Button bsStyle="info" type="submit" value="submit">
              Submit
            </Button>
          </form>
        </div>

        {isLoading === true ? (
          <div>
            {<img src={logo} className="App-logo" alt="logo" />}
            <p>Loading</p>
            <p> Computing Score</p>
          </div>
        ) : (
          <div className="botscores">{botscore}</div>
        )}
      </Container>
    );
  }
}

// <div class="container">
//   {isLoading !== true && <img src={RobotWar} alt="war" />}
// </div>

export default TimeLine;

//             // <div class="jumbotron">
//               // <div class="container">
//               //   <h1 class="display-3">Do I Follow People or Bots?</h1>
//               //   {tweetstack}
//               //   <form name="twitter_user" onSubmit={this.onSubmitHandlerMulti}>
//               //     <div>
//               //       <label>
//               //         Follow Bots?:
//               //         <input
//               //           type="text"
//               //           name="name"
//               //           value={this.state.value}
//               //           onChange={this.onChangeMulti}
//               //         />
//               //       </label>
//               //       <Button bsStyle="info" type="submit" value="submit">
//               //         Twitter User
//               //       </Button>
//               //     </div>
//               //   </form>
//           //     </div>
//           //   </div>
//           // </main>
//
//       //     <footer class="container">
//       //       <p>© Company 2017-2018</p>
//       //     </footer>
//       //   </div>
//       // </Container>
//
//       // <Row>
//       //   <div className="App">
//       //     <Col xs="10">{tweetstack}</Col>
//       //     <form name="twitter_user" onSubmit={this.onSubmitHandler}>
//       //       <div>
//       //         <label>
//       //           Bot or Not?:
//       //           <input
//       //             type="text"
//       //             name="name"
//       //             value={this.state.value}
//       //             onChange={this.onChange}
//       //           />
//       //         </label>
//       //         <Button bsStyle="info" type="submit" value="submit">
//       //           Twitter User
//       //         </Button>
//       //       </div>
//       //     </form>
//       //
//       //     <form name="twitter_user" onSubmit={this.onSubmitHandlerMulti}>
//       //       <div>
//       //         <label>
//       //           Follow Bots?:
//       //           <input
//       //             type="text"
//       //             name="name"
//       //             value={this.state.value}
//       //             onChange={this.onChangeMulti}
//       //           />
//       //         </label>
//       //         <Button bsStyle="info" type="submit" value="submit">
//       //           Twitter User
//       //         </Button>
//       //       </div>
//       //     </form>
//       //   </div>
//       // </Row>
//       //
//     );
//   }
// }
