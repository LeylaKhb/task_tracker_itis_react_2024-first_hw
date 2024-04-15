import {HeaderButtonLink, HeaderWrapper, Nav} from './styled';

const Header = () => {
  return (
    <HeaderWrapper>
      <Nav>
        <HeaderButtonLink href="/">Home</HeaderButtonLink>
        <HeaderButtonLink href="/projects">Projects</HeaderButtonLink>
        <HeaderButtonLink href="/info">Info</HeaderButtonLink>
      </Nav>
    </HeaderWrapper>
  )
}

export default Header;
