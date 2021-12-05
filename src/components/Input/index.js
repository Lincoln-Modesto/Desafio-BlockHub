import styled from "styled-components";

export const Input = styled.input`
  background-color: ${({theme}) => theme.colors.primary.lighter};
  border: 1px solid ${({theme}) => theme.colors.gray[100]};
  color: ${({theme}) => theme.colors.gray[100]};
  padding: 16px;
  border-radius: 20px;
  width: ${({fullWidth}) => (fullWidth ? '100%' : '350px')};
  margin-bottom: ${({noMargin}) => (noMargin ? '0' : '24px')};
  font-size: 16px;
  height: 60px;

  :focus{
    box-shadow: 0 0 0 0;
    border: 1px solid ${({theme}) => theme.colors.gray[200]};
    outline: 0;
  }
`
export const InputSmall = styled.input`
  background-color: ${({theme}) => theme.colors.primary.lighter};
  border: 1px solid ${({theme}) => theme.colors.gray[100]};
  color: ${({theme}) => theme.colors.gray[100]};
  padding: 16px;
  border-radius: 20px;
  width: max-content;
  margin-bottom: ${({noMargin}) => (noMargin ? '0' : '24px')};
  font-size: 16px;
  height: 60px;

  :focus{
    box-shadow: 0 0 0 0;
    border: 1px solid ${({theme}) => theme.colors.gray[200]};
    outline: 0;
  }
`
