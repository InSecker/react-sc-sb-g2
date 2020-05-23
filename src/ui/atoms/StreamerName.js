import React from "react";
import styled, { css } from "styled-components";
import PropTypes from "prop-types"



const StreamerNameWrapper = styled.div`
  font-family: Roobert TRIAL;
  font-style: normal;
  font-weight: bold;
  font-size: 16px;
  line-height: 140%;
  color: #FFFFFF;
`;


const StreamerName = props => {
    const { name } = props;
    return <StreamerNameWrapper>{name}</StreamerNameWrapper>;
};

Avatar.propTypes = {
    sizes: PropTypes.oneOf(Object.keys(sizes)),

};

export default Avatar;
