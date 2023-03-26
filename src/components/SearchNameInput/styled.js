import styled from "styled-components";

export const SectionSearch = styled.div`
    display: ${props => props.display === "mobile" ? 'none' : 'unset'};
    border-radius: 8px;
    height: 45px;
    width: 40%;
    max-width: 560px;

    @media (max-width: 610px) {
        display: ${props => props.display === "mobile" ? 'block' : 'none'};
        width: 97%;
    }
`;

export const ContainerInput = styled.div`
    background-color: #FFFFFF;
    display: flex;
    justify-content: flex-start;
    align-items: center;
    border-radius: 8px;
    height: 45px;
    width: 100%;
    position: relative;
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

    @media (max-width: 610px) {
        height: 45px;
        margin-top: 20px;
    }
`;

export const ReturnSearch = styled.div`
    position: absolute;
    background-color: ${(props) => props.size === 0 ? 'unset' : '#E7E7E7'};
    border-radius: 8px;
    width: 40%;
    max-width: 560px;
    top: 45px;
    display: flex;
    padding: 20px 0 10px 0;
    display: flex;
    flex-direction: column;
    z-index: 0;
    @media (max-width: 610px) {
        top: 120px;
        width: 97%;
    }
`;

export const UsernameBox = styled.div`
    a{
        display: flex;
        justify-content: flex-start;
        align-items: center;
        text-decoration: none;      
        gap: 10px;
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

export const Follow =styled.span`
color: #C5C5C5;
font-family: 'Lato';
font-style: normal;
font-weight: 400;
font-size: 19px;
line-height: 23px;
`;