import { createGlobalStyle } from 'styled-components'

export default createGlobalStyle`
    *{
        margin: 0;
        padding: 0;
        font-family: 'Inter', sans-serif;
        box-sizing: border-box;
    }
    body{
        font-size: 16px;
        background-color: ${({ theme }) => theme.colors.background};
        color: ${({ theme }) => theme.colors.gray[900]};
        box-sizing: content-box;
        overflow-x: hidden;
    }
    button{
        cursor: pointer;
    }
`