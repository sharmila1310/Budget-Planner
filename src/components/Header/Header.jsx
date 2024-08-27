import React, { useState } from "react";
// import brandlogo from "../../assets/images/tyreplex.webp";
import brandlogo from "../../assets/images/tyreplex.png";
import user from "../../assets/images/user.png";
import bell from "../../assets/images/notification.png";
import search from "../../assets/images/magnifying-glass.png";
import home from "../../assets/images/home.png";
import aboutIcon from "../../assets/images/info.png";
import contact from "../../assets/images/contact-book.png";
import { NavLink } from "react-router-dom";
import routePath from "../../routes/routePath";
const Header = () => {
  let theme = localStorage.getItem("theme-mode");
  const [isLightTheme, setIsLightTheme] = useState(
    theme === "dark-mode" ? false : true
  );

  const handleClickToggle = () => {
    setIsLightTheme(!isLightTheme);
    const body = document.getElementsByTagName("body")[0];
    if (isLightTheme) {
      body.classList.add("dark-theme");
      body.classList.remove("light-theme");
      localStorage.setItem("theme-mode", "dark-mode");
      setIsLightTheme(false);
    } else {
      body.classList.remove("dark-theme");
      body.classList.add("light-theme");
      localStorage.setItem("theme-mode", "light-mode");
      setIsLightTheme(true);
    }
  };
  return (
    <div className="main-header">
      <nav class="navbar navbar-expand-lg navbar-light">
        <div class="container-fluid custom-header-con">
          <div className="left">
            <a class="navbar-brand" href="#">
              <img src={brandlogo} alt="logo" />
            </a>
          </div>

          <div
            class="collapse navbar-collapse middle"
            id="navbarSupportedContent "
          >
            <ul class="navbar-nav me-auto mb-2 mb-lg-0">
              {/* Car Tyres */}
              <li class="nav-item dropdown">
                <a
                  class="nav-link dropdown-toggle"
                  href="#"
                  id="navbarDropdown"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Car Tyres
                </a>
                <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
                  <li>
                    <a class="dropdown-item" href="#">
                      MRF Tyres
                    </a>
                  </li>
                  <li>
                    <a class="dropdown-item" href="#">
                      Goodyear Tyres
                    </a>
                  </li>
                  <li>
                    <hr class="dropdown-divider" />
                  </li>
                  <li>
                    <a class="dropdown-item" href="#">
                      CEAT Tyres
                    </a>
                  </li>
                  <li>
                    <a class="dropdown-item" href="#">
                      Apollo Tyres
                    </a>
                  </li>
                </ul>
              </li>
              {/* Bike Tyres */}
              <li class="nav-item dropdown">
                <a
                  class="nav-link dropdown-toggle"
                  href="#"
                  id="navbarDropdown"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Bike Tyres
                </a>
                <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
                  <li>
                    <a class="dropdown-item" href="#">
                      MRF Tyres
                    </a>
                  </li>
                  <li>
                    <a class="dropdown-item" href="#">
                      Goodyear Tyres
                    </a>
                  </li>
                  <li>
                    <hr class="dropdown-divider" />
                  </li>
                  <li>
                    <a class="dropdown-item" href="#">
                      CEAT Tyres
                    </a>
                  </li>
                  <li>
                    <a class="dropdown-item" href="#">
                      Apollo Tyres
                    </a>
                  </li>
                </ul>
              </li>
              {/* Tyre Pressure */}
              <li class="nav-item dropdown">
                <a
                  class="nav-link dropdown-toggle"
                  href="#"
                  id="navbarDropdown"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Tyre Pressure
                </a>
                <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
                  <li>
                    <a class="dropdown-item" href="#">
                      Tyre Pressure
                    </a>
                  </li>
                </ul>
              </li>
              {/* Commercial Tyres */}
              <li class="nav-item dropdown">
                <a
                  class="nav-link dropdown-toggle"
                  href="#"
                  id="navbarDropdown"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Commercial Tyres
                </a>
                <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
                  <li>
                    <a class="dropdown-item" href="#">
                      All Commercial Tyres
                    </a>
                  </li>
                </ul>
              </li>
              {/* Accessories */}
              <li class="nav-item dropdown">
                <a
                  class="nav-link dropdown-toggle"
                  href="#"
                  id="navbarDropdown"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Accessories
                </a>
                <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
                  <li>
                    <a class="dropdown-item" href="#">
                      Accessories
                    </a>
                  </li>
                  <li>
                    <a class="dropdown-item" href="#">
                      Batteries
                    </a>
                  </li>
                  <li>
                    <hr class="dropdown-divider" />
                  </li>
                  <li>
                    <a class="dropdown-item" href="#">
                      Alloys Wheels
                    </a>
                  </li>
                </ul>
              </li>
              {/* More */}
              <li class="nav-item dropdown">
                <a
                  class="nav-link dropdown-toggle"
                  href="#"
                  id="navbarDropdown"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  More
                </a>
                <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
                  <li>
                    <a class="dropdown-item" href="#">
                      CashBack Offers
                    </a>
                  </li>
                  <li>
                    <a class="dropdown-item" href="#">
                      Find Tyre Dealers
                    </a>
                  </li>
                  <li>
                    <hr class="dropdown-divider" />
                  </li>
                  <li>
                    <a class="dropdown-item" href="#">
                      Compare Tyre
                    </a>
                  </li>
                </ul>
              </li>
            </ul>
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
      </nav>
    </div>
  );
};

export default Header;
