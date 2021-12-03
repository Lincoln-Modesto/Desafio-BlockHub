import styled from "styled-components";

export const Container = styled.div`
  margin: 32px;
  padding: 32px;
  background-color: ${({theme}) => theme.colors.primary.lighter};
  border-radius: 20px;
  width: 100%;
  height: 100vh;

    .container-inputs{
      display: flex;
      justify-content: space-evenly;
      align-items: center;
      margin-top: 32px;
    }

    .container-cards{
      max-height: max-content;
      overflow: auto; 
      height: calc(100vh - 250px);
    }

    h3{
      margin: 32px 0;
      color: ${({theme}) => theme.colors.gray[900]};
    }
`

export const SideBar = styled.aside`
  margin: 32px;
  padding: 16px;
  background-color: ${({theme}) => theme.colors.primary.lighter};
  border-radius: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 350px;
  height: 100vh;

    .container-item{
      display: flex;
      flex-direction: column;
      justify-content: start;
    }
`