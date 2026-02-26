import performance from "../images/performance.svg";
import settings from "../images/settings.svg";
import support from "../images/support.svg";
import profile from "../images/profile.png";
import dashboard from "../images/dashboard.svg";
import Dashboard from "../pages/Dashboard";
import Habits from "../pages/Habits";
import Stats from "../pages/Stats";

function Sidebar() {
  return (
    <div className="sidebar">
      <div className="logoContainer">
        <h2 className="title">Quest Log.</h2>
      </div>
      <div className="burgerContainer">
        <div className="burgerTrigger"></div>
        <div className="burgerMenu"></div>
      </div>
      <div className="profileContainer">
        <img src={profile} alt="profilePicture" className="profile" />
        <div className="profileContents">
          <p className="name">Hello, Izzy!</p>
          <p className="email">something@gmail.com</p>
        </div>
      </div>
      <div className="contentsContainer">
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
            <a href="/settings">stats</a>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Sidebar;
