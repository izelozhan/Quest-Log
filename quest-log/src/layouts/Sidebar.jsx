import performance from "../images/performance.svg";
import settings from "../images/settings.svg";
import support from "../images/support.svg";
import profile from "../images/profile.png";
import dashboard from "../images/dashboard.svg";
import Dashboard from "../pages/Dashboard";
import Habits from "../pages/Habits";
import Stats from "../pages/Stats";
import { useState } from "react";
import { useLocation } from "react-router-dom";

function Sidebar() {
  const location = useLocation();

  const [closeMenu, setCloseMenu] = useState(false);

  const handleCloseMenu = () => {
    setCloseMenu(!closeMenu);
  };

  return (
    <div className={closeMenu === false ? "sidebar" : "sidebar active"}>
      <div
        className={
          closeMenu === false ? "logoContainer" : "logoContainer active"
        }
      >
        <h2 className="title">Quest Log.</h2>
      </div>
      <div
        className={
          closeMenu === false ? "burgerContainer" : "burgerContainer active"
        }
      >
        <div
          className="burgerTrigger"
          onClick={() => {
            handleCloseMenu();
          }}
        ></div>
        <div className="burgerMenu"></div>
      </div>
      <div
        className={
          closeMenu === false ? "profileContainer" : "profileContainer active"
        }
      >
        <img src={profile} alt="profilePicture" className="profile" />
        <div className="profileContents">
          <p className="name">Hello, Izzy!</p>
          <p className="email">something@gmail.com</p>
        </div>
      </div>
      <div
        className={
          closeMenu === false ? "contentsContainer" : "contentsContainer active"
        }
      >
        <ul>
          <li>
            <img src={dashboard} alt="dashboard" />
            <a href="/">dashboard</a>
          </li>
          <li>
            <img src={support} alt="habits" />
            <a href="/habits">habits</a>
          </li>
          <li>
            <img src={performance} alt="stats" />
            <a href="/stats">stats</a>
          </li>
          <li>
            <img src={settings} alt="settings" />
            <a href="/settings">settings</a>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Sidebar;
