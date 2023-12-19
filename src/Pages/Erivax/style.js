import styled from "styled-components";
import principal from '../../assets/images/erivax.png'

export const Erivax = styled.section`
    .erivax__banner {
        background-image: url(${principal});
        background-repeat: no-repeat;
        display: flex;
        flex-direction: column;
        background-position: center;
        background-size: cover;
        max-width: 1085px;
        height: 375px;
        margin: 0 auto;
        margin-top: 30px;
        border-radius: 25px;
        justify-content: center;
        /* align-items: center; */
        padding-left: 20px;
        font-family: Arial, Helvetica, sans-serif;
        gap: 70px;
    }

    .erivax__text-wrapper {
        display: flex;
        flex-direction: column;
        align-items: end;
        max-width: 98%;
    }
    
    .erivax__text-title {
        color: #B30733;
        font-weight: 400;
        font-size: 35px;
        margin-bottom: 10px;
        margin-right: 150px;
    }
    
    .erivax__text-subTitle {
        color: #B30733;
        font-size: 25px;
    }

    .erivax__infs-wrapper {
        display: flex;
        flex-direction: column;
        align-items: end;
        max-width: 96%;
    }

    .erivax__time {
        color: #FF4A40;
        font-weight: 400;
        font-size: 20px;
        margin-bottom: 10px;
    }

    .erivax__time--color {
       color: #8A98BA;
    }

    .erivax__label-banner {
        color: #2e4765b2;
        font-weight: 400;
        font-size: 15px;
        margin-bottom: 10px;
        background-color: #9dabcc3f;
        padding: 7px 20px;
        border-radius: 20px;
        text-align: center;
    }

    .erivax__labelWrapper {
        display: flex;
        gap: 20px;
    }

    .erivax__time-label {
        display: flex;
        flex-direction: column;
        align-items: center;
        gap: 20px;
    }
 
    










    .erivax__title-shop {
        max-width: 1100px;
        margin: 30px auto;
        color: #B30733;
        font-family: Arial, Helvetica, sans-serif;
        font-weight: 600;
        font-size: 20px;
    }

    .erivax__restaurant-wrapper {
        margin-top: 30px;
        display: flex;
        max-width: 1100px;
        margin: 0 auto;
        justify-content: center;
        column-gap: 52px;
        row-gap: 30px;
        flex-wrap: wrap;
        margin-bottom: 40px;
    }

    .erivax__restaurant {
        background: hsl(0, 0%, 100%);
        border-radius: 15px;
        width: 330px;
        font-family: Arial, Helvetica, sans-serif;
        border: 1px solid #2E476533;
    }
    
    .erivax__restaurant-capa {
        border-radius: 15px 15px 0 0;
        width: 331px;
        height: 150px;
    }

    .erivax__name-restaurant {
        font-weight: 400;
        font-size: 18px;
        color: #B30733;
        margin: 10px 0 10px 15px;
    }




    @media (max-width: 820px) {
        padding: 0 15px;
        .erivax__banner {
            align-items: center;
        }

        .erivax__restaurant-wrapper {
            justify-content: center;
            gap: 70px;
            row-gap: 40px;
        }

        .erivax__time {
            color: #ff0d00;
            text-align: center;
        }

        .erivax__time--color {
            color: #fff;
        }

        .erivax__text-title {
            margin: 0 auto;
        }

        .erivax__text-subTitle {
            margin: 0 auto;
            text-align: center;
        }

        .erivax__label-banner {
            color: #fff;
            background-color: #FF4A40;
        }

        .erivax__title-shop {
            text-align: center;
        }
    }

`