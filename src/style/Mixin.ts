import styled, { css } from 'styled-components';

export const media = `
  @media screen and (max-width: 767px)
`;

export const Box = css`
  display: flex;
  align-items: center;
  min-width: 350px;
  padding: 10px;
  height: 90px;
  border: 1px solid #e2e8f0;
  border-top: none;
`;

export const Message = styled.div`
  ${Box}
  background-color: #ffffff;
  font-size: 1.2rem;
`;

export const textShadow = (color: string) => css`
  text-shadow: 1px 1px 0 ${color}, -1px 1px 0 ${color}, 1px -1px 0 ${color},
    -1px -1px 0 ${color}, 0px 1px 0 ${color}, 0px -1px 0 ${color},
    -1px 0px 0 ${color}, 1px 0px 0 ${color}, 2px 2px 0 ${color},
    -2px 2px 0 ${color}, 2px -2px 0 ${color}, -2px -2px 0 ${color},
    0px 2px 0 ${color}, 0px -2px 0 ${color}, -2px 0px 0 ${color},
    2px 0px 0 ${color}, 1px 2px 0 ${color}, -1px 2px 0 ${color},
    1px -2px 0 ${color}, -1px -2px 0 ${color}, 2px 1px 0 ${color},
    -2px 1px 0 ${color}, 2px -1px 0 ${color}, -2px -1px 0 ${color};
`;

export const memeFont = css`
  ${textShadow('#000000')}
  font-family: Impact, 'GmarketSansBold', 'Arial Narrow Bold', sans-serif;
  color: #ffffff;
`;
