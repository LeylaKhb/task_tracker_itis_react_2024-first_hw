import { FooterWrapper, Nav, FooterButtonLink } from './styled';

const Footer = () => {
    return (
        <FooterWrapper>
            <Nav>
                <FooterButtonLink href="/">Home</FooterButtonLink>
                <FooterButtonLink href="/projects">Projects</FooterButtonLink>
                <FooterButtonLink href="/info">Info</FooterButtonLink>
            </Nav>
        </FooterWrapper>
    )
}

export default Footer;
