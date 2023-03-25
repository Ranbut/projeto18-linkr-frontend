import styled from "styled-components";

export const PreviewBody = styled.div`
    display: flex;
    justify-content: space-between;
    width: 95%;
    border: 1px solid #4D4D4D;
    border-radius: 11px;
    background: #171717;
    transition: 'background' 2s;
    :hover{
        background: #262626;
    }
`;

export const TitleLink = styled.div`
    width: 95%;
    font-family: 'Lato';
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 19px;
    color: #CECECE;

    @media (max-width: 428px) {
        font-size: 11px;
        line-height: 13px;
    }
`;

export const DescriptionLink = styled.div`
    width: 95%;
    font-family: 'Lato';
    font-style: normal;
    font-weight: 400;
    font-size: 11px;
    line-height: 13px;
    color: #9B9595;
`;

export const URLLink = styled.div`
    width: 95%;
    font-family: 'Lato';
    font-style: normal;
    font-weight: 400;
    font-size: 11px;
    line-height: 13px;
    color: #CECECE;
`;

export const Items = styled.div`
    width: 70%;
    box-sizing: border-box;
    display: flex;
    flex-direction: column;
    padding: 15px 0 15px 15px;
    gap: 15px;
`;

export const ImageLink = styled.div`
    width: 30%;
    justify-content: center;
    display: flex;
    flex-direction: column;

    img{
        width: 100%;
        object-fit: fit;
        height: 100%;
        border-radius: 0px 12px 13px 0px;
    }
`;