import { INTRO } from '../data/data';
import SaxPhoto from '../data/images/sax.jpg';

import styled from 'styled-components';

const IntroContainer = styled.div`
  display: flex;
  padding-top: 3vh;
`;

const TextContainer = styled.div`
  width: 50%;
`;

const ImageContainer = styled.div`
  width: 50%;
  display: flex;
  justify-content: center;
`;

const Image = styled.img`
  width: 80%;
  height: 80%;
  object-fit: cover;
  border-radius: 10px;
  box-shadow: grey 0px 7px 29px 0px;
`


const About = () => {
  return(
    <IntroContainer className="scroll-section" id="about">
      <ImageContainer>
        <Image src={SaxPhoto} />
      </ImageContainer>
      <TextContainer>
        {INTRO}
      </TextContainer>
    </IntroContainer>
  );
};

export default About;