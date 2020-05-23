import React from "react";
import styled, { css } from "styled-components";
import PropTypes from "prop-types";
import Colors from "../particles/Colors";

const CardOverlayWrapper = styled.span`
  background-color: ${props => props.color === "red" ? Colors.live_red : Colors.darker_grey};
  padding: 4px 8px;
  border-radius: 4px;
  color: white;
  font-family: sans-serif;
  font-style: normal;
  font-weight: bold;
  font-size: 10px;
  width: fit-content;
`;

const CardOverlay = props => {
  const { text, color } = props;
  return <CardOverlayWrapper color={color}>{text}</CardOverlayWrapper>;
};

CardOverlay.propTypes = {
  color: PropTypes.string,
  text: PropTypes.string,
};

export default CardOverlay;
