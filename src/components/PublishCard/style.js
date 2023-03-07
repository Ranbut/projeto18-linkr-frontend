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
`;

export const UserAvatar = styled.div`
    img{
        margin: 18px 16px;

        width: 50px;
        height: 50px;
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
`;


export const Form = styled.form`
    display: flex;
    flex-direction: column;
`;

export const Inputs = styled.div`

    input{
        margin-top: 5px;
        width: 503px;
        height: 30px;

        background: #E9E9E9;
        border-radius: 5px;
        border: none;

        padding-inline: 13px;

        ::-webkit-input-placeholder { /* Edge */
        margin-left: 13px;
        }

        :-ms-input-placeholder { /* Internet Explorer 10-11 */
        margin-left: 13px;
        }

        ::placeholder {
        margin-left: 13px;
        }
    }

    button{
        margin-top: 5px;
        margin-left: 74%;

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
`;