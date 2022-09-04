import styled from "styled-components";
import { ReactComponent as Logo } from "../../src/assets/logo.svg";

const LogoContainer = styled.div`
  padding: 80px;
`;

const StartGame = () => {
  return (
    <LogoContainer>
      <Logo fill="#fff" />
    </LogoContainer>
  );
};

export default StartGame;
