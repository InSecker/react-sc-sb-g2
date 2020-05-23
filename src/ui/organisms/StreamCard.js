import React from "react";
import styled, { css } from "styled-components";
import PropTypes from "prop-types";
import Colors from "../particles/Colors";
import CardOverlay from "../atoms/CardOverlay";
import Avatar from "../atoms/Avatar";
import Badge from "../atoms/Badge"

export const colors = {
  purple: "purple",
  grey: "grey"
};

const StreamCardWrapper = styled.span`
  width: 100%;
  div {
    width: 292px;
    height: 170px;
    background: #F2F2F2;
    padding: 8px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
  }
`;

const StreamCard = props => {
  const { text, color, live, viewers, isThumbnail, badges } = props;
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
        <div>
          {displayOverlay()}
        </div>
        <Avatar size="small" path="helloWorld"></Avatar>
        {badges ? badges.map(badge => (
          <Badge text={badge} color="grey"></Badge>
        )) : null}
      </StreamCardWrapper>
    )
  };
};

StreamCard.propTypes = {
  live: PropTypes.bool,
  viewers: PropTypes.number,
  streamerName: PropTypes.string,
  streamName: PropTypes.string,
  badges: PropTypes.array,
  isThumbnail: PropTypes.bool,
  game: PropTypes.string,
  color: PropTypes.oneOf(Object.keys(colors)),
  text: PropTypes.string
};

StreamCard.defaultProps = {
  color: colors.grey
};

export default StreamCard;