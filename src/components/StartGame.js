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
  background: ${({ activeButton }) => !activeButton && "#BCCED9"};
  background: ${({ startButton }) => startButton && "#FDA214"};
  margin-top: ${({ startButton }) => (startButton ? "32px" : "")};
  width: 100%;
  color: #fcfcfc;
  padding: 10px 0;
  border-radius: 25px;
  cursor: pointer;
`;

const StartGame = () => {
  const [active, setActive] = useState("Numbers");
  const [numberOfPlayers, setNumberOfPlayers] = useState("1");
  const [gridSize, setGridSize] = useState("4x4");

  const changeTheme = (event) => {
    setActive(event.target.innerText);
  };

  const changeNumberOfPlayers = (event) => {
    setNumberOfPlayers(event.target.innerText);
  };

  const changeGridSize = (event) => {
    setGridSize(event.target.innerText);
  };

  const startGame = () => {
    console.log(
      `Start the game with the ${active} theme, ${numberOfPlayers} players and ${gridSize} grid size!`
    );
  };

  return (
    <StartGameContainer>
      <LogoContainer>
        <Logo fill="#fff" />
      </LogoContainer>
      <StartGameDialogue>
        <DialogueHeader>Select Theme</DialogueHeader>
        <DialogueButtonContainer>
          <DialogueButton
            onClick={changeTheme}
            activeButton={active === "Numbers"}
          >
            Numbers
          </DialogueButton>
          <DialogueButton
            onClick={changeTheme}
            activeButton={active === "Icons"}
          >
            Icons
          </DialogueButton>
        </DialogueButtonContainer>
        <DialogueHeader>Number of Players</DialogueHeader>
        <DialogueButtonContainer>
          <DialogueButton
            onClick={changeNumberOfPlayers}
            activeButton={numberOfPlayers === "1"}
          >
            1
          </DialogueButton>
          <DialogueButton
            onClick={changeNumberOfPlayers}
            activeButton={numberOfPlayers === "2"}
          >
            2
          </DialogueButton>
          <DialogueButton
            onClick={changeNumberOfPlayers}
            activeButton={numberOfPlayers === "3"}
          >
            3
          </DialogueButton>
          <DialogueButton
            onClick={changeNumberOfPlayers}
            activeButton={numberOfPlayers === "4"}
          >
            4
          </DialogueButton>
        </DialogueButtonContainer>
        <DialogueHeader>Grid Size</DialogueHeader>
        <DialogueButtonContainer>
          <DialogueButton
            onClick={changeGridSize}
            activeButton={gridSize === "4x4"}
          >
            4x4
          </DialogueButton>
          <DialogueButton
            onClick={changeGridSize}
            activeButton={gridSize === "6x6"}
          >
            6x6
          </DialogueButton>
        </DialogueButtonContainer>
        <DialogueButton onClick={startGame} startButton>
          Start Game
        </DialogueButton>
      </StartGameDialogue>
    </StartGameContainer>
  );
};

export default StartGame;
