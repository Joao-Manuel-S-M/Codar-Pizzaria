import React from "react";
import * as S from "./style";
import pizza1 from "../../assets/images/pizza1.png";
import pizza2 from "../../assets/images/pizza2.png";
import pizza3 from "../../assets/images/pizza3.png";
import pizza4 from "../../assets/images/pizza4.png";
import pizza5 from "../../assets/images/pizza5.png";

const Erivax = () => {
  return (
    <S.Erivax>
      <div className="erivax__banner">
        <div className="erivax__text-wrapper">
          <h1 className="erivax__text-title">Pizzaria Erivax</h1>
          <p className="erivax__text-subTitle">
            Onde o sabor fala com o seu paladar
          </p>
        </div>
        <div className="erivax__infs-wrapper">
          <div className="erivax__time-label">
            <p className="erivax__time">
              Aberto Agora <span className="erivax__time--color">horario</span>{" "}
              18:30 a 23:00
            </p>

            <div className="erivax__labelWrapper">
              <div className="erivax__label-banner">Italiana</div>
              <div className="erivax__label-banner">Broto</div>
            </div>
          </div>
        </div>
      </div>

      <p className="erivax__title-shop">
        NOSSO CARDÁPIO
      </p>

      <div className="erivax__restaurant-wrapper">
        <div className="erivax__restaurant">
          <img
            src={pizza1}
            alt="Pizza 1 Capa"
            className="erivax__restaurant-capa"
          />
          <h1 className="erivax__name-restaurant">Pizza sabor da casa</h1>
        </div>

        <div className="erivax__restaurant">
          <img
            src={pizza2}
            alt="Pizza 2 Capa"
            className="erivax__restaurant-capa"
          />
          <h1 className="erivax__name-restaurant">Pizza calabresa</h1>
        </div>

        <div className="erivax__restaurant">
          <img
            src={pizza3}
            alt="Pizza 3 Capa"
            className="erivax__restaurant-capa"
          />
          <h1 className="erivax__name-restaurant">Pizza doce</h1>
        </div>

        <div className="erivax__restaurant">
          <img
            src={pizza4}
            alt="Pizza 4 Capa"
            className="erivax__restaurant-capa"
          />
          <h1 className="erivax__name-restaurant">Pizza pepperoni</h1>
        </div>
        
        <div className="erivax__restaurant">
          <img
            src={pizza5}
            alt="Pizza 5 Capa"
            className="erivax__restaurant-capa"
          />
          <h1 className="erivax__name-restaurant">Pizza marguerita</h1>
        </div>
      </div>
    </S.Erivax>
  );
};

export default Erivax;
