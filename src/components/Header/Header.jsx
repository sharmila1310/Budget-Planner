import React, { useState } from "react";
import brandlogo from "../../assets/images/tyreplex.png";
import user from "../../assets/images/user.png";
import { Link } from "react-router-dom";
import bell from "../../assets/images/notification.png";
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
            <Link to="/" class="navbar-brand">
              <img src={brandlogo} alt="logo" />
            </Link>
          </div>

          <div
            class="collapse navbar-collapse middle"
            id="navbarSupportedContent "
          >
            <ul class="navbar-nav me-auto mb-2 mb-lg-0">
              {/* Car Tyres */}
              <li class="nav-item dropdown">
                <button
                  class="nav-link dropdown-toggle"
                  id="navbarDropdown"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Car Tyres
                </button>
                <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
                  <li>
                    <button class="dropdown-item">MRF Tyres</button>
                  </li>
                  <li>
                    <button class="dropdown-item">Goodyear Tyres</button>
                  </li>
                  <li>
                    <hr class="dropdown-divider" />
                  </li>
                  <li>
                    <button class="dropdown-item">CEAT Tyres</button>
                  </li>
                  <li>
                    <button class="dropdown-item">Apollo Tyres</button>
                  </li>
                </ul>
              </li>
              {/* Bike Tyres */}
              <li class="nav-item dropdown">
                <button
                  class="nav-link dropdown-toggle"
                  id="navbarDropdown"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Bike Tyres
                </button>
                <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
                  <li>
                    <button class="dropdown-item">MRF Tyres</button>
                  </li>
                  <li>
                    <button class="dropdown-item">Goodyear Tyres</button>
                  </li>
                  <li>
                    <hr class="dropdown-divider" />
                  </li>
                  <li>
                    <button class="dropdown-item">CEAT Tyres</button>
                  </li>
                  <li>
                    <button class="dropdown-item">Apollo Tyres</button>
                  </li>
                </ul>
              </li>
              {/* Tyre Pressure */}
              <li class="nav-item dropdown">
                <button
                  class="nav-link dropdown-toggle"
                  id="navbarDropdown"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Tyre Pressure
                </button>
                <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
                  <li>
                    <button class="dropdown-item">Tyre Pressure</button>
                  </li>
                </ul>
              </li>
              {/* Commercial Tyres */}
              <li class="nav-item dropdown">
                <button
                  class="nav-link dropdown-toggle"
                  id="navbarDropdown"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Commercial Tyres
                </button>
                <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
                  <li>
                    <button class="dropdown-item">All Commercial Tyres</button>
                  </li>
                </ul>
              </li>
              {/* Accessories */}
              <li class="nav-item dropdown">
                <button
                  class="nav-link dropdown-toggle"
                  id="navbarDropdown"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Accessories
                </button>
                <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
                  <li>
                    <button class="dropdown-item">Accessories</button>
                  </li>
                  <li>
                    <button class="dropdown-item">Batteries</button>
                  </li>
                  <li>
                    <hr class="dropdown-divider" />
                  </li>
                  <li>
                    <button class="dropdown-item">Alloys Wheels</button>
                  </li>
                </ul>
              </li>
              {/* More */}
              <li class="nav-item dropdown">
                <button
                  class="nav-link dropdown-toggle"
                  id="navbarDropdown"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  More
                </button>
                <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
                  <li>
                    <button class="dropdown-item">CashBack Offers</button>
                  </li>
                  <li>
                    <button class="dropdown-item">Find Tyre Dealers</button>
                  </li>
                  <li>
                    <hr class="dropdown-divider" />
                  </li>
                  <li>
                    <button class="dropdown-item">Compare Tyre</button>
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
