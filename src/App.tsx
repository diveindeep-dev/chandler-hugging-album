import React, { ChangeEvent, useEffect, useState } from 'react';
import useDebounce from './hooks/useDebounce';
import { getCover } from './api';
import List from './components/List';
import chandler from './asset/chandler.png';
import styled from 'styled-components';
import { media, Message, textShadow } from './style/Mixin';

const H1 = styled.h1`
  font-family: Impact, 'GmarketSansMedium', sans-serif;
  font-size: 2.5rem;
  color: #ffffff;
  ${textShadow('#000000')}
`;

const Form = styled.div`
  position: relative;
  width: 100%;
  max-width: 720px;
  min-width: 350px;
  margin: 0 20px 20px 20px;
`;

const ImgChandler = styled.img`
  position: absolute;
  width: 100%;
  z-index: 10;
`;

const Wrap = styled.div`
  position: absolute;
  width: 352px;
  height: 352px;
  right: 184px;
  bottom: 2px;
  transform: rotate(14deg);
  z-index: 9;
`;

const Sample = styled.div`
  padding: 40px 0;
  width: 100%;
  height: 100%;
  text-align: center;
  font-size: 3.5rem;
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
  width: 720px;
  height: 720px;
  overflow: hidden;

  ${media} {
    width: 350px;
    height: 350px;

    ${Sample} {
      padding: 20px 0;
      font-size: 1.7rem;
    }

    ${Wrap} {
      width: 172px;
      height: 172px;
      right: 89px;
      bottom: 0px;
    }
  }
`;

const Result = styled.div`
  position: absolute;
  width: 100%;
  max-height: 450px;
  overflow: auto;
  z-index: 11;

  ${media} {
    max-height: 270px;
  }
`;

const Input = styled.input`
  position: relative;
  padding: 10px;
  width: 100%;
  font-size: 1.5rem;
  border: 1px solid #e2e8f0;
`;

const Main = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin: 0 auto;
  max-width: 1024px;

  .hidden {
    display: none;
  }
`;

function App() {
  const [query, setQuery] = useState<string>('');
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [data, setData] = useState<Album[] | string>([]);
  const [cover, setCover] = useState<string>('');
  const [hidden, setHidden] = useState<boolean>(false);
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

  const handleClick = (cover: string) => {
    setCover(cover);
    setHidden(true);
  };

  const handleFocus = () => {
    setHidden(false);
  };

  return (
    <Main>
      <H1>
        Chandler
        <br />
        Hugging my
        <br />
        Favorite
        <br />
        Album
      </H1>
      <Form>
        <Input
          onFocus={handleFocus}
          type="search"
          value={query}
          onChange={handleChange}
        />
        <Result className={hidden ? 'hidden' : ''}>
          {isLoading ? (
            <Message>loading</Message>
          ) : (
            <List data={data} handleClick={handleClick} />
          )}
        </Result>
      </Form>
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
