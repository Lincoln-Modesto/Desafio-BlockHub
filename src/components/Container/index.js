import styled from "styled-components";

export const Container = styled.div`
  margin-top: 32px;
  padding: 32px;
  background-color: ${({ theme }) => theme.colors.primary.lighter};
  border-radius: 20px;
  width: 100%;
  margin-bottom: 32px;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);

    .container-inputs{
      display: flex;
      justify-content: space-between;
      align-items: center;
      margin-top: 32px;
    }

    .container-cards{
      max-height: max-content;
      overflow: auto; 
      height: calc(75vh - 250px);
    }

    .container-data{
      display: flex;
      justify-content: space-between;
      align-items: center;
    }

    h3{
      margin: 32px 0;
      color: ${({ theme }) => theme.colors.primary[200]};
    }

    h4{
      margin-bottom: 5px;
      color: ${({ theme }) => theme.colors.gray[100]};
    }
`

export const ContainerSecondary = styled.div`
  margin-top: 32px;
  padding: 32px;
  background-color: ${({ theme }) => theme.colors.primary.lighter};
  border-radius: 20px;
  width: 100%;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  
  .content-container-project{
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-top: 16px;
  }

  .content-inputs{
    > input{
      margin-right: 10px;
    }
  }

  h3{
      color: ${({ theme }) => theme.colors.gray[200]};
    }
`

export const ContainerMain = styled.main`
  display: flex;
  box-sizing: content-box;
  justify-content: center;

  .container-project{
    display: flex;
    flex-direction: column;
    width: 100%;
    padding: 0 32px;
  }
`