import React, { Component } from 'react';
import axios from 'axios';
// import Tweet from './Tweet';
// import PropTypes from 'prop-types';
// axios.defaults.xsrfCookieName = 'csrftoken'
// axios.defaults.xsrfHeaderName = 'X-CSRFToken'

const URL = "http://127.0.0.1:8000/timeline/";
class TimeLine extends Component {

  constructor(props){
    super(props);
    this.state = {
      error: null,
      isLoaded: false,
      tweets: []
    };
  }


// componentDidMount() {
//     fetch('https://jsonplaceholder.typicode.com/photos')
//     .then(response => {
//          const data = response.json();
//          this.setState({
//              data: data,
//          });
//     );


    componentDidMount () {
         axios.get(`URL?twitter_user=${this.state.twitter_user}`, {withCredentials: true})
            // .then(res => res.json())
            .then (result => {
              console.log(result)
                this.setState({
                  isLoaded: false,
                  tweets: result.data
                });
              },
              (error) => {
                this.setState({
                  isLoaded:true,
                  error
                });
              }
            )
          }


          render() {
             const { error, isLoaded, tweets} = this.state;
             console.log('TWEETS');
             console.log(tweets);
             if (error) {
               return<div>Error:{error.message}</div>;
             } else if (isLoaded) {
               return <div>Loading...</div>;
             } else {
               const tweetstack = tweets.map((tweet) => {
                 return (
                   <li key={tweet.id}>
                    {tweet.id}{tweet.text}
                   </li>
                 )
                 });
               return(
                   <ul>
                   { tweetstack }
                   </ul>
                 );
               }
           }
        }

export default TimeLine ;
        //     return (
        //
        //       <Tweet tweets={tweets}/>
        //     );
        //   }
        // }
        //
        // function TweetList({ tweets }) {
        //   return (
        //     <ul>
        //     {tweets.map(tweet =>
        //       <li key={tweet.id}>{tweet.text}</li>
        //     )}
        //     </ul>
        //   );
        // }
        //
        //




          // displayTweets = () => {
          // return this.state.tweets.map( (tweet) => {
          //   //console.log("printing movie",movie.title);
          //   return <Tweet
          //             id={tweet.id}
          //             text={tweet.text}
          //             source={tweet.source}
          //             screen_name={tweet.screen_name}
          //
          //           />
          // });
          // }
  //
  //   render() {
  //     return (
  //       <div>
  //
  //       <ul>
  //    {this.state.tweets && this.state.tweets.map(tweet => { return <Tweet />})}
  //  </ul>
  //
  //       </div>
  //
  //     )
  //   }
  // }


//
// const URL = "http://127.0.0.1:8000/timeline/";
//
// class TimeLine  extends Component {
//
//       state = {
//           loadedTimeline: null
//       }
//
//       componentDidUpdate () {
//
//                   ( axios.get(URL,{withCredentials: true})  )
//                       .then( response => {
//                           // console.log(response);
//                           this.setState( { loadedTimeline: response.data } );
//                       } );
//               }
//
//
//       render () {
//
//
//               let timeline = (
//                   <div className="Full Timeline">
//                       <h1>{this.state.loadedTimeline.id}</h1>
//                       <p>{this.state.loadedTimeline.text}</p>
//                       <div className="Edit">
//                           <button className="Delete">Delete</button>
//                       </div>
//                   </div>
//                 );
//
//             return timeline;
//         }
//     }
//   constructor(props){
//     super(props);
//
//     this.state = {
//       twitterList: [],
//       // text: "",
//       // created_at:"",
//       // id: "",
//       // source: "",
//     }
//   }
//
//   // handleSelectMovie = (id, title, imageUrl) => {
//   //   if (this.props.onSelectMovie) { //if onSelectMovie is defined then execute it
//   //     this.props.onSelectMovie(id, title, imageUrl);
//   //   }
//   // }
// //
// //   displayTimeline = () => {
// //   return this.state.timeLineList.map( (timeline) => {
// //     //console.log("printing movie",movie.title);
// //     return <TimeLine
// //               id={timeline.id}
// //               text={timeline.text}
// //               key={timeline.id}
// //             />
// //   });
// // }
// // isInLibrary={true}
// // onSelectMovie={this.handleSelectMovie}
//
//   componentDidMount() {
//     // console.log("The component did in fact mount");
//     //
//     //
//
//     axios.get(URL,{withCredentials: true})
//     .then (response => {
//       this.setState({twitterList: response.data});
//       console.log(response);
//     });
//
//       // const newTimeline = {
//       //   ...feed,
//       //   text: feed.text,
//       //   created_at:feed.created_at,
//       //   id: feed.id,
//       //   source: feed.source,
//       //
//       // };
//       // return newTimeline;
//
//       // console.log("in timeline axios.get", response);
//       // this.setState({
//       //   twitterList: timeline,
//       // });
//     }
//   //
//   //   .catch((error) => {
//   //     console.log(error.message)
//   //     this.setState({
//   //       error: error.message
//   //     });
//   //   });
//   // }
//
// //   const boardCards = response.data.map((cardData) =>{
// // return cardData['card']
// // });
//
//
//   render() {
//     const twitterLists = this.state.twitterList.map(twitterList => {
//       return <TimeLine />;
//     });
//     // const twitter = this.state.twitterList.map((feed) => {
//     //
//     // }
//
//
//
//
//     return (
//       <div>
//       <section>
//       {this.state.twitterList}
//
//       </section>
//       </div>
//
//     )
//   }
// }
//
// // RentalLibrary.propTypes = {
// //  onSelectMovie: PropTypes.func,
// // };
