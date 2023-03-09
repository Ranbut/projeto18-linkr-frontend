import styled from "styled-components";

export const Body = styled.div`
    width: 100%;
    height: 100%;
    background-color: #333333;
    position: absolute;
    top: 0;
    left: 0;
`;

export const PublicationPageBody = styled.div`
    display: flex;
    justify-content: center;
    gap: 50px;
    padding: 20px 30%;

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

    
    @media (max-width: 1024px) {
        padding: 20px 20%;
    }

    @media (max-width: 810px) {
        padding: 20px 13%;
    }

    @media (max-width: 764px) {
        padding: 20px 10%;
    }

    @media (max-width: 640px) {
        padding: 20px 2%;
    }

    @media (max-width: 428px) {
    padding: 0px;

    h4{
        display: position;
        position: relative;
        top: 19px;
        margin-left: 17px;
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