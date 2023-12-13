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
  @media only screen and (max-width: 800px) {
    width: 55%;
  }
  @media only screen and (max-width: 600px) {
    width: 95%;
    font-size: 28px;
  }
  @media only screen and (max-width: 400px) {
    width: 95%;
    font-size: 24px;
  }
`;

const ImageContainer = styled.div`
  width: 50%;
  display: flex;
  justify-content: center;
  @media only screen and (max-width: 800px) {
    width: 40%;
  }
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

const Text = styled.p`
  margin-bottom: 32px;
`

const About = () => {
  return(
    <IntroContainer className="scroll-section" id="about">
      <ImageContainer>
        <Image src={SaxPhoto} />
      </ImageContainer>
      <TextContainer>
        <Text>
        Kevin Perry, saxophonist from Ventura County, California, mesmerizes with his soulful mastery of the jazz genre. Evolving from his early days, Perry seamlessly blends originality, beauty and simplicity with emotive storytelling. From the Broadway musical "Swing!" to his past collaboration with the Rook Duo, a jazz-classical fusion group, his saxophone mirrors Ventura's cultural heartbeat. His performances, a blend of tradition and innovation, enrich the local music scene.
        </Text>
        <Text>
          Get in touch at: 
        </Text>
        <Text><b>kevinperryjazz@gmail.com</b></Text>
      </TextContainer>
    </IntroContainer>
  );
};

export default About;