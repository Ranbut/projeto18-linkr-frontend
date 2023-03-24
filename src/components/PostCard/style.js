import styled from "styled-components";


export const PostContainer = styled.div`
    display: flex;
    flex-direction: column;
    width: 611px;

    margin-top: 43px;

    background: #1e1e1e;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    border-radius: 16px;
    box-sizing: border-box;

`

export const PostBody = styled.div`
    display: flex;
    flex-direction: row;
    box-sizing: border-box;

    /* width: 611px; */

    /* margin-top: 43px; */

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
    gap: 10px;

    img{
        margin: 18px 0 0 16px;
        width: 50px;
        height: 50px;
        border-radius: 26.5px;
    }

    p{
        cursor: default;
        /* margin-top: 4.01px; */
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
    box-sizing: border-box;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 350px;
    height: 150px;
    
    h2 {
        font-family: 'Lato';
        font-style: normal;
        font-weight: 700;
        font-size: 21px;
        line-height: 31px;
        text-align: center;
        color: #FFFFFF;
    }

    div {
        display: flex;
        gap: 10px;
    }

    button{
        margin-top: 20px;
        width: 110px;
        height: 30px;
        display: flex;
        justify-content: center;
        align-items: center;
        border: none;
    }
`;

export const ModalButton = styled.button`
    font-family: 'Lato';
    font-style: normal;
    font-weight: 400;
    font-size: 15px;
    line-height: 13px;
    border-radius: 5px;
    color: ${props => props.type === "cancel" ? "#1877F2" : "#FFFFFF"};
    background: ${props => props.type === "cancel" ? "#FFFFFF" : "#1877F2"};
`;

export const customStyles = {
    content: {
        top: '50%',
        left: '50%',
        right: 'auto',
        bottom: 'auto',
        marginRight: '-50%',
        transform: 'translate(-50%, -50%)',
        background: '#333333',
        'borderRadius': '30px'
    },
};

export const ShareHeader = styled.div`
    display: flex;
    align-items: center;
    gap: 10px;
    margin: 5px 0 5px 15px;
    font-family: 'Lato', sans-serif;
    font-style: normal;
    font-weight: 400;
    font-size: 13px;
    line-height: 13px;
    color: #FFFFFF;
    svg {
        font-size: 30px;
    }
`;
