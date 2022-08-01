import React, { Component } from "react";
import App from "../App";
import styled from "styled-components";

export const Title = styled.h1`
  text-align: center;
  font-family: "Bebas Neue", cursive;
`;
export default class Header extends Component {
  render() {
    return (
      <div>
        <Title>Calculadora</Title>
      </div>
    );
  }
}
