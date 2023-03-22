import styled from 'styled-components';


export default function Comment(){
    return(
        <Container data-test="comment" >

            <img alt='userPicture' src='https://www.thedigitalfix.com/wp-content/sites/thedigitalfix/2023/01/the-last-of-us-tv-series-zombies-infected-explained-1.jpg' />

            <div className='right'>

                <div className='top'>
                    <h1>Name of the user </h1>
                    <h2> - Relationship</h2>
                </div>

            <h3>Message itself</h3>
            </div>
           

        </Container>
        
    )
}

const Container = styled.div`
    display: flex;
    align-items: center;
    border-bottom: 1px #353535 solid;
    width: 90%;
    margin:10px 40px 1px 40px;
    padding: 12px 12px 16px 0;

    img{
        height: 45px;
        width: 45px;
        border-radius: 304px;
        margin-right:22px;
    }

    .right{
        display: flex;
        flex-direction: column;

        .top{
            display: flex;
            margin-bottom: 6px;

            h1{
                font-family: 'Lato';
                font-style: normal;
                font-weight: 700;
                font-size: 16px;
                line-height: 17px;
                color: #F3F3F3;
                margin-right: 6px;
            }

            h2{
                font-family: 'Lato';
                font-weight: 400;
                font-size: 14px;
                line-height: 17px;
                color: #565656;
            }
        }

        h3{
            font-family: 'Lato';
            font-weight: 400;
            font-size: 14px;
            line-height: 17px;
            color: #ACACAC;
        }
    }
    
`