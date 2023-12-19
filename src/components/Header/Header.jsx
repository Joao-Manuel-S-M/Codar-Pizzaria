import React, { useState } from "react";
import * as S from "./style";
import { Link } from "react-router-dom";
import perfil from "../../assets/images/perfil.webp";
import { MdShoppingBasket } from "react-icons/md";
import Hamburger from "hamburger-react";

const Header = () => {
    const [isOpenn, setIsOpenn] = useState(false);
    
    const handleHamburgerClick = () => {
        setIsOpenn(!isOpenn);
    }
    return (
      <S.Header>
        <div className="header__wrapper">
          <h1 className="header__logo">CODAR PIZZARIA</h1>
          <nav>
            <ul className="header__menu header__menu--disabled">
              <li className="header__menu-item">
                <Link
                  to="/home"
                  className="header__menu-link header__menu-link--active"
                >
                  Buscar
                </Link>
              </li>
              <li className="header__menu-item">
                <Link to="" className="header__menu-link">
                  Sobre
                </Link>
              </li>
              <li className="header__menu-item">
                <Link to="" className="header__menu-link">
                  Como Funciona
                </Link>
              </li>
              <li className="header__menu-item">
                <Link to="" className="header__menu-link">
                  Planos
                </Link>
              </li>
              <li className="header__menu-item">
                <Link to="" className="header__menu-link">
                  Contato
                </Link>
              </li>
            </ul>
            <Link to="/">
              <img
                src={perfil}
                alt="Imagem de perfil"
                className="header__perfil-image header__perfil-image--disabled"
              />            
            </Link>
            <div className="header__cart header__cart--disabled">
              <div className="header__cart-btn">
                <MdShoppingBasket className="header__cart-icon" />
                <span className="header__cart-text">(5) items</span>
              </div>
            </div>

            <div className={isOpenn === true ? "header__menu-hamburger header__menu-hamburger--disabled test" : "header__menu-hamburger header__menu-hamburger--disabled"}>
              <Hamburger
                toggled={isOpenn}
                toggle={setIsOpenn}
                width={24}
                height={24}
                strokeWidth={2}
                rotate={0}
                color="#EF4C00"
                borderRadius={0}
                animationDuration={0.5}
                animationDelay={0.5}
                
              />
              <div
                className={
                  isOpenn === false
                    ? "header__menu-wrapper--disabled none"
                    : "header__menu-wrapper"
                }
              >
                <div className="header__profile-cart">
                  <Link to="/">
                    <img
                      src={perfil}
                      alt="Imagem de perfil"
                      className="header__profile-image"
                    />
                  </ Link>
                  <div className="header__cart">
                    <div className="header__cart-btn">
                      <MdShoppingBasket className="header__cart-icon" />
                      <span className="header__cart-text">(5) items</span>
                    </div>
                  </div>
                </div>

                <ul className="header__menu header__menu--mobile">
                  <li className="header__menu-item">
                    <Link
                      to=""
                      className="header__menu-link header__menu-link--active"
                    >
                      Buscar
                    </Link>
                  </li>
                  <li className="header__menu-item">
                    <Link to="" className="header__menu-link">
                      Sobre
                    </Link>
                  </li>
                  <li className="header__menu-item">
                    <Link to="" className="header__menu-link">
                      Como Funciona
                    </Link>
                  </li>
                  <li className="header__menu-item">
                    <Link to="" className="header__menu-link">
                      Planos
                    </Link>
                  </li>
                  <li className="header__menu-item">
                    <Link to="" className="header__menu-link">
                      Contato
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </nav>
        </div>
      </S.Header>
    );
};

export default Header;
