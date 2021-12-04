import styled from "styled-components";

export const Button = styled.button`
  background-color: ${({theme}) => theme.colors.primary.main};
  color: ${({theme}) => theme.colors.primary.lighter};
  border-radius: 20px;
  font-weight: bold;
  font-size: 16px;
  height: 60px;
  width: ${({small}) => (small ? '200px' : '350px')};
  border: none;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
`