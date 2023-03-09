import styled from "styled-components";

export const PreviewBody = styled.div`
    margin-top: 10px;

    display: flex;
    flex-direction: row;
    box-sizing: border-box;

    width: 503px;
    height: 155px;

    border: 1px solid #4D4D4D;
    border-radius: 11px;

    background: #171717;

    transition: background 2s;

    &:hover{
        background: #262626;
    }

    @media (max-width: 428px) {
        width: 278px;
        height: 158px;
    }
`

export const TitleLink = styled.div`
    margin-top: 24px;

    width: 249.98px;
    height: 38px;

    font-family: 'Lato';
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 19px;

    color: #CECECE;

    @media (max-width: 428px) {
        margin-top: 7px;

        width: 138.16px;
        height: 26px;
        font-size: 11px;
        line-height: 13px;
    }
`

export const DescriptionLink = styled.div`
    margin-top: 5px;

    width: 302.82px;
    height: 39px;

    font-family: 'Lato';
    font-style: normal;
    font-weight: 400;
    font-size: 11px;
    line-height: 13px;

    color: #9B9595;

    @media (max-width: 428px) {
        margin-top: 4px;
        width: 175px;
        height: 44px;
    }
`

export const URLLink = styled.div`
    margin-top: 13px;

    width: 263.19px;
    height: 13px;

    font-family: 'Lato';
    font-style: normal;
    font-weight: 400;
    font-size: 11px;
    line-height: 13px;

    color: #CECECE;

    @media (max-width: 428px) {
        margin-top: 4px;
        width: 145.46px;
        height: 22px;
    }
`

export const Items = styled.div`
    margin-left: 19.31px;
    @media (max-width: 428px) {
        margin-left: 11px;
    }
`

export const ImageLink = styled.div`
    margin-left: 27.44px;

    img{
        width: 153.44px;
        height: 155px;
        border-radius: 0px 12px 13px 0px;
    }

    @media (max-width: 428px) {
        margin-left: -5px;

        img{
            width: 95px;
        }
    }
`