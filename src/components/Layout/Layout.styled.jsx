import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const Container = styled.div`
  max-width: 1200px;
  margin-left: auto;
  margin-right: auto;
  padding: 0 15px;
`;

export const Header = styled.header`
  padding: 15px 20px;
  box-shadow: 0px 1px 5px #ccc;
  background-color: rgb(245, 245, 245);
`;

export const Nav = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 25px;
`;

export const Link = styled(NavLink)`
  padding: 8px 16px;
  border-radius: 4px;
  text-decoration: none;
  color: black;
  font-weight: 500;
  border: 1px solid coral;
  transition: all 0.25s cubic-bezier(0.4, 0, 0.2, 1);

  &.active {
    color: white;
    background-color: coral;
  }

  :hover,
  :focus {
    color: white;
    background-color: coral;
  }
`;

export const LinkLogo = styled(NavLink)`
  font-weight: 500;
  font-size: 26px;
  line-height: 1.19;
  color: coral;
  text-decoration: none;
`;
