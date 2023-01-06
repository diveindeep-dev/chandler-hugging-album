import React, { ChangeEvent, useEffect, useState, useRef } from 'react';
import domtoimage from 'dom-to-image';
import { saveAs } from 'file-saver';
import useDebounce from './hooks/useDebounce';
import { getCover } from './api';
import List from './components/List';
import chandler from './asset/chandler.png';
import styled from 'styled-components';
import { media, memeFont, Message } from './style/Mixin';

const H1 = styled.h1`
  line-height: 1;
  font-size: 2.5rem;
  ${memeFont}
  span {
    ${memeFont}
    color: #2cb76f;
  }
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
  ${memeFont}
  font-size: 3.5rem;
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
    width: 360px;
    height: 360px;

    ${Sample} {
      padding: 20px 0;
      font-size: 1.7rem;
    }

    ${Wrap} {
      width: 177px;
      height: 177px;
      right: 92px;
      bottom: 0px;
    }
  }
`;

const Saved = styled.div`
  position: relative;
`;

const Button = styled.button`
  ${memeFont}
  padding: 5px 20px;
  margin: 10px;
  font-size: 2rem;
  background-color: #ffffff;
  border: 2px solid #000000;
  border-radius: 10px;
  &:hover {
    cursor: pointer;
    background-color: #2cb76f;
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
  font-size: 1.2rem;
  padding: 10px;
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
  const savedRef = useRef<HTMLDivElement>(null);

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

  const handleSave = () => {
    const savedImg = savedRef.current;

    if (savedImg) {
      const isSmall = savedImg.clientWidth === 360;
      const options = isSmall
        ? {
            width: savedImg.clientWidth * 2,
            height: savedImg.clientHeight * 2,
            style: {
              transform: 'scale(2)',
              'transform-origin': '0% 0%',
            },
          }
        : undefined;
      domtoimage.toBlob(savedImg, options).then((blob) => {
        saveAs(blob, `chandler.png`);
      });
    }
  };

  return (
    <Main>
      <H1>
        <span>C</span>handler <span>H</span>ugging
        <br />
        my <span>F</span>avorite <span>A</span>lbum
      </H1>
      <Form>
        <Input
          onFocus={handleFocus}
          type="search"
          value={query}
          onChange={handleChange}
          placeholder={`검색어를 입력하세요.`}
        />
        <Result className={hidden ? 'hidden' : ''}>
          {isLoading ? (
            <Message>Loading...</Message>
          ) : (
            <List data={data} handleClick={handleClick} />
          )}
        </Result>
      </Form>
      <Saved ref={savedRef}>
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
      </Saved>
      <Button onClick={handleSave}>SAVE AS</Button>
    </Main>
  );
}

export default App;
