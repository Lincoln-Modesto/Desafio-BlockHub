import styled from "styled-components";

export const Button = styled.button`
  background-color: ${({theme}) => theme.colors.primary.main};
  color: ${({theme}) => theme.colors.primary.lighter};
  border-radius: 20px;
  font-weight: bold;
  font-size: 16px;
  height: 60px;
  width: 350px;
  border: none;
`