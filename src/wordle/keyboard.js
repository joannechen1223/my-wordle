import styled from 'styled-components';
import BackspaceIcon from './backspaceIcon';

const Container = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
`;

const KeyboardRow = styled.div`
  display: flex;
  flex-direction: row;
  margin: 5px 0;
`;

const KeyboardButton = styled.button`
  width: 43px;
  height: 58px;
  border: 0;
  background-color: #d3d6da;
  margin: 0 2px;
  border-radius: 4px;
  font-size: 1.25em;
  font-weight: bold;
`;

const EnterButton = styled(KeyboardButton)`
  width: 65px;
  font-size: 1em;
`;

const Keyboard = () => {
  const keyboardLetter = [
    ['Q', 'W', 'E', 'R', 'T', 'Y', 'U', 'I', 'O', 'P'],
    ['A', 'S', 'D', 'F', 'G', 'H', 'J', 'K', 'L'],
    ['Z', 'X', 'C', 'V', 'B', 'N', 'M'],
  ];

  return (
    <Container>
      <KeyboardRow>
        {keyboardLetter[0].map((letter, i) => (
          <KeyboardButton key={`row-0-${i}`}>{letter}</KeyboardButton>
        ))}
      </KeyboardRow>
      <KeyboardRow>
        {keyboardLetter[1].map((letter, i) => (
          <KeyboardButton key={`row-0-${i}`}>{letter}</KeyboardButton>
        ))}
      </KeyboardRow>
      <KeyboardRow>
        <EnterButton>Enter</EnterButton>
        {keyboardLetter[2].map((letter, i) => (
          <KeyboardButton key={`row-0-${i}`}>{letter}</KeyboardButton>
        ))}
        <EnterButton>
          <BackspaceIcon />
        </EnterButton>
      </KeyboardRow>
    </Container>
  );
};

export default Keyboard;
