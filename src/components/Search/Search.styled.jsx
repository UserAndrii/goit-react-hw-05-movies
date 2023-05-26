import styled from 'styled-components';
import { FiSearch } from 'react-icons/fi';

export const Form = styled.form`
  display: flex;
  justify-content: space-between;
  padding: 15px 20px;
`;

export const Input = styled.input`
  width: 100%;
  height: 35px;
  margin-right: 5px;

  display: inline-block;
  width: 100%;
  font: inherit;
  border: 1px solid coral;
  outline: none;
  padding: 8px 16px;
  border-radius: 4px;
`;

export const Button = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  border: 1px solid coral;
  background-color: inherit;
  font-weight: 500;
  line-height: 1.15;

  padding: 8px 16px;
  border-radius: 4px;
  cursor: pointer;
  outline: none;
  transition: all 250ms cubic-bezier(0.4, 0, 0.2, 1);

  :hover,
  :focus {
    background-color: coral;
    color: #fff;
  }
`;

export const SearchIcon = styled(FiSearch)`
  color: inherit;
  margin-left: 5px;
`;
