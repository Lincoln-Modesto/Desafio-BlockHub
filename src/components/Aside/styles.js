import styled from "styled-components";


export const SideBar = styled.aside`
  margin: 32px;
  padding: 16px;
  background-color: ${({ theme }) => theme.colors.primary.lighter};
  border-radius: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  max-width: 300px;
  height: 100vh;

    .container-item{
      display: flex;
      flex-direction: column;
      justify-content: start;
      width: 100%;
      padding: 32px;
    }
`

export const Name = styled.h4`
  color: ${({theme}) => theme.colors.gray[900]};
  font-weight: normal;
`

export const Email = styled.h5`
  color: ${({theme}) => theme.colors.gray[200]};
  font-weight: normal;
`

export const Logo = styled.img`
  margin-bottom: 50px;
`

export const Item = styled.a`
  display: flex;
  align-items: center;
  justify-content: start;
  margin: 16px 0;
  color: ${({theme}) => theme.colors.primary.main};
  font-weight: bold;
  cursor: pointer;
  text-decoration: none;
`