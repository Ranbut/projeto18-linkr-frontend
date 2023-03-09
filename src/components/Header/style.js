import styled from "styled-components";

export const HeaderBody = styled.header `
width: 100%;
height: 72px;
background: #151515;
display:flex;
justify-content: space-between;
align-items: center;

section{
    min-height:45px;
    background-color:#E7E7E7;
    border-radius: 5px;
 
}
    span{
        padding: 10px 28px;
        font-family: 'Passion One';
        font-style: normal;
        font-weight: 700;
        font-size: 49px;
        line-height: 54px;
        letter-spacing: 0.05em;
        color: #FFFFFF;
    }
    input{
        width: 563px;
        height:45px;
        border-radius: 5px;
        ::placeholder{
            font-family: 'Lato';
            font-size: 19px;
            font-weight: 400;
            line-height: 23px;
            letter-spacing: 0em;
            text-align: left;
            color:#C6C6C6;
            padding-left:17px;  
        }
        button{
            background-color:transparent;
           
        }
    }
`;