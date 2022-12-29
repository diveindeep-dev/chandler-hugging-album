import React from 'react';
import chandler from './asset/chandler.png';
import styled from 'styled-components';

const ImgChandler = styled.img`
  width: 700px;
  position: absolute;
  z-index: 10;
`;

const Wrap = styled.div`
  position: absolute;
  width: 343px;
  height: 343px;
  transform: rotate(14deg);
  right: 178px;
  bottom: 1px;
  z-index: 9;
`;

const Sample = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: grey;
  font-size: 1.5rem;
  width: 100%;
  height: 100%;
`;

const Cover = styled.img`
  width: 100%;
  height: 100%;
`;

const Container = styled.div`
  position: relative;
  width: 700px;
  height: 700px;
  overflow: hidden;
`;

const Main = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

function App() {
  return (
    <Main>
      <h1>Chandler hugging my favorite album</h1>
      <Container>
        <ImgChandler src={chandler} alt="chandler" />
        <Wrap>
          <Sample>Add your fav album</Sample>
          {/* <Cover src={} alt="cover" /> */}
        </Wrap>
      </Container>
    </Main>
  );
}

export default App;
