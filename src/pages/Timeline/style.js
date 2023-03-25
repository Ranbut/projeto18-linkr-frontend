import styled from "styled-components";

export const PageBody = styled.div`
    display: flex;
    justify-content: center;
    gap: 50px;
    box-sizing: border-box;
    
    h4{
        width: 145px;
        height: 64px;

        font-family: 'Oswald';
        font-style: normal;
        font-weight: 700;
        font-size: 43px;
        line-height: 64px;

        color: #FFFFFF;
    }

    h4{
        display: position;
        position: relative;
        top: 19px;
        margin-left: 17px;
    }

    @media (max-width: 1000px) {
        max-width: unset;
        width: 100vw;
        h4{
            display: position;
            position: relative;
            top: 19px;
            margin-left: 50px;
        }
    }
`;

export const Loading = styled.div`
    margin-top: 20px;

    height: 64px;

    font-family: 'Oswald';
    font-style: normal;
    font-weight: 700;
    font-size: 43px;
    line-height: 64px;

    color: #FFFFFF;
`;

export const TrendingBox = styled.div`
    display: flex;
    flex-direction: column;
    gap: 15px;
    box-sizing: border-box;
    min-width: 301px;
    height: 400px;
    color: #FFFFFF;

    background: #171717;
    border-radius: 16px;
    margin-top: 40px;

    @media (max-width: 1000px) {
        display: none;   
    }
`;

export const TrendingTitle = styled.h3`
    font-family: 'Oswald';
    padding: 10px 20px;
    font-style: normal;
    font-weight: 700;
    font-size: 27px;
    line-height: 40px;
    border-bottom: 1px solid #484848;
    
    :hover{
        cursor: default;
    }
`;

export const Hashtag = styled.p`
    padding: 5px 20px;
    font-family: 'Lato';
    font-style: normal;
    font-weight: 700;
    font-size: 19px;
    line-height: 23px;
    letter-spacing: 0.05em;

    :hover{
        cursor: pointer;
    }
`;

export const LoadPost = styled.div`
    display: flex;  
    margin-top: 40px;
    max-width: 611px;
    width: 100%;
    height: 61px;

    background: #1877F2;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    border-radius: 16px;

    text-align: center;
    font-family: 'Lato';
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 19px;

    color: #FFFFFF;

    div{
        margin: auto auto;
    }

    :hover{
        cursor: pointer;
    }
`;