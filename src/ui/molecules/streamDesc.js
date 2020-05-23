import React from "react";
import styled, { css } from "styled-components";
import PropTypes from "prop-types";
import Colors from "../particles/Colors";
import Badge from "../atoms/Badge";
import Avatar from "../atoms/Avatar";

export const colors = {
  purple: "purple",
  grey: "grey"
};

const StreamDescWrapper = styled.div`
  width: 100%;
  div {
    width: 308px;
    height: 170px;
    background: 
  }
`;

const StreamDesc = props => {
  const { text, color } = props;
  return (
    <StreamDescWrapper color={color}>
      
        <CardOverlay color="red" text="LIVE"></CardOverlay>
      
    </StreamDescWrapper>
  );
};

StreamDesc.propTypes = {
  streamer_name: PropTypes.string,
  stream_title: PropTypes.string,
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