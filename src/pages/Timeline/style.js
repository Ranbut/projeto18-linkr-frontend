import styled from "styled-components";

export const PageBody = styled.div`
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