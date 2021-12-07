import styled from "styled-components";

export const Card = styled.a`
  background-color: ${({theme}) => theme.colors.background};
  border-radius: 5px;
  padding: 16px;
  margin-bottom: 16px;
  cursor: pointer;
  opacity: 0.7;
  box-shadow: 0px 2px 2px 0px #00000040;
  text-decoration: none;
  display: block;

  :hover{
    opacity: 1;
    background-color: ${({theme}) => theme.colors.primary.light};
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

export const CardHour = styled.div`
  background-color: ${({theme}) => theme.colors.background};
  border-radius: 5px;
  padding: 16px;
  margin-bottom: 16px;
  opacity: 0.7;
  height: 50px;
  display: flex;
  justify-content: flex-start;

  :hover{
    opacity: 1;
    background-color: ${({theme}) => theme.colors.primary.light};
  }

  span{
    color: ${({theme}) => theme.colors.primary.main};
    font-weight: 700;
  }

  strong{
    color: ${({theme}) => theme.colors.gray[900]};
  }
  `
