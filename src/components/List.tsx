import React, { Fragment } from 'react';
import styled from 'styled-components';
import { Box, Message } from '../style/Mixin';

interface ListProps {
  data: Album[] | string;
  handleClick: (cover: string) => void;
}

const LI = styled.li`
  background-color: #ffffff;
  &:hover {
    cursor: pointer;
    background-color: #e2e8f0;
  }
`;

const Container = styled.div`
  ${Box}
`;

const Thumbnail = styled.img`
  width: 70px;
  height: 70px;
`;

const Name = styled.div`
  font-size: 1.1rem;
  font-weight: 500;
`;

const Artist = styled.div`
  font-size: 0.9rem;
  color: grey;
`;

const Info = styled.div`
  padding: 10px;
`;

function List(props: ListProps) {
  const { data, handleClick } = props;
  const isMessage = typeof data === 'string';
  const result = isMessage ? (
    <Message>{data}</Message>
  ) : (
    data.map((album: Album, i: number) => {
      const cover = album.image[3]['#text'];

      return (
        <LI key={i} onClick={() => handleClick(cover)}>
          <Container>
            <Thumbnail src={cover} alt={`${album.name}-cover`} />
            <Info>
              <Name>{album.name}</Name>
              <Artist>{album.artist}</Artist>
            </Info>
          </Container>
        </LI>
      );
    })
  );

  return <Fragment>{result}</Fragment>;
}

export default List;
