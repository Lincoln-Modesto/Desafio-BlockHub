import styled from "styled-components";

export const Container = styled.div`
  margin: 0 32px;
  padding: 32px;
  background-color: ${({ theme }) => theme.colors.primary.lighter};
  border-radius: 20px;
  width: 100%;
  margin-bottom: 32px;
  height: 70vh;

    .container-inputs{
      display: flex;
      justify-content: space-between;
      align-items: center;
      margin-top: 32px;
    }

    .container-cards{
      max-height: max-content;
      overflow: auto; 
      height: calc(70vh - 250px);
    }

    .container-data{
      display: flex;
      justify-content: space-between;
      align-items: center;
    }

    h3{
      margin: 32px 0;
      color: ${({ theme }) => theme.colors.gray[200]};
    }

    h4{
      margin-bottom: 5px;
      color: ${({ theme }) => theme.colors.gray[100]};
    }
`

export const ContainerSecondary = styled.div`
  margin: 32px;
  padding: 32px;
  background-color: ${({ theme }) => theme.colors.primary.lighter};
  border-radius: 20px;
  width: 100%;

  .content-container-project{
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-top: 16px;
  }

  h3{
      color: ${({ theme }) => theme.colors.gray[200]};
    }
`

export const ContainerMain = styled.main`
  display: flex;
  box-sizing: content-box;
  
  .container-project{
    display: flex;
    flex-direction: column;
  }
`