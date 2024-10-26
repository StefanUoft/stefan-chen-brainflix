import Logo from "../../assets/Logo/BrainFlix-logo.svg";
import MohamMuruge from "../../assets/images/Mohan-muruge.jpg";
import SearchIcon from "../../assets/icons/search.svg";
import UploadIcon from "../../assets/icons/upload.svg";
import "./Header.scss";

function Header() {
  return (
    <header className="header">
      <a className="header__logo" href="#">
        <img src={Logo} alt="BrainFlix Logo" />
      </a>
      <div className="header__section">
        <div className="header__container">
          <div className="header__search">
            <img
              className="header__search__icon"
              src={SearchIcon}
              alt="Search Icon"
            />
            <input
              className="header__search__input"
              type="text"
              name="search"
              id="search"
              placeholder="Search"
            />
          </div>
          <img className="header__user1" src={MohamMuruge} alt="User Icon" />
        </div>

        <a className="header__upload" href="#">
          <img src={UploadIcon} alt="Upload Icon" />
          UPLOAD
          <img src={UploadIcon} alt="Upload Icon" />
        </a>
        <img className="header__user2" src={MohamMuruge} alt="User Icon" />
      </div>
    </header>
  );
}

export default Header;
