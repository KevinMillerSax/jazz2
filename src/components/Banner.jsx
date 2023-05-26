import styled from 'styled-components';
import CouchPhoto from '../data/images/couch.jpg'
import Header from './Header';

const BannerContainer = styled.div`
  width: 100%;
  position: relative;
`

const Image = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`



const Banner = () => {
  return (
    <BannerContainer className="scroll-section">
      <Header />
      <Image src={CouchPhoto} />
    </BannerContainer>
  );
};

export default Banner;