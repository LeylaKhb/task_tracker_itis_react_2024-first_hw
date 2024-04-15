import styled from 'styled-components';

export const FooterWrapper = styled.footer`
  display: flex;
  width: 100%;
  border: 1px solid gray;
  height: 60px;
  align-items: center;
  justify-content: center;
`;

export const Nav = styled.nav`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 50%;
  gap: 1rem;
`;

export const FooterButtonLink = styled.a`
  text-decoration: underline;
`;