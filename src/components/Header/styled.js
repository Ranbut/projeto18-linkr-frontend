import styled from "styled-components";

export const HeaderBody = styled.header`
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
`;

export const SectionSearch = styled.div`
    max-width: 560px;
    width: 50%;
    min-width: 350px;
    border-radius: 8px;
    background-color:#E7E7E7;
    height: 45px;

    @media (max-width: 650px) {
        display: none;
    }
`;

export const ContainerInput = styled.div`
    background-color: #FFFFFF;
    width: 50%;
    display: flex;
    justify-content: flex-start;
    align-items: center;
    border-radius: 8px;
    height: 45px;
    position: absolute;
    z-index: 1;
    input{
        width: 100%;
        height: 32px;
        border:none;
        padding-left: 10px;
        :focus{
            outline: none;
            background-color: none;
        }
    }
    svg{
        color: black;
        width: 21px;
        height: 21px;
        margin: 10px
    }
`;

export const ReturnSearch = styled.div`
    position: absolute;
    background-color: #E7E7E7;
    border-radius: 8px;
    top: 45px;
    display: flex;
    max-width: 50%;
    padding-top: 15px;
    width: 100%;
    display: flex;
    flex-direction: column;
`;

export const UsernameBox = styled.div`
    a{
        display: flex;
        justify-content: flex-start;
        align-items: center;
        text-decoration: none;      
        gap: 8px;
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

export const Logo = styled.p`
    font-family: 'Lato';
    font-style: normal;
    font-weight: 400;
    font-size: 26px;
    color: white;
`;