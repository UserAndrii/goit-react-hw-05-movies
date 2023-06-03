import styled from 'styled-components';
import { GiFilmSpool } from 'react-icons/gi';
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
  text-align: center;

  @media screen and (min-width: 460px) {
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 25px;
  }
`;

export const Link = styled(NavLink)`
  padding: 8px 16px;
  display: inline-block;
  border-radius: 4px;
  font-weight: 500;
  text-decoration: none;
  color: black;
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
  margin-bottom: 30px;
  display: inline-block;
  font-weight: 500;
  font-size: 26px;
  line-height: 1.19;
  color: coral;
  text-decoration: none;
  transition: color 250ms cubic-bezier(0.4, 0, 0.2, 1);

  @media screen and (min-width: 460px) {
    margin-bottom: 0;
  }
`;

export const LogoIcon = styled(GiFilmSpool)`
  transition: color 250ms cubic-bezier(0.4, 0, 0.2, 1);

  &:hover {
    color: coral;
  }
`;
