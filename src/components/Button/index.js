import styled from "styled-components";

export const Button = styled.button`
  background-color: ${({ theme }) => theme.colors.primary.main};
  color: ${({ theme }) => theme.colors.primary.lighter};
  border-radius: 20px;
  font-weight: bold;
  font-size: 16px;
  height: 60px;
  width: ${({ small }) => (small ? '200px' : '350px')};
  border: none;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  opacity: 0.8;
  box-shadow: 0px 1.13px 2.26px 0px #9F2EDD0D;

  box-shadow: 0px 3.79px 7.59px 0px #9F2EDD14;

  box-shadow: 0px 17px 34px 0px #9F2EDD21;

  :hover{
    opacity: 1;
  }
`