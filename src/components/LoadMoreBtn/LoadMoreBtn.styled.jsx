import styled from 'styled-components';

export const Btn = styled.button`
  display: block;
  padding: 8px 16px;
  margin: 20px auto;

  color: black;
  background-color: inherit;
  font-weight: 500;
  text-decoration: none;
  cursor: pointer;

  border-radius: 4px;
  border: 1px solid coral;
  transition: all 0.25s cubic-bezier(0.4, 0, 0.2, 1);

  :hover,
  :focus {
    color: white;
    background-color: coral;
  }
`;
