import styled from 'styled-components';

export const List = styled.ul`
  display: grid;
  max-width: calc(100vw - 20px);
  grid-template-columns: repeat(auto-fill, minmax(120px, 1fr));
  grid-gap: 16px;
  margin-top: 0;
  margin-bottom: 0;
  padding: 20px 0;
  list-style: none;
  margin-left: auto;
  margin-right: auto;
`;

export const Image = styled.img`
  width: 100%;
  height: 170px;
  object-fit: cover;
`;

export const Name = styled.h4`
  margin: 0;
`;

export const Character = styled.p`
  margin: 20px 0 0 0;
`;
