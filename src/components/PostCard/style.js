import styled from "styled-components";

export const PostBody = styled.div`
    display: flex;
    flex-direction: row;

    width: 611px;

    margin-top: 43px;

    background: #171717;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    border-radius: 16px;

    font-family: 'Lato';
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
`

export const UserAvatar = styled.div`
    img{
        margin: 18px 16px;

        width: 50px;
        height: 50px;
    }
`

export const SpacingMarging = styled.div`

    margin-top: 30px;

`