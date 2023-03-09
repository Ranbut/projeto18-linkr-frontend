import styled from "styled-components";

export const HeaderBody = styled.header `
display: flex;
justify-content: space-between;
align-items: center;
width: 100%;
height: 72px;
background: #151515;
display:flex;
justify-content: space-between;
align-items: center;

    h4{
        padding-left: 28px;
        width: 108px;
        height: 54px;
        font-family: 'Passion One';
        font-style: normal;
        font-weight: 700;
        font-size: 49px;
        line-height: 54px;
        letter-spacing: 0.05em;
        color: #FFFFFF;
    }

    .middle{
        height:45px;
        background-color:#FFFFFF;
        border-radius: 5px;

        input{
        width: 563px;
        height:45px;
        border: none;

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
        }

        button{
            background-color:transparent;
            border: none;
            font-size: 20px;
            color: #C6C6C6;        
                
        }
    }

    .right{
        display: flex;
        align-items: center;
        color: #FFFFFF;
        margin-right:18px;
        font-size:26px;
        
        img{
            height: 52px;
            width: 52px;
            border-radius: 100%;
            margin-left: 14px;
        }

    }

    @media (max-width: 375px) {

        .middle{
            display: none;
        }


    }

 
`;