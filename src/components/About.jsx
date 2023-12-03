import { INTRO } from '../data/data';
import SaxPhoto from '../data/images/sax.jpg';

import styled from 'styled-components';

const IntroContainer = styled.div`
  display: flex;
  padding-top: 3vh;
`;

const TextContainer = styled.div`
  width: 48%;
  margin: 0 auto;
  height: 40vh;
  font-family: ${props => props.theme.fonts.primary};
  font-size: 32px;
  @media only screen and (max-width: 600px) {
    width: 95%;
    font-size: 28px;
  }
`;

const ImageContainer = styled.div`
  width: 50%;
  display: flex;
  justify-content: center;
  @media only screen and (max-width: 600px) {
    display: none;
  }
`;

const Image = styled.img`
  width: 80%;
  height: 80%;
  object-fit: cover;
  border-radius: 10px;
  box-shadow: grey 0px 7px 29px 0px;
`;


const About = () => {
  return(
    <IntroContainer className="scroll-section" id="about">
      <ImageContainer>
        <Image src={SaxPhoto} />
      </ImageContainer>
      <TextContainer>
        <p>
          {INTRO}
        </p>
        <p>
          Get in touch at: 
        </p>
        <p><b>kevinperryjazz@gmail.com</b></p>
      </TextContainer>
    </IntroContainer>
  );
};

export default About;