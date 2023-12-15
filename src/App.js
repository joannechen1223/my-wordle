import styled from 'styled-components';

import Wordle from './wordle';

const Header = styled.header`
  width: 100%;
  height: 60px;
  border-bottom: 3px solid #e5e5e5;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const HeaderTitle = styled.h1`
  text-align: center;
  font-size: 30px;
  margin: 0;
`;

const App = () => (
  <>
    <Header>
      <HeaderTitle>Joanne's Wordle</HeaderTitle>
    </Header>
    <Wordle />
  </>
);

export default App;
