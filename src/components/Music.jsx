import ReactPlayer from 'react-player'
import styled from 'styled-components';

const MusicContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const PlayerContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 3vh;
  align-items: center
`;

const Header = styled.h1`
  font-family: ${props => props.theme.fonts.primary};
`;


const Music = () => {
  return(
    <MusicContainer className="scroll-section" id="music">
      <Header>The Pasadena Sessions</Header>
      <PlayerContainer>
        <ReactPlayer url='https://soundcloud.com/kmilsax/sentimental-journey?utm_source=clipboard&utm_medium=text&utm_campaign=social_sharing' height='12vh' width={'75vw'} />
        <ReactPlayer url='https://soundcloud.com/kmilsax/remember?utm_source=clipboard&utm_medium=text&utm_campaign=social_sharing' height='12vh' width={'75vw'} />
        <ReactPlayer url='https://soundcloud.com/kmilsax/fried-bananas?utm_source=clipboard&utm_medium=text&utm_campaign=social_sharing' height='12vh' width={'75vw'} />
        <ReactPlayer url='https://soundcloud.com/kmilsax/felicidade?utm_source=clipboard&utm_medium=text&utm_campaign=social_sharing' height='12vh' width={'75vw'} />
        <ReactPlayer url='https://soundcloud.com/kmilsax/blue-minor?utm_source=clipboard&utm_medium=text&utm_campaign=social_sharing' height='12vh' width={'75vw'} />
      </PlayerContainer>
    </MusicContainer>
  );
};
export default Music;