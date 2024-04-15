import styled from 'styled-components';

export const HeaderWrapper = styled.header`
  display: flex;
  width: 100%;
  height: 50px;
  border-bottom: gray 2px solid;
`;

export const Nav = styled.nav`
  display: flex;
  align-items: center;
  justify-content: space-around;
  width: 100%;
`;

export const HeaderButtonLink = styled.a`
  border: 1px solid green;
  border-radius: 8px;
  padding: 8px;
  width: 100px;
  text-align: center;
  &:hover {
    background-color: cadetblue;
  }
`;
