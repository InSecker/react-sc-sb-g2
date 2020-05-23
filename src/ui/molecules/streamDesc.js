import React from "react";
import styled, { css } from "styled-components";
import PropTypes from "prop-types";
import Badge from "../atoms/Badge"


const StreamDescWrapper = styled.div`
  width: 100%;
  .streamer_name {
    font-style: normal;
    font-weight: bold;
    font-size: 16px;
    line-height: 140%;
    color: black;
  }
  .stream_name {
    font-style: normal;
    font-weight: normal;
    font-size: 12px;
    line-height: 140%;
    color: black;
  }
  .stream_game {  
    font-family: Roobert TRIAL;
    font-style: normal;
    font-weight: normal;
    font-size: 12px;
    line-height: 140%;
    color: #9F9F9F;
  }

  .badge_wrapper {
    padding-top: 8px;
  }

`;


const StreamDesc = props => {
  const { streamerName, streamName ,game,badges} = props;

  return (
    <StreamDescWrapper>
      <span class="streamer_name">{streamerName}</span>
      <div class="stream_name">{streamName}</div>
      <span class="stream_game">{game}</span>
      <div class="badge_wrapper">
        {badges ? badges.map(badge => (
            <Badge text={badge} color="grey"></Badge>
          )) : null}
      </div>

    </StreamDescWrapper>
  );
};

StreamDesc.propTypes = {
  streamerName: PropTypes.string,
  streamName: PropTypes.string,
  game: PropTypes.string,
  badges: PropTypes.array,
};


export default StreamDesc;