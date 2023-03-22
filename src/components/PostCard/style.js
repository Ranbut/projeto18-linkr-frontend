import styled from "styled-components";


export const PostContainer = styled.div`
    display: flex;
    flex-direction: column;
`

export const PostBody = styled.div`
    display: flex;
    flex-direction: row;

    width: 611px;

    margin-top: 43px;

    background: #171717;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    border-radius: 16px;

    font-family: 'Lato';

    @media (max-width: 428px) {
    width: 430px;
    border-radius: 0px;
  }
`;

export const PostInfo = styled.div`

    h6{
        margin-top: 19px;

        width: 502px;
        height: 23px;

        font-style: normal;
        font-weight: 400;
        font-size: 19px;
        line-height: 23px;

        color: #FFFFFF;
    }

    p{
        margin-top: 6px;

        width: 502px;

        font-style: normal;
        font-weight: 400;
        font-size: 17px;
        line-height: 20px;

        color: #B7B7B7;
    }

    @media (max-width: 428px) {
        width: 275px;
    }
`;

export const UserAvatar = styled.div`
    display: flex;
    flex-direction: column;

    img{
        margin: 18px 16px;

        width: 50px;
        height: 50px;
        border-radius: 26.5px;
    }

    p{
        margin-top: 4.01px;
        font-family: 'Lato';
        font-style: normal;
        font-weight: 400;
        font-size: 11px;
        line-height: 13px;
        text-align: center;
        color: #FFFFFF;
    }

    @media (max-width: 428px) {
        margin-left: 25px;
    }
`;

export const SpacingMarging = styled.div`

    margin-top: 30px;

`;

export const Options = styled.div`
    display: flex;
    flex-direction: row;
`;

export const EditField = styled.textarea`
    margin-top: 7px;
    width: 503px;
    height: 44px;
    background: #E9E9E9;
    border-radius: 5px;
    border: none;
    resize: none;
`;

export const MessageText = styled.span`
    width: 300px;
    @media (max-width: 428px) {
        display: inline-block;
    }
`;

export const ModalBox = styled.div`
    display: flex;
    flex-direction: column;
    font-family: 'Lato';
    font-style: normal;
    font-weight: 400;
    font-size: 21px;
    line-height: 13px;
    align-items: flex-end;

    div {
        display: flex;
        gap: 10px;
    }

    button{
        margin-top: 20px;
        width: 70px;
        display: flex;
        justify-content: center;
    }
`;

