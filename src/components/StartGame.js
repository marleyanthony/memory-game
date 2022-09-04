import { useState } from "react";
import styled from "styled-components";
import { ReactComponent as Logo } from "../../src/assets/logo.svg";

const StartGameContainer = styled.div`
  height: 90vh;
  padding: 24px;
`;

const LogoContainer = styled.div`
  padding: 80px 80px 40px;
`;

const StartGameDialogue = styled.div`
  background: #fcfcfc;
  padding: 24px;
  border-radius: 10px;
`;

const DialogueHeader = styled.p`
  font-weight: 700;
  font-size: 15px;
  color: #7191a5;
  margin-bottom: 11px;
  /* margin: 0; */
`;

const DialogueButtonContainer = styled.div`
  display: flex;
  grid-gap: 11px;
`;

const DialogueButton = styled.button`
  border: none;
  background: ${({ color }) => (color ? `${color}` : "#304859")};
  margin-top: ${({ startButton }) => (startButton ? "32px" : "")};
  width: 100%;
  color: #fcfcfc;
  padding: 10px 0;
  border-radius: 25px;
  cursor: pointer;
`;

const StartGame = () => {
  // const [theme, setTheme] = useState;

  return (
    <StartGameContainer>
      <LogoContainer>
        <Logo fill="#fff" />
      </LogoContainer>
      <StartGameDialogue>
        <DialogueHeader>Select Theme</DialogueHeader>
        <DialogueButtonContainer>
          <DialogueButton>Numbers</DialogueButton>
          <DialogueButton>Icons</DialogueButton>
        </DialogueButtonContainer>
        <DialogueHeader>Number of Players</DialogueHeader>
        <DialogueButtonContainer>
          <DialogueButton>1</DialogueButton>
          <DialogueButton>2</DialogueButton>
          <DialogueButton>3</DialogueButton>
          <DialogueButton>4</DialogueButton>
        </DialogueButtonContainer>
        <DialogueHeader>Grid Size</DialogueHeader>
        <DialogueButtonContainer>
          <DialogueButton>4x4</DialogueButton>
          <DialogueButton>6x6</DialogueButton>
        </DialogueButtonContainer>
        <DialogueButton color="#FDA214" startButton>
          Start Game
        </DialogueButton>
      </StartGameDialogue>
    </StartGameContainer>
  );
};

export default StartGame;
