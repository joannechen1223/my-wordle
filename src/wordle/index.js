import { useEffect } from 'react';
import styled from 'styled-components';

import Keyboard from './keyboard';

const Container = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  flex-direction: column;
`;

const InputBoard = styled.div`
  margin: 20px 0;
`;

const InputRow = styled.div`
  display: flex;
  flex-direction: row;
  margin: 10px 0;
`;

const InputBox = styled.div`
  width: 50px;
  height: 50px;
  border: 2px solid #e5e5e5;
  margin: 0 5px;
`;

const Wordle = () => {
  const handleKeyDown = (event) => {
    // Handle key down event
    console.log('Key Down:', event.key);
  };

  useEffect(() => {
    document.addEventListener('keydown', handleKeyDown);

    return () => {
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, []);

  return (
    <Container>
      <InputBoard>
        {Array(6)
          .fill(true)
          .map((_, i) => (
            <InputRow key={i}>
              {Array(5)
                .fill(true)
                .map((_, i) => (
                  <InputBox key={i} />
                ))}
            </InputRow>
          ))}
      </InputBoard>
      <Keyboard />
    </Container>
  );
};

export default Wordle;
