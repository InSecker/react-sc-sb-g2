import React from "react";
import styled, { css } from "styled-components";
import PropTypes from "prop-types";
import CardOverlay from "../atoms/CardOverlay";
import Avatar from "../atoms/Avatar";
import StreamDesc from "../molecules/streamDesc"

export const colors = {
  purple: "purple",
  grey: "grey"
};

const StreamCardWrapper = styled.span`
  .overlay {
    width: 292px;
    height: 170px;
    background: #F2F2F2;
    padding: 8px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
  }

  .descWrapper {
    display: flex;
    padding: 1vh 0 1vh 0;
  }
`;


const badges = ["Simulation","Aventure"]

const StreamCard = props => {
  const { text, color, live, viewers, isThumbnail,streamName,streamerName,game } = props;
  const displayOverlay = () => {
    if (live) {
      return(
        <>
          <CardOverlay color="red" text="LIVE"></CardOverlay>
          <CardOverlay class="viewersLabel" text={viewers + " K spectateurs"}></CardOverlay>
        </>
      )
    }
  }

  if (isThumbnail) {
    return(
      <StreamCardWrapper color={color}>
        <div>
          {displayOverlay()}
        </div>
      </StreamCardWrapper>
    )
  } else {
    return (
      <StreamCardWrapper color={color}>
        <div class="overlay">
          {displayOverlay()}
        </div>
        <div class="descWrapper">
          <Avatar size="small" path="helloWorld"></Avatar>
          <StreamDesc streamerName="AngleDroit" streamName="mardi chill sur Animal Crossing | Geoguessr ce..." game="Animal Crossing: New Horizons" badges={badges}></StreamDesc>
        </div>
        
      </StreamCardWrapper>
    )
  };
};

StreamCard.propTypes = {
  live: PropTypes.string,
  viewers: PropTypes.string,
  streamerName: PropTypes.string,
  streamName: PropTypes.string,
  isThumbnail: PropTypes.string,
  game: PropTypes.string,
  color: PropTypes.oneOf(Object.keys(colors)),
  text: PropTypes.string
};

StreamCard.defaultProps = {
  color: colors.grey
};

export default StreamCard;