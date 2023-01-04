import React, { ChangeEvent, useEffect, useState } from 'react';
import useDebounce from './hooks/useDebounce';
import { getCover } from './api';
import List from './components/List';
import chandler from './asset/chandler.png';
import styled from 'styled-components';
import { textShadow } from './style/Mixin';

export const Box = styled.div`
  display: flex;
  align-items: center;
  padding: 10px;
  height: 90px;
  border: 1px solid #e2e8f0;
  border-top: none;
`;

const H1 = styled.h1`
  font-family: Impact, 'GmarketSansMedium', sans-serif;
  font-size: 2.5rem;
`;

const Input = styled.input`
  padding: 10px;
  font-size: 1.5rem;
  border: 1px solid #e2e8f0;
`;

const ImgChandler = styled.img`
  position: absolute;
  width: 700px;
  z-index: 10;
`;

const Wrap = styled.div`
  position: absolute;
  width: 343px;
  height: 343px;
  right: 178px;
  bottom: 1px;
  transform: rotate(14deg);
  z-index: 9;
`;

const Sample = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
  font-size: 2.7rem;
  font-family: Impact, 'GmarketSansMedium', sans-serif;
  color: #ffffff;
  ${textShadow('#000000')}
  background-color: #e2e8f0;
`;

const CoverStyle = styled.img`
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
  const [query, setQuery] = useState<string>('');
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [data, setData] = useState<Album[] | string>([]);
  const [cover, setCover] = useState<string>('');

  const debouncedSearch = useDebounce(query);

  const searchCover = async () => {
    setIsLoading(true);

    const res = await getCover(query);
    if (res) {
      if (res.status === 200) {
        res.data.length === 0
          ? setData('검색 결과가 없습니다.')
          : setData(res.data);
      } else {
        setData('잠시 후 다시 시도해주세요.');
      }
    }

    setIsLoading(false);
  };

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setQuery(e.target.value);
  };

  useEffect(() => {
    if (!query) {
      setData([]);
    } else if (debouncedSearch) {
      searchCover();
    }
  }, [debouncedSearch]);

  return (
    <Main>
      <H1>Chandler hugging my favorite album</H1>
      <Input type="search" value={query} onChange={handleChange} />
      <div>
        {isLoading ? (
          <Box>loading</Box>
        ) : (
          <List data={data} handleClick={setCover} />
        )}
      </div>
      <Container>
        <ImgChandler src={chandler} alt="chandler" />
        <Wrap>
          {cover ? (
            <CoverStyle src={cover} alt="cover" />
          ) : (
            <Sample>
              ADD YOUR
              <br />
              FAVORITE ALBUM
            </Sample>
          )}
        </Wrap>
      </Container>
    </Main>
  );
}

export default App;
