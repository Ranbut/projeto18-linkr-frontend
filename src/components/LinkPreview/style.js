import styled from "styled-components";

export const PreviewBody = styled.div`
    display: flex;
    flex-direction: row;
    box-sizing: border-box;
    width: 95%;
    border: 1px solid #4D4D4D;
    border-radius: 11px;
    background: #171717;
    transition: 'background' 2s;

    &:hover{
        background: #262626;
    }
`

export const TitleLink = styled.div`
    margin-top: 24px;
    width: 70%;
    font-family: 'Lato';
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 19px;
    color: #CECECE;

    @media (max-width: 428px) {
        margin-top: 7px;
        font-size: 11px;
        line-height: 13px;
    }
`

export const DescriptionLink = styled.div`
    margin-top: 5px;
    width: 70%;
    font-family: 'Lato';
    font-style: normal;
    font-weight: 400;
    font-size: 11px;
    line-height: 13px;
    color: #9B9595;

    @media (max-width: 428px) {
        margin-top: 4px;
    }
`

export const URLLink = styled.div`
    margin-top: 13px;
    width: 70%;
    font-family: 'Lato';
    font-style: normal;
    font-weight: 400;
    font-size: 11px;
    line-height: 13px;
    color: #CECECE;

`

export const Items = styled.div`
    margin-left: 3%;
`

export const ImageLink = styled.div`
    width: 50%;
    justify-content: center;
    display: flex;
    flex-direction: column;

    img{
        width: 100%;
        object-fit: fit;
        aspect-ratio: 0.8;
        height: 155px;
        border-radius: 0px 12px 13px 0px;
    }
`;

export const SpacingMarging = styled.div`
    margin-top: 23px;
`;