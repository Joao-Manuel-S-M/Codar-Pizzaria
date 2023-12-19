import React, { useEffect, useState } from "react";
import * as S from "./style";
import apple from "../../assets/images/applestoreIcon.svg";
import googlePlay from "../../assets/images/googlePlayIcon.svg";
import { Link, Navigate, useNavigate} from "react-router-dom";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Register = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [password2, setPassword2] = useState("");
  const navigate = useNavigate();



  const handleRegister = (e) => {
    e.preventDefault()
    if (name && password && email && password2) {
      const user = localStorage.getItem(email)
      if (password != password2) {
        toast.error('As senhas não se conferem', {
          position: "top-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          draggable: true,
          progress: undefined,
          theme: "light",
        });
      }
      else if (user) {
        toast.error('E-mail já registrado', {
          position: "top-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          draggable: true,
          progress: undefined,
          theme: "light",
        });
      } else {
        localStorage.setItem(email, JSON.stringify({ name, password, email}));
        navigate('/');
      }
    } else {
      toast.error('Preencha todos os campos', {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        draggable: true,
        progress: undefined,
        theme: "light",
      });
      
    }
  };

  return (
    <S.Container>
      <ToastContainer />
      <S.Card>
        <div className="card__image-wrapper">
          <div className="card__text-wrapper">
            <h1 className="card__title">Codar Pizzaria</h1>
            <h3 className="card__subTitle">PEGUE UMA FATIA</h3>
          </div>

          <div className="card__icons-wrapper">
            <a href="">
              <img src={apple} alt="Apple icon" className="card__icon" />
            </a>
            <a href="">
              <img
                src={googlePlay}
                alt="Google Play icon"
                className="card__icon"
              />
            </a>
          </div>
        </div>

        <div className="card__form-wrapper">
          <div className="card__title-wrapper">
            <span className="card__title-form">CADASTRE-SE</span>
            <hr className="card__line" />
          </div>
          <hr className="card__separator" />
          <form className="card__input-wrapper" onSubmit={handleRegister}>
            <input
              type="text"
              placeholder="Nome completo"
              className="card__input"
              onChange={(e) => setName(e.target.value)}
            />
            <input 
              type="email" 
              placeholder="E-mail" 
              className="card__input" 
              onChange={(e) => setEmail(e.target.value)}
            />
            <input
              type="password"
              placeholder="Senha"
              className="card__input"
              onChange={(e) => setPassword(e.target.value)}
            />
            <input
              type="password"
              placeholder="Confirmar senha"
              className="card__input"
              onChange={(e) => setPassword2(e.target.value)}
            />
            <input
              type="submit"
              value="Registrar-se"
              className="card__button"
            />
          </form>
          <span className="card__copy">Codar Pizzaria 2020</span>
        </div>
      </S.Card>
    </S.Container>
  );
};

export default Register;
