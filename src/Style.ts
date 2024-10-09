import styled from "styled-components";

export const MainContainer = styled.main<{
  backgroundImage: string;
  desktopBackgroundImage: string;
}>`
  position: relative;
  .img-nav-div {
    background-image: url(${(props) => props.backgroundImage});
    width: 100%;
    height: 350px;
    background-position: center;
    background-size: cover;
    padding: 48px 157px 300px 24px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    position: relative;
    @media (min-width: 1440px) {
      background-image: url(${(props) => props.desktopBackgroundImage});
      background-position: center;
      width: 840px;
      background-size: cover;
      display: flex;
      justify-content: start;
      padding: 63px 414px 446px 64px;
      gap: 58px;
    }
  }
  .menu_icon {
    @media (min-width: 1440px) {
      display: none;
    }
  }
  .nav {
    display: none;
    @media (min-width: 1440px) {
      display: block;
      display: flex;
      gap: 32px;
      color: #fff;
      font-size: 18px;
    }
  }
  .nav p {
    @media (min-width: 1440px) {
      cursor: pointer;
      .nav p:hover {
        border-bottom: 1px solid #fff;
        padding-bottom: 20px;
      }
    }
  }
  
  .flex-top {
    @media (min-width: 1440px) {
      display: flex;
    }
  }
  .flex-bottom {
    @media (min-width: 1440px) {
      display: flex;
    }
  }

  .arrow_div {
    background-color: #000000;
    padding: 19.6px 23.8px 19.6px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 112px;
    position: absolute;
    bottom: 0;
    right: 0;
    
    @media (min-width: 1440px) {
      right: -110px;
      
    }
  }
  .arrow_div img{
    cursor: pointer;
    
  }
  .navigation {
    width: 200px;
    width: 100%;
    height: 110px;
    position: absolute;
    background-color: #fff;
    padding: 47.2px 23px 46px 24px;
    top: 0;
    z-index: 1;
    display: flex;
    gap: 67px;
    align-items: center;
  }
  .text {
    display: flex;
    gap: 31px;
  }
  .text p {
    color: #000000;
    font-size: 16px;
    letter-spacing: -0.67px;
    font-weight: bold;
  }
  .text_div {
    padding: 60px 32px 72px;
    @media (min-width: 1440px) {
      padding: 120px 100px 0px 100px;
    }
  }
  .text_div h1 {
    color: #000000;
    font-size: 36px;
    font-weight: bold;
    letter-spacing: -0.167px;
    margin-bottom: 15px;
    @media (min-width: 1440px) {
      font-size: 48px;
    }
  }
  .text_div p {
    color: #a0a0a0;
    font-size: 16px;
    font-weight: 500;
    line-height: 1.38;
    letter-spacing: -0.33px;
    margin-bottom: 48px;
  }
  .shop-now {
    display: flex;
    align-items: center;
    gap: 30px;
  }
  .shop-now img {
    padding-bottom: 45px;
  }
  .flex-bottom img {
    width: 100%;
    height: 238px;
    @media (min-width: 1440px) {
      height: 100%;
    }
  }
  .shop-now p {
    cursor: pointer;
  }
  .center {
    padding: 50px 32px 41px;
    @media (min-width: 1440px) {
      padding: 61px 48px 58px;
    }
  }
  .center h2 {
    color: #000000;
    font-size: 14px;
    font-weight: bold;
    line-height: 1.57;
    letter-spacing: 5.83px;
    margin-bottom: 15px;
  }
  .center p {
    color: #a0a0a0;
    font-size: 16px;
    font-weight: 500;
    line-height: 1.38;
    letter-spacing: -0.33px;
  }
`;
