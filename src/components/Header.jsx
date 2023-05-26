import styled from 'styled-components';

const LinkElement = styled.div`
  color: ${props => props.theme.colors.white};
  font-family: ${props => props.theme.fonts.primary};
  cursor: pointer;
`

const Nav = styled.nav`
  display: flex;
  justify-content: space-around;
  position: absolute;
  z-index: 2;
  width: 100%;
  padding-left: 24px;
  padding-right: 24px;
  pointer-events: auto;
  background: transparent;
  text-decoration: none;
`;

const Header = () => {

  const handleClickScroll = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <Nav>
      <LinkElement onClick={() => handleClickScroll('about')}>About</LinkElement>
      <LinkElement onClick={() => handleClickScroll('music')}>Music</LinkElement>
      <LinkElement onClick={() => handleClickScroll('contact')}>Contact</LinkElement>
    </Nav>
  );
};

export default Header;