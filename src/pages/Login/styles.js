import styled from "styled-components";

export const Container = styled.div`
  padding: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  justify-content: center;
`

export const Content = styled.div`
  margin-bottom: 50px;
  margin-top: 10px;
`

export const TextRegister = styled.h3`
  margin-top: 50px;
  font-weight: lighter;
`

export const Register = styled.a`
  font-weight: bold;
  color: ${({theme}) => theme.colors.primary.dark};
  cursor: pointer;

  :hover{
    text-decoration: underline;
  }
`