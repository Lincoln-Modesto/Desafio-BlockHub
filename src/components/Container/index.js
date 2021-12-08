import styled from "styled-components";

export const Container = styled.div`
  margin-bottom: 32px;
  padding: 32px;
  background-color: ${({ theme }) => theme.colors.primary.lighter};
  border-radius: 10px;
  width: 100%;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);

    .container-inputs{
      display: flex;
      justify-content: space-between;
      align-items: center;
      margin: 32px 0;
    }

    .container-cards{
      max-height: max-content;
    }

    .container-project{
      margin: 32px 0;

      > div{
       display: flex;
       align-items: center;
       
       h3{
         margin-right: 32px;
       }

       > img{
         margin-right: 10px;
         cursor: pointer;
         background-color: ${({ theme }) => theme.colors.primary.light};
         border-radius: 10px;
         padding: 5px;
         height: max-content;
       }
      }
    }

    .content-data{
      display: flex;
      justify-content: space-between;
      align-items: center;

      > div{
        display: flex;

        > button{
          margin-right: 10px;
        }
      }
    }

    .remove{
        background-color: ${({ theme }) => theme.colors.secondary.backgroundRed} 
        !important; 
    }

    .container-filter-data{
      display: block !important;
    }

    .charts{
      display: flex;
      justify-content: center;
      align-items: center;
    }

    .pie{
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      width: 30%;
      height: 30%;
    }

    .bar{
      margin: 0 auto;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      width: 50%;
      height: 50%;
    }

    h3{
      margin: 32px 0;
      color: ${({ theme }) => theme.colors.primary[200]};
    }

    h4{
      margin-bottom: 5px;
      color: ${({ theme }) => theme.colors.gray[200]};
    }
`

export const ContainerSecondary = styled.div`
  margin: 32px 0;
  padding: 32px;
  background-color: ${({ theme }) => theme.colors.primary.lighter};
  border-radius: 10px;
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