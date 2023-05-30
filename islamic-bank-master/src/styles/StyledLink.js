import styled from "styled-components";

export const StyledLink = styled.li`
  padding-bottom: 4px;
  cursor: pointer;
  box-sizing: border-box;
  border-bottom: 1px solid transparent;
  transition: all 0.7s;
  ${(props) => props.last || `margin-right: ${140 / props.length + "px;"}`}

  @media screen and (max-width: 1030px) {
    ${(props) => props.last || `margin-right: ${100 / props.length + "px;"}`}
  }

  @media screen and (max-width: 990px) {
    ${(props) => props.last || `margin-right: ${60 / props.length + "px;"}`}
  }
`;
