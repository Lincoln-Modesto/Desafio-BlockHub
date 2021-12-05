import styled from "styled-components";

export const Card = styled.a`
  background-color: ${({theme}) => theme.colors.background};
  border-radius: 20px;
  padding: 16px;
  margin-bottom: 16px;
  cursor: pointer;
  opacity: 0.8;
  box-shadow: 0px 2px 2px 0px #00000040;
  text-decoration: none;
  display: block;

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

export const CardHour = styled.div`
  background-color: ${({theme}) => theme.colors.background};
  border-radius: 20px;
  padding: 16px;
  margin-bottom: 16px;
  cursor: pointer;
  opacity: 0.8;
  height: 50px;
  display: flex;
  justify-content: flex-start;

  :hover{
    opacity: 1;
  }

  span{
    color: ${({theme}) => theme.colors.primary.main};
    font-weight: 700;
  }

  strong{
    color: ${({theme}) => theme.colors.gray[900]};
  }
  `
