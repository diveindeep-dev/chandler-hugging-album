import Friends from '../asset/friends-logo.png';
import Lastfm from '../asset/lastfm-logo.png';
import Netlify from '../asset/netlify-logo.png';
import Cloudtype from '../asset/cloudtype-logo.svg';
import styled from 'styled-components';

const FooterStyle = styled.footer`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 40px 0;
`;

const Logo = styled.img`
  margin: 0 10px;
  height: ${(props) => props.height || 22}px;
  filter: grayscale(1);
`;

const Div = styled.div`
  display: flex;
  align-items: center;
  margin: 5px 0;
  font-size: 0.9rem;

  a {
    color: inherit;
    text-decoration: none;
    span {
      margin: 0 5px;
      background: linear-gradient(transparent 60%, #e2e8f0 0);
      &:hover {
        background: linear-gradient(transparent 0%, #e2e8f0 0);
      }
    }
  }
`;

function Footer() {
  return (
    <FooterStyle>
      <Div>
        Inspired by
        <a href={'https://billclintonswag.com/'}>
          <span>billcliontonswag</span>
        </a>
      </Div>
      <Div>
        Image from <Logo src={Friends} alt="friend" height={17} />
      </Div>
      <Div>
        API powered by
        <a href={'https://www.last.fm/api'}>
          <Logo src={Lastfm} alt="lastfm" height={15} />
        </a>
      </Div>
      <Div>
        Deploys by
        <a href={'https://www.netlify.com/'}>
          <Logo src={Netlify} alt="netlify" />
        </a>
        &
        <a href={'https://cloudtype.io/'}>
          <Logo src={Cloudtype} alt="cloudtype" />
        </a>
      </Div>
      <Div>
        Created by
        <a href={'https://blog.diveindeep.space/'}>
          <span>diveindeep</span>
        </a>
      </Div>
    </FooterStyle>
  );
}

export default Footer;
