import React from 'react'
import * as S from './style'
import appleIcon from '../../assets/images/applestoreIcon.svg'
import googleIcon from '../../assets/images/googleplayIcon.svg'
import { FaSearch } from "react-icons/fa";
import { LuSettings2, LuClock } from "react-icons/lu";
import { IoRestaurantOutline } from "react-icons/io5";
import restaurant1 from '../../assets/images/restaurant1.png';
import restaurant2 from '../../assets/images/restaurant2.png';
import restaurant3 from '../../assets/images/restaurant3.png';
import { CiHeart } from "react-icons/ci";
import { FaStar, FaRegStar } from "react-icons/fa6";
import { Link } from 'react-router-dom';


const Home = () => {
  return (
    <S.Home>
      <div className="home__banner">
        <h1 className="home__text-title">Pegue Uma Fatia</h1>
        <div className="home__icons-wrapper">
          <a href=""><img src={appleIcon} alt="Apple Store Icon" className='home__icon'/></a>
          <a href=""><img src={googleIcon} alt="Google Play Icon" className='home__icon'/></a>
        </div>
      </div>
      <div className="home__cardapio-wrapper">
        <h1 className="home__cardapio-title">NOSSO CARDÁPIO</h1>
        <div className="home__search-wrapper">
          <div className="home__input-wrapper">
            <input type="text" placeholder='Procure sua favorita' className='home__input'/>
            <FaSearch className='home__search-icon'/>
          </div>
          <LuSettings2 className='home__settings-icon'/>
        </div>
      </div>
      <div className="home__menu-filter">
        <span className="home__button-filter home__button-filter--active">Todas (170)</span>
        <span className="home__button-filter"><IoRestaurantOutline className='home__restaurant-icon'/>Brasileira</span>
        <span className="home__button-filter"><IoRestaurantOutline className='home__restaurant-icon'/>Italiana</span>
      </div>
      <div className="home__stores">
        <div className="home__title-stores-wrapper">
          <h1 className="home__title-stores">POPULARES</h1>
          <hr className="home__line" />
        </div>

        <div className="home__restaurant-wrapper">
          <div className="home__restaurant">
            <div className="home__image-restaurant-wrapper">
              <img src={restaurant1} alt="Restaurante 1 Capa" className='home__restaurant-capa'/>
              <IoRestaurantOutline className='home__icon-restaurant--resize'/>
            </div>
            <div className="home__restaurant-info">
              <div className="home__name-icon-wrapper">
                <h1 className="home__name-restaurant">Pizzaria Matex</h1>
                <CiHeart className="home__heart-icon"/>
              </div>
              <div className="home__feedbacks-wrapper">
                <div className="home__stars-wrapper">
                  <FaStar className='home__star-icon'/>
                  <FaStar className='home__star-icon'/>
                  <FaStar className='home__star-icon'/>
                  <FaStar className='home__star-icon'/>
                  <FaStar className='home__star-icon--opacity'/>
                </div>
                <span className="feedbacks">32 Avaliações</span>
              </div>
              <div className="home__label-wrapper">
                <div className="home__label">
                  <span className="home__label-item">Brasileira</span>
                  <span className="home__label-item">Média</span>
                </div>
                <span className="home__time">
                  <LuClock />
                  20-30
                </span>
              </div>
            </div>
          </div>

          <Link to='/erivax' className="home__restaurant" style={{textDecoration: 'none'}}>
            <div className="home__image-restaurant-wrapper">
              <img src={restaurant2} alt="Restaurante 2 Capa" className='home__restaurant-capa'/>
              <IoRestaurantOutline className='home__icon-restaurant--resize'/>
            </div>
            <div className="home__restaurant-info">
              <div className="home__name-icon-wrapper">
                <h1 className="home__name-restaurant">Pizzaria Erivax</h1>
                <CiHeart className="home__heart-icon"/>
              </div>
              <div className="home__feedbacks-wrapper">
                <div className="home__stars-wrapper">
                  <FaStar className='home__star-icon'/>
                  <FaStar className='home__star-icon'/>
                  <FaStar className='home__star-icon'/>
                  <FaStar className='home__star-icon'/>
                  <FaStar className='home__star-icon--opacity'/>
                </div>
                <span className="feedbacks">20 Avaliações</span>
              </div>
              <div className="home__label-wrapper">
                <div className="home__label">
                  <span className="home__label-item">Italiana</span>
                  <span className="home__label-item">Broto</span>
                </div>
                <span className="home__time">
                  <LuClock />
                  10-20
                </span>
              </div>
            </div>
          </Link>
          
          <div className="home__restaurant">
            <div className="home__image-restaurant-wrapper">
              <img src={restaurant3} alt="Restaurante 3 Capa" className='home__restaurant-capa'/>
              <IoRestaurantOutline className='home__icon-restaurant--resize'/>
            </div>
            <div className="home__restaurant-info">
              <div className="home__name-icon-wrapper">
                <h1 className="home__name-restaurant">Pizzaria Cairo</h1>
                <CiHeart className="home__heart-icon"/>
              </div>
              <div className="home__feedbacks-wrapper">
                <div className="home__stars-wrapper">
                  <FaStar className='home__star-icon'/>
                  <FaStar className='home__star-icon'/>
                  <FaStar className='home__star-icon'/>
                  <FaStar className='home__star-icon'/>
                  <FaStar className='home__star-icon--opacity'/>
                </div>
                <span className="feedbacks">45 Avaliações</span>
              </div>
              <div className="home__label-wrapper">
                <div className="home__label">
                  <span className="home__label-item">Italiana</span>
                  <span className="home__label-item">Giga</span>
                </div>
                <span className="home__time">
                  <LuClock />
                  20-30
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
      <hr className="home__line home__line--resize" />
    </S.Home>
  )
}

export default Home