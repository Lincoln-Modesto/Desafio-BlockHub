import styled from "styled-components";

export const HeaderContainer = styled.header`
height: 100px;
padding: 16px 32px;
display: flex;
justify-content: space-between;
align-items: center;
background-color: ${({theme}) => theme.colors.primary.lighter};
box-shadow: 0px 4px 4px 0px #00000040;

  .container-item{
    display: flex;
    align-items: center;
  }
`

export const Item = styled.a`
  display: flex;
  align-items: center;
  justify-content: start;
  margin: 0 16px;
  color: ${({theme}) => theme.colors.primary.main};
  font-weight: bold;
  cursor: pointer;
  text-decoration: none;
`