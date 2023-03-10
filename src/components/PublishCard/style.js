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

    @media (max-width: 428px) {
    width: 430px;
    height: 164px;
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
    @media (max-width: 428px) {
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
    @media (max-width: 428px) {
        h6{
            margin-left: 9%;
        }
  }
  @media (max-width: 370px) {
        h6{
            margin-left: 15%;
        }
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

    @media (max-width: 428px) {

        input{
            width: 345px;
            height: 30px;
            margin-left: 3%;
        }

        button{
            font-size: 13px;
            line-height: 16px;
            text-align: center;

            color: #FFFFFF;
            width: 112px;
            height: 22px;
            margin-left: 55%;
        }
  }

  @media (max-width: 370px) {
        input{
            margin-left: 9.5%;
        }

        button{
            margin-left: 62%;
        }
    }
`;