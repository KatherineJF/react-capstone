import React from 'react';
import PropTypes from 'prop-types';



const Tweet = (props) => {

  return (
        <div>
          <p>{props.id}{props.text}{props.source}{props.screen_name}</p>
        </div>
      )
};

Tweet.propTypes = {
    id: PropTypes.number,
    text: PropTypes.string,
    source: PropTypes.string,
    screen_name: PropTypes.string,


}
export default Tweet ;
