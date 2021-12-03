import styled from "styled-components";

export const Card = styled.div`
  background-color: ${({theme}) => theme.colors.background};
  border-radius: 20px;
  padding: 16px;
  margin-bottom: 16px;
  cursor: pointer;
  opacity: 0.8;

  :hover{
    opacity: 1;
  }

  div{
    padding: 32px;
  }

  span{
    color: ${({theme}) => theme.colors.primary.main};
    font-weight: 700;
  }

  strong{
    color: ${({theme}) => theme.colors.gray[900]};
  }
`