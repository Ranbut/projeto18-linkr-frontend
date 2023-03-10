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

export const SectionSearch = styled.div`
max-width: 563px;
width: 50%;
min-width: 350px;
display: flex;
flex-direction: column;
justify-content: flex-start;
align-items: center;
border-radius: 8px;
background-color:#E7E7E7;
`;

export const ContainerInput = styled.div`
background-color: #FFFFFF;
width: 99.8%;
display: flex;
justify-content: flex-start;
align-items: center;
border-radius: 8px;
input{
    width: 100%;
    height: 32px;
    border:none;
    padding-left: 10px;
}
svg{
    color: black;
    
    width: 21px;
    height: 21px;
    margin: 10px
}
`;

export const ReturnSearch = styled.div`
width: 100%;
display: flex;
flex-direction: column;
margin-bottom: 10px;
`;

export const UsernameBox = styled.div`
a{
    display: flex;
    justify-content: flex-start;
    align-items: center;
    text-decoration:none;
    
    margin: 8px;
}
span{
    font-family: 'Lato';
    font-style: normal;
    font-weight: 400;
    font-size: 19px;
    line-height: 23px;
    
    color: #515151;
}
`;

export const IconImage = styled.img`
width: 42px;
height: 42px;
border-radius: 26.5px;
margin: 5px;
`;