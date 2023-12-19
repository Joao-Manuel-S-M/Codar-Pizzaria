import styled from "styled-components";
import image from '../../assets/images/login.png'


export const Container = styled.div`
    display: flex;
    align-items: center; 
    justify-content: center; 
    height: 100vh;
    gap: 20px;
`

export const Card = styled.div`
    border: 1px solid #707070;
    display: flex;
    width: 800px;
    border-radius: 20px;
    padding: 8px;
    height: 650px;
    flex-wrap: wrap;


    .card__image-wrapper {
        background-image: url(${image});
        background-size: cover;
        background-position-x: -2px;
        max-width: 350px;
        width: 100%;
        height: 100%;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
    }

    .card__text-wrapper {
        font-family: Arial, Helvetica, sans-serif;
        text-align: center;
        color: #EF4C00;
        margin-top: 12px;
        display: flex;
        flex-direction: column;
        gap: 4px;
    }
    
    .card__title {
        font-weight: 400;
        font-size: 32px;
    }
    
    .card__subTitle {
        font-weight: 400;   
        font-size: 20px;
    }

    .card__icons-wrapper {
        display: flex;
        justify-content: center;
        gap: 13px;
        margin-bottom: 28px;
    }

    .card__icon {
        width: 112px;
        height: 38px;
    }

    .card__title-form {
        color: #B30733;
        font-family: Arial, Helvetica, sans-serif;
        font-weight: 600;
    }

    .card__line {
        border: 2px solid #EF4C00;
        width: 50px;
        border-radius: 10px;
    }

    .card__form-wrapper {
        display: flex;
        flex-direction: column;
        align-items: center;
        width: 56%;
    } 

    .card__title-wrapper {
        display: flex;
        flex-direction: column;
        align-items: center;
        gap: 5px;
        margin-top: 54px;
    }

    .card__input-wrapper {
        display: flex;
        flex-direction: column;
        align-items: center;
        gap: 20px;
    }

    .card__input {
        width: 300px;
        height: 40px;
        border: 1px solid #707070;
        border-radius: 20px;
        padding: 0 10px;
        font-size: 16px;
        font-family: Arial, Helvetica, sans-serif;
    }

    .card__button {
        background-color: #EF4C00;
        width: 264px;
        height: 34px;  
        border-radius: 36px;
        font: normal normal normal 18px/35px Josefin Sans; 
        color: #FFFFFF;
        border: none;
        cursor: pointer;
        margin-top: 100px;
    }
    

    .card__separator {
        width: 85%;
        border: 0.01em solid #dadde1;
        margin: 20px 0 30px 0;
    }

    .card__copy {
        font: normal normal normal 14px/34px Josefin Sans;
        color: #000000;
        display: flex;
        flex-direction: column;
        justify-content: end;
        height: 100%;
        width: 90%;
        text-align: end;
    }

    @media (max-width: 833px) {
        height: auto;
        justify-content: center;


        .card__image-wrapper {
            background-position-x: 0px;
            background-position-y: -183px;
            max-width: 100%;
            height: 250px;
            margin-top: 20px;
            border-radius: 11px;
        }

        .card__separator {
            width: 100%;
        }

        .card__copy {
            text-align: center;
            justify-content: center;
            margin-top: 20px;
        }
    }

`