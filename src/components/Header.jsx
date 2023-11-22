import styled from 'styled-components';

// const LinkElement = styled.div`
//   color: ${props => props.theme.colors.white};
//   font-family: ${props => props.theme.fonts.primary};
//   cursor: pointer;
// `

// const Nav = styled.nav`
//   display: flex;
//   justify-content: space-around;
//   position: absolute;
//   z-index: 2;
//   width: 100%;
//   pointer-events: auto;
//   background: transparent;
//   text-decoration: none;
// `;

const Name = styled.div`
  color: ${props => props.theme.colors.white};
  font-family: ${props => props.theme.fonts.primary};
  font-size: 64px;
  top: 74%;
  left: 4%;
  z-index: 2;
  display: flex;
  background: transparent;
  position: absolute;
  justify-content: center;
  @media only screen and (max-width: 600px) {
    width: 100%;
    left: 0%;
  }
`;

const Header = () => {

  // const handleClickScroll = (id) => {
  //   const element = document.getElementById(id);
  //   if (element) {
  //     element.scrollIntoView({ behavior: 'smooth' });
  //   }
  // };

  return (
    <Name>Kevin Perry</Name>
    // <Nav>
    //   <LinkElement onClick={() => handleClickScroll('about')}>About</LinkElement>
    //   <LinkElement onClick={() => handleClickScroll('music')}>Music</LinkElement>
    //   <LinkElement onClick={() => handleClickScroll('contact')}>Contact</LinkElement>
    // </Nav>
  );
};

export default Header;