import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const BtnLink = styled(Link)`
  display: flex;
  justify-content: center;
  align-items: center;

  width: 90px;
  gap: 8px;
  padding: 8px 16px;
  margin: 10px 0 0 20px;

  color: black;
  font-weight: 500;
  text-decoration: none;

  border: 1px solid coral;
  border-radius: 4px;
  transition: all 0.25s cubic-bezier(0.4, 0, 0.2, 1);

  :hover,
  :focus {
    color: white;
    background-color: #ff7f50;
  }
`;
