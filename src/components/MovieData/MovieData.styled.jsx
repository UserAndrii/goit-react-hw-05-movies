import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const Image = styled.img`
  @media screen and (max-width: 350px) {
    max-width: 200px;
    height: auto;
  }
  max-width: 300px;
  height: auto;
`;

export const Wrapper = styled.div`
  text-align: center;
  padding: 15px 20px;
  border-bottom: 2px solid coral;

  @media screen and (min-width: 690px) {
    text-align: left;
    display: flex;
    gap: 40px;
  }
`;

export const InfoBlock = styled.div`
  border-bottom: 2px solid coral;
`;

export const Text = styled.h4`
  text-align: center;
  margin: 20px 0;
`;

export const BtnList = styled.ul`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 10px;
  list-style: none;
  margin: 0 0 20px 0;
  padding: 0;
`;

export const BtnLink = styled(NavLink)`
  display: inline-block;
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
