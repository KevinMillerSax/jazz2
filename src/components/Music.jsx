import ReactPlayer from 'react-player'
import styled from 'styled-components';

const MusicContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  // @media only screen and (max-width: 600px) {
  //   width: 95%;
  // }
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

const HeaderSmall = styled.h2`
  font-family: ${props => props.theme.fonts.primary};
  padding-bottom: 20px;
`

const IconWrapper = styled.div`
  display: flex;
  width: 33vw;
  justify-content: space-evenly;
  @media only screen and (max-width: 600px) {
    width: 90vw;
  }
}
`;

const Anchor = styled.a`
  color: black;
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
      <HeaderSmall>Listen On:</HeaderSmall>
      <IconWrapper>
        <Anchor href='https://open.spotify.com/artist/0CSd5XsQDrAlMDCwKITVrb' target='_blank'  rel='noreferrer'>
          <i class="fa-brands fa-spotify fa-lg"></i>
        </Anchor>
        <Anchor href='https://music.apple.com/gb/artist/kevin-perry/1717202839' target='_blank' rel='noreferrer'>
          <i class="fab fa-itunes fa-lg"></i>
        </Anchor>
        <Anchor href='https://music.amazon.com/albums/B0CNL1XG2L' target='_blank' rel='noreferrer'>
          <i class="fab fa-amazon fa-lg"></i>
        </Anchor>
        <Anchor href='https://www.youtube.com/watch?v=uRCCK3MkzRQ&list=OLAK5uy_mG-KspZLcKyOy0tsFXnupvqnTJJNia_wY' target='_blank' rel='noreferrer'>
          <i class="fab fa-youtube fa-lg"></i>
        </Anchor>
      </IconWrapper>
     
    </MusicContainer>
  );
};
export default Music;