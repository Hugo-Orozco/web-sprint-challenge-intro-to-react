// Write your Character component here
import React from 'react';

import styled from 'styled-components';

const Container = styled.div`
  display: flex;
  justify-content: space-between;
  -webkit-touch-callout: none; /* iOS Safari */
    -webkit-user-select: none; /* Safari */
     -khtml-user-select: none; /* Konqueror HTML */
       -moz-user-select: none; /* Old versions of Firefox */
        -ms-user-select: none; /* Internet Explorer/Edge */
            user-select: none; /* Non-prefixed version, currently supported by Chrome, Edge, Opera and Firefox */
`;

const Section = styled.div`
display: flex;
  background-color: rgba(255, 255, 255, 0.5);
  margin: 10px 0;
  padding: 0 20px;
  outline: 1px solid white;
  &:hover {
    box-shadow: 0 0 10px #FFFFFF;
    text-shadow: 0 0 5px #FFFFFF;
  }
`;

const Click = styled.p`
  color: #FFFFFF;
  transition: ease-in-out 0.2s;
  cursor: pointer;
  outline: none;
`;

const Text = styled.p`
  color: #FFFFFF;
  transition: ease-in-out 0.2s;
  cursor: default;
`;

const Hide = styled.div`
  display: none;
`;

const Show = styled.div`
  // position: absolute;
  display: flex;
  color: white;
`;

const Extra = styled.span`
  margin: auto 0;
`;

const Character = (props) => {

  const { name, birth_year, gender, height, mass, check, state, toggle } = props;

  const Modal = () => {

    return {
      Show: () => {
        return (
          <Show>
            <Extra>{'\u200B'} - Gender: {gender.match(/^(n\/a)$/i) ? gender.toUpperCase() : gender.replace(/^(female)$/i, 'Female').replace(/^(male)$/i, 'Male')} | Height: {height.toUpperCase()} | Mass: {mass.toUpperCase()}</Extra>
          </Show>
        )
      },
      Hide: () => {
        return (
          <Hide>Nope</Hide>
        )
      }
    }

  };

  const Handler = () => {

    if (check === name && state) {
      return Modal().Show()
    }

    else {
      return Modal().Hide()
    }

  }

  return (
    <Container>
      <Section>
        <Click tabIndex={0} role='button' onClick={() => toggle(name)}>{name}</Click>
        {Handler()}
      </Section>
      <Section>
        <Text>{birth_year.toUpperCase()}</Text>
      </Section>
    </Container>
  );

};

export default Character;
