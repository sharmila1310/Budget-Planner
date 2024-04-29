import React, { useState } from "react";
import brandlogo from "../../assets/images/enterprise.png";
import user from "../../assets/images/user.png";
import bell from "../../assets/images/notification.png";
import search from "../../assets/images/magnifying-glass.png";
import home from "../../assets/images/home.png";
import aboutIcon from "../../assets/images/info.png";
import contact from "../../assets/images/contact-book.png";
import { NavLink } from "react-router-dom";
import routePath from "../../routes/routePath";
const Header = () => {
  const [isLightTheme, setIsLightTheme] = useState(true);
  const handleClickToggle = () => {
    const body = document.getElementsByTagName("body")[0];
    if (isLightTheme) {
      body.classList.remove("dark-theme");
      body.classList.add("light-theme");
      localStorage.setItem("theme-mode", "light-theme");
      setIsLightTheme(false);
    } else {
      body.classList.add("dark-theme");
      body.classList.remove("light-theme");
      localStorage.setItem("theme-mode", "dark-theme");
      setIsLightTheme(true);
    }
  };
  return (
    <div className="main-header">
      {/* header-top */}
      <div className="header-top">
        <div className="left">
          <img src={brandlogo} alt="logo" />
          <div className="search-con">
            <input type="text" placeholder="search..." />
            <img src={search} alt="search" />
          </div>
        </div>
        <div className="right">
          <img src={bell} alt="bell" />
          <div className="user-details">
            <span>Admin</span>
            <span>Admin@gmail.com</span>
          </div>
          <img src={user} alt="user" />
          <div className="toggle-con" onClick={handleClickToggle}>
            <div
              className="toggle-ball"
              style={{
                transform: isLightTheme
                  ? "translateX(5px)"
                  : "translateX(65px)",
              }}
            ></div>
          </div>
        </div>
      </div>
      {/* header-bottom */}
      <div className="header-bottom">
        <NavLink to={routePath.root}>
          <img src={home} alt="home" />
          <span> Home</span>
        </NavLink>
        <NavLink to={routePath.about}>
          {" "}
          <img src={aboutIcon} alt="about" />
          <span> About</span>
        </NavLink>
        <NavLink to={routePath.contact}>
          {" "}
          <img src={contact} alt="contact" />
          <span> Contact</span>
        </NavLink>
      </div>
    </div>
  );
};

export default Header;
