import React from "react";
import styled, { css } from "styled-components";
import PropTypes from "prop-types";
import Colors from "../particles/Colors";

export const sizes = {
    small: "32px",
    medium: "36px",
    large: "42px"
};

const AvatarWrapper = styled.div`
  background-images: url("../../media/examples/${props => props.path ? props.path : null}");
  width: ${props =>  props.sizes ? props.sizes : sizes.medium};
  height: ${props =>  props.sizes ? props.sizes : sizes.medium};
  margin-right: 8px;
  border-radius: 100px;
  border: solid 1px black;
`;


const Avatar = props => {
    const { sizes, path } = props;
    return <AvatarWrapper sizes={sizes}></AvatarWrapper>;
};

Avatar.propTypes = {
    sizes: PropTypes.oneOf(Object.keys(sizes)),

};

export default Avatar;
