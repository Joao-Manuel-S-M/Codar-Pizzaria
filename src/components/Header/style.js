import styled from "styled-components";

export const Header = styled.header`
  border: 1px solid #2e476552;
  height: 80px;
  margin-top: 20px;

  .header__wrapper {
    display: flex;
    max-width: 1440px;
    margin: 0 auto;
    justify-content: space-between;
    align-items: center;
    padding: 0 20px;
  }

  .header__menu {
    display: flex;
    gap: 20px;
  }

  nav {
    display: flex;
    gap: 52px;
    align-items: center;
  }

  .header__menu-item {
    list-style: none;
  }

  .header__menu-link {
    text-decoration: none;
    color: #2e4765;
    font-family: "Arial";
  }

  .header__menu-link--active {
    border-bottom: 3px solid #ef4c00;
    border-radius: 2px;
    padding-bottom: 10px;
  }

  .header__logo {
    font-family: "Arial";
    font-size: 28px;
    font-weight: 400;
    color: #ef4c00;
  }

  .header__perfil-image {
    width: 50px;
  }

  .header__cart {
    /* margin-left: 41px; */
    border-left: 1px solid #2e476552;
    height: 80px;
    display: flex;
    align-items: center;
    width: 150px;
    justify-content: center;
  }

  .test {
    position: fixed;
    right: 20px;
    z-index: 5;
  }

  .header__cart-btn {
    background-color: #ef4c00;
    border: none;
    border-radius: 20px;
    width: 80px;
    height: 40px;
    padding: 0 10px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    cursor: pointer;
  }

  .header__cart-icon {
    color: white;
    width: 25px;
    height: 25px;
  }

  .header__cart-text {
    font-family: "Arial";
    font-size: 12px;
    font-weight: 400;
    color: white;
  }

  .header__menu-hamburger {
    display: none;
  }

  @media (max-width: 850px) {
    display: flex;
    .header__perfil-image--disabled,
    .header__menu--disabled,
    .header__cart--disabled {
      display: none;
    }

    .header__menu-hamburger {
      display: block;
    }

    .header__menu-wrapper--disabled {
      transition: all 0.3s ease;
      position: absolute;
      right: -200px;
      top: 20px;
      height: 70vh;

      display: none;
    }

    .header__wrapper {
      width: 100%;
      transition: all 0.3s ease;
    }

    .header__menu-wrapper {
      background: #e7e7e7;
      position: fixed;
      top: 0;
      right: 0px;
      height: 100vh;
      width: 60vw;
      display: flex;
      padding-top: 104px;
      text-align: center;
      flex-direction: column;
      gap: 70px;
      transition: all 0.3s ease;
      z-index: 2;
    }

    .header__menu--mobile {
      display: flex;
      flex-direction: column;
      gap: 40px;
      transition: all 0.3s ease;
    }

    .hamburger-react {
      z-index: 4;
    }

    

    .header__profile-cart {
      display: flex;
      justify-content: center;
      align-items: center;
      gap: 10px;
    }

    .header__profile-image {
      width: 60px;
      height: 60px;
    }

    .header__cart {
      border: none;
      scale: 80%;
      width: 100px;
    }

    .header__cart-btn {
      width: 120px;
    }
  }

  .header__menu-responsive {
    /* max-width: 100vw; */
  }
`;