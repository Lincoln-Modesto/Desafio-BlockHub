import styled from "styled-components";

export const ContainerMain = styled.main`
  display: flex;

  .container-project{
    display: flex;
    flex-direction: column;
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

export const Item = styled.div`
  display: flex;
  align-items: center;
  justify-content: start;
  margin: 16px 0;
  color: ${({theme}) => theme.colors.primary.main};
  font-weight: bold;
  cursor: pointer;
`