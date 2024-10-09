import "./App.css";
import { MainContainer } from "./Style";
import MenuIcon from "./images/icon-hamburger.svg";
import LogoIcon from "./images/logo.svg";
import MinuIcon from "./images/icon-angle-left.svg";
import PlusIcon from "./images/icon-angle-right.svg";
import CloseIcon from "./images/icon-close.svg";
import Arrow from "./images/icon-arrow.svg";
import FurnitureImg from "./images/image-about-dark.jpg";
import LightImg from "./images/image-about-light.jpg";
import MobileImg1 from "./images/mobile-image-hero-1.jpg";
import MobileImg2 from "./images/mobile-image-hero-2.jpg";
import MobileImg3 from "./images/mobile-image-hero-3.jpg";
import DesktopImg1 from "./images/desktop-image-hero-1.jpg";
import DesktopImg2 from "./images/desktop-image-hero-2.jpg";
import DesktopImg3 from "./images/desktop-image-hero-3.jpg";
import { useState } from "react";
function App() {
  const textsArray = [
    {
      title: "Discover innovative ways to decorate",
      description:
        "We provide unmatched quality, comfort, and style for property owners across the country. Our experts combine form and function in bringing your vision to life. Create a room in your own style with our collection and make your property a reflection of you and what you love.",
    },
    {
      title: "We are leaders in furniture design",
      description:
        "Our multifunctional collection blends design and function to suit your individual taste. Make each room unique or pick a cohesive theme that best expresses your interests.",
    },
    {
      title: "Crafted from the finest materials",
      description:
        "With a wide range of furniture made from the best materials, you'll find pieces that suit your style and taste. Our products combine design and functionality.",
    },
  ];
  const desktopImgArray = [DesktopImg1, DesktopImg2, DesktopImg3];
  const imagesArray = [MobileImg1, MobileImg2, MobileImg3];
  const [showMenu, setShowMenu] = useState<boolean>(false);
  const [currentImageIndex, setCurrentImageIndex] = useState<number>(0);

  const handlePrevImage = () => {
    setCurrentImageIndex((prevIndex) =>
      prevIndex === 0 ? imagesArray.length - 1 : prevIndex - 1
    );
  };

  const handleNextImage = () => {
    setCurrentImageIndex((prevIndex) =>
      prevIndex === imagesArray.length - 1 ? 0 : prevIndex + 1
    );
  };
  return (
    <>
      <MainContainer
        backgroundImage={imagesArray[currentImageIndex]}
        desktopBackgroundImage={desktopImgArray[currentImageIndex]}
      >
        {showMenu === true ? (
          <div className="navigation">
            <img onClick={() => setShowMenu(false)} src={CloseIcon} alt="" />
            <div className="text">
              <p>home</p>
              <p>shop</p>
              <p>about</p>
              <p>contact</p>
            </div>
          </div>
        ) : (
          ""
        )}
        <div className="flex-top">
          <div className="img-nav-div">
            <img
              className="menu_icon"
              onClick={() => setShowMenu(true)}
              src={MenuIcon}
              alt="menu_icon"
            />
            <img src={LogoIcon} alt="logo_icon" />
            <div className="nav">
              <p>home</p>
              <p>shop</p>
              <p>about</p>
              <p>contact</p>
            </div>
            <div className="arrow_div">
              <img onClick={handlePrevImage} src={MinuIcon} alt="minus-icon" />
              <img onClick={handleNextImage} src={PlusIcon} alt="plus-icon" />
            </div>
          </div>
          <div className="text_div">
            <h1>{textsArray[currentImageIndex].title}</h1>
            <p>{textsArray[currentImageIndex].description}</p>
            <div className="shop-now">
              <p>SHOP NOW</p>
              <img src={Arrow} alt="arrow" />
            </div>
          </div>
        </div>
        <div className="flex-bottom">
          <img src={FurnitureImg} alt="furniture-img" />
          <div className="center">
            <h2>ABOUT OUR FURNITURE</h2>
            <p>
              Our multifunctional collection blends design and function to suit
              your individual taste. Make each room unique, or pick a cohesive
              theme that best express your interests and what inspires you. Find
              the furniture pieces you need, from traditional to contemporary
              styles or anything in between. Product specialists are available
              to help you create your dream space.
            </p>
          </div>
          <img src={LightImg} alt="furniture-light" />
        </div>
      </MainContainer>
    </>
  );
}

export default App;
