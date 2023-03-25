import styled from "styled-components";

export const PublicationCard = styled.div`
    display: flex;
    flex-direction: row;

    width: 611px;
    height: 209px;

    margin-top: 43px;

    background: #FFFFFF;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    border-radius: 16px;

    @media (max-width: 610px) {
        display: flex;
        flex-direction: column;
        align-items: center;
        width: 100vw;
        height: 200px;
        border-radius: 0px;
        padding: 0px;
    }
`;

export const UserAvatar = styled.div`
    img{
        margin: 18px 16px;

        width: 50px;
        height: 50px;
        border-radius: 26.5px;
    }
    @media (max-width: 610px) {
        display: none;
    }
`;

export const FormBody = styled.div`
    h6{
        margin-top: 21px;

        width: 445px;
        height: 40px;

        font-family: 'Lato';
        font-style: normal;
        font-weight: 300;
        font-size: 20px;
        line-height: 24px;
        color: #707070;
    }
    @media (max-width: 610px) {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        width: 100%;
        h6 {
            width: 90%;
        }
    }
`;


export const Form = styled.form`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
    width: 90%;
`;

export const Inputs = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-end;
    gap: 2px;

    input{
        margin-top: 5px;
        width: 503px;
        height: 30px;

        background: #E9E9E9;
        border-radius: 5px;
        border: none;

        padding-inline: 13px;
    }

    input:nth-child(2) {
        height: 55px;
    }

    button{
        margin-top: 5px;
        width: 112px;
        height: 31px;

        background: #1877F2;
        border-radius: 5px;
        border: none;

        font-family: 'Lato';
        font-style: normal;
        font-weight: 700;
        font-size: 14px;
        line-height: 17px;

        color: #FFFFFF;
    }

    @media (max-width: 610px) {
        width: 100%;
        input{
            width: 100%;
            height: 30px;
            margin-left: 0;
        }

        button{
            font-size: 13px;
            line-height: 16px;
            text-align: center;

            color: #FFFFFF;
            width: 112px;
            height: 22px;
            margin-top: 10px;
        }
  }
`;