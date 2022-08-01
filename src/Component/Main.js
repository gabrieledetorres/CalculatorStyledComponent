import React, { Component } from "react";
import styled from "styled-components";

export const Box = styled.div`
  display: flex;
  flex-direction: column;
  background-color: #87cefa;
  width: 100%;
  align-items: center;
`;

export const SectionButton = styled.section`
  display: flex;
  flex-direction: row;
  width: 100%;
  align-items: center;
  margin-top: 20px;
  justify-content: space-evenly;
`;

export const Input1 = styled.input`
  border: none;
  margin-top: 20px;
  height: 2em;
  width: 6em;
  background: #d3d3d3;
  font-family: "Bebas Neue", cursive;
  font-size: 2rem;
`;

export const Input2 = styled.input`
  border: none;
  margin-top: 20px;
  height: 2em;
  width: 6em;
  background: #d3d3d3;
  font-family: "Bebas Neue", cursive;
  font-size: 2rem;
`;

export const Title = styled.h1`
  font-family: "Bebas Neue", cursive;
`;

export const Botao = styled.button`
  border: none;
  font-family: "Bebas Neue", cursive;
  background-color: aquamarine;
  font-size: 24px;
  width: 2em;
`;

export default class Main extends Component {
  state = {
    n1: "",
    n2: "",
    result: 0
  };

  handleChange = (event) => {
    this.setState({
      n1: Number(event.target.value)
    });
  };

  Change = (event) => {
    this.setState({
      n2: Number(event.target.value)
    });
  };

  Multi = () => {
    const { n1, n2 } = this.state;
    this.setState({
      result: n1 * n2
    });
  };

  Soma = () => {
    const { n1, n2 } = this.state;
    this.setState({
      result: n1 + n2
    });
  };

  Subt = () => {
    const { n1, n2 } = this.state;
    this.setState({
      result: n1 - n2
    });
  };

  Divisao = () => {
    const { n1, n2 } = this.state;
    this.setState({
      result: n1 / n2
    });
  };

  c = () => {
    this.setState({
      result: 0,
      n1: "",
      n2: ""
    });
  };

  render() {
    return (
      <Box>
        <Input1
          type="number"
          onChange={this.handleChange}
          value={this.state.n1}
        />

        <SectionButton>
          <Botao onClick={this.Soma}>+</Botao>
          <Botao onClick={this.Subt}>-</Botao>
          <Botao onClick={this.Multi}>X</Botao>
          <Botao onClick={this.Divisao}>/</Botao>
          <Botao onClick={this.c}>C</Botao>
        </SectionButton>

        <Input2 type="number" onChange={this.Change} value={this.state.n2} />

        <Title>{this.state.result}</Title>
      </Box>
    );
  }
}
