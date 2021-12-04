import styled from "styled-components";

export const GoBack = styled.div`
  display: flex;
  align-items: center;
  position: absolute;
  color: ${({theme}) => theme.colors.primary.main};
  font-size: 18px;
  top: 0;
  left: 0;
  padding: 20px;
  cursor: pointer;

  a{
    text-decoration: none;
  }
`