import React, { useEffect, useState } from 'react'
import * as S from './style'
import apple from '../../assets/images/applestoreIcon.svg'
import googlePlay from '../../assets/images/googlePlayIcon.svg'
import { Link, useNavigate } from 'react-router-dom'
import Register from '../Register/Register'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


const Login = ({setIsLogin}) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    // Resetar o estado isLogin ao montar o componente
    setIsLogin(false);
  }, [setIsLogin]);

  const handleLogin = (e) => {
    e.preventDefault()
    if (email && password) {
      const user = localStorage.getItem(email);
      if (user) {
        const parseUser = JSON.parse(user);
        if (parseUser.email == email && parseUser.password == password) {
          toast.success('Usuário encontrado!', {
            position: "top-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "light",
          })
          setIsLogin("True")
          navigate('/home');
        } else {
          toast.error('E-mail ou senha incorretos!', {
            position: "top-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "light",
          })
        }
      } else {
        toast.error('Usuário não encontrado. Faça o registro primeiro!', {
          position: "top-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "light",
        })
      }
    } else {
      toast.error('Preencha todos os campos!', {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
      })
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
            <a href=""><img src={apple} alt="Apple icon" className='card__icon'/></a>
            <a href=""><img src={googlePlay} alt="Google Play icon" className='card__icon'/></a>
          </div>
        </div>

        <div className="card__form-wrapper">
          <div className="card__title-wrapper">
            <span className='card__title-form'>EFETUAR LOGIN</span>
            <hr className='card__line'/>
          </div>
          <hr className="card__separator" />
          <form className="card__input-wrapper" onSubmit={handleLogin}>
            <input type="email" placeholder='E-mail' className="card__input" onChange={(e) => setEmail(e.target.value)}/>
            <input type="password" placeholder='Senha' className="card__input" onChange={(e) => setPassword(e.target.value)}/>
            <a href="" className="card__password-link">Esqueceu sua senha?</a>
            <input type="submit" value="Acessar" className='card__button'/>
            <Link to={'/register'} className="card__register-link">Criar uma conta</Link>
          </form>
          <span className="card__copy">Codar Pizzaria 2020</span>
        </div>
      </S.Card>
    </S.Container>
  )
}

export default Login