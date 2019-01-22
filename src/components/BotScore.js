import React, { Component } from "react";
import PropTypes from "prop-types";
import "./BotScore.css";

const BotScore = props => {
  return (
    // <div class="card">
    //     <div class="box">
    //         <div class="img">
    //             <img src="https://www.planwallpaper.com/static/images/cool-wallpaper-5_G6Qe1wU.jpg">
    //         </div>
    //         <h2>Prakash Prajapati<br><span>Web Graphic Designer</span></h2>
    //         <p> Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
    //                 tempor incididunt ut labore et.</p>
    //         <span>
    //             <ul>
    //                 <li><a href="#"><i class="fa fa-facebook" aria-hidden="true"></i></a></li>
    //                 <li><a href="#"><i class="fa fa-twitter" aria-hidden="true"></i></a></li>
    //                 <li><a href="#"><i class="fa fa-google-plus" aria-hidden="true"></i></a></li>
    //                 <li><a href="#"><i class="fa fa-linkedin" aria-hidden="true"></i></a></li>
    //                 <li><a href="#"><i class="fa fa-instagram" aria-hidden="true"></i></a></li>
    //             </ul>
    //         </span>
    //     </div>
    // </div>
    //

    <div class="card">
      <div className="box">
        <img className="img" src={props.profile_url} alt="profile pic" />

        <h5>{props.screen_name}</h5>
        <h4>{props.bot_score}</h4>
        <span>
          <ul>
            <li>
              <a href="#">
                <i class="fa fa-twitter" aria-hidden="true" />
              </a>
            </li>
          </ul>
        </span>
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
