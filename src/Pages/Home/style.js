import styled from "styled-components";
import principal from '../../assets/images/principalHome.png'

export const Home  = styled.section`

    .home__banner {
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
        padding-left: 20px;
    }

    .home__text-title {
        font-family: Arial, Helvetica, sans-serif;
        color: #fff;
        font-weight: 400;
        font-size: 40px;
        margin-bottom: 10px;
    }

    .home__icon {
        width: 150px;
        height: 150px;
    }

    .home__icons-wrapper {
        display: flex;
        gap: 20px;
        flex-wrap: wrap;
    }

    .home__cardapio-wrapper {
        display: flex;
        max-width: 1085px;
        justify-content: space-between;
        align-items: center;
        margin: 0 auto;
        margin-top: 40px;
    }

    .home__cardapio-title {
        color: #B30733;
        font-family: Arial, Helvetica, sans-serif;
        font-weight: 600;
        font-size: 23px;
    }

    .home__input-wrapper {
        display: flex;
        align-items: center;
        gap: 10px;
        background-color: #fff;
        padding: 10px 20px;
        border-radius: 20px;
    }

    .home__input {
        border: none;
        outline: none;
        width: 100%;
        font-family: Arial, Helvetica, sans-serif;
        font-weight: 400;
        font-size: 17px;
        color: #2E4765;
        
    }

    .home__search-icon {
        color: #B30733;
        width: 23px;
        height: 23px;
    }

    .home__search-wrapper {
        display: flex;
        align-items: center;
        gap: 10px;
    }

    .home__settings-icon {
        color: #fff;
        width: 23px;
        height: 23px;
        background-color: #EF4C00;
        padding: 10px;
        border-radius: 100%;
    }

    .home__menu-filter {
        display: flex;
        align-items: center;
        gap: 30px;
        margin: 0 auto;
        max-width: 1080px;
        margin-top: 20px;
    }

    .home__button-filter {
        font-family: Arial, Helvetica, sans-serif;
        color: #2E4765;
        background-color: #fff;
        padding: 10px 20px;
        border-radius: 20px;
    }

    .home__button-filter--active {
        color: #fff;
        background-color: #EF4C00;
        padding: 10px 20px;
    }

    .home__stores {
        max-width: 1080px;
        margin: 0 auto;
        margin-top: 50px;
    }

    .home__title-stores-wrapper {
        display: flex;
        align-items: center;
    }

    .home__title-stores {
        font-family: Arial, Helvetica, sans-serif;
        color: #B30733;
        margin-right: 20px;
    }

    .home__line {
        width: 100%;
        border: 1px solid #31313131;
        border-width: 100%;
    }

    .home__restaurant-wrapper {
        margin-top: 30px;
        display: flex;
        max-width: 1080px;
        justify-content: space-between;
        flex-wrap: wrap;
    }

    .home__restaurant {
        background: hsl(0, 0%, 100%);
        border-radius: 15px;
        width: 330px;
        font-family: Arial, Helvetica, sans-serif;
        border: 1px solid #2E476533;
    }
    
    .home__restaurant-capa {
        border-radius: 15px 15px 0 0;
        width: 331px;
        height: 186px;
    }

    .home__name-restaurant {
        font-weight: 400;
        font-size: 18px;
        color: #B30733;
    }

    .home__name-icon-wrapper {
        display: flex;
        align-items: center;
        width: 90%;
        margin: 0 auto;
        justify-content: space-between;
        margin-top: 8px;
    }

    .home__heart-icon {
        width: 25px;
        height: 25px;
        color: #FF0043;
    }

    .home__feedbacks-wrapper {
        display: flex;
        gap: 20px;
        width: 90%;
        margin: 0 auto;
        margin-top: 10px;
        color: #2E4765;
    }

    .home__star-icon {
        color: #EF4C00;
    }

    .home__star-icon--opacity {
        color: #EF4C00;
        opacity: 40%;
    }

    .home__label-wrapper {
        display: flex;
        width: 90%;
        justify-content: space-between;
        align-items: center;
        margin: 20px auto;
        color: #2e4765b7;
    }

    .home__label {
        display: flex;
        gap: 10px;
    }

    .home__label-item {
        font-size: 13px;
        background-color: #3b4e661f;
        padding: 3px 10px;
        border-radius: 10px;
    }

    .home__time {
        display: flex;
        gap: 5px;
    }

    .home__icon-restaurant--resize {
        width: 25px;
        height: 25px;
        color: #fff;
        background-color: #FF0043;
        padding: 10px;
        border-radius: 100%;
        position: absolute;
        bottom: 10px;
        left: 15px;
    }

    .home__image-restaurant-wrapper {
        position: relative;
    }

    .home__line--resize {
        max-width: 1080px;
        margin: 40px auto;
    }

    @media (max-width: 820px) {
        padding: 0 15px;
        .home__banner {
            align-items: center;
        }

        .home__restaurant-wrapper {
            justify-content: center;
            gap: 30px;
            row-gap: 40px;
        }
    }

    @media (max-width: 412px) {
        .home__icons-wrapper {
            flex-direction: column;
            gap: 0px;
        }
        
        .home__icon {
            height: 50px;
        }

        .home__text-title {
            font-size: 40px;
            max-width: 200px;
            text-align: center;
            margin-bottom: 20px;
        } 

        .home__cardapio-wrapper {
            flex-direction: column;
            gap: 25px;
        }

        .home__search-wrapper {
            scale: 93%;
        }

        .home__menu-filter {
            scale: 91%;
            margin-top: 30px;
        }

        .home__button-filter {
            display: flex;
            flex-direction: column;
            align-items: center;
            gap: 4px;
        }
        
    }
`