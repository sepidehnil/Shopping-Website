import profile from "./../../assets/img/360_F_243123463_zTooub557xEWABDLk0jJklDyLSGl2jrr.jpg";
import "../../assets/styles/header.css";
import search from "../../assets/svg/search.svg";

export default function Header() {
  return (
    <header className="header-container">
      <div className="mr-8">
        <span className="header-title1">Blon</span>
        <span className="header-title2">djoe</span>
      </div>

      <div className="search-container">
        <div className="search-wrapper">
          <i class="bi bi-search text-white"></i>
          <input
            type="text"
            id="fname"
            name="fname"
            placeholder="search"
            className="search-input"
          />
          <img src={search} alt="search icon" className="w-[20px] h-[20px]" />
        </div>
      </div>

      <div className="flex flex-1">
        <div className="currency-container">
          <div>
            <i class="bi bi-coin text-[#7989ad]"></i>
          </div>
          <div className="text-[#7989ad] font-medium">
            <span>Coin: </span>
            <span>2,500,787.00</span>
          </div>
        </div>
      </div>

      <div className="top-icons">
        <div className="icons">
          <i class="bi bi-bag-fill text-white "></i>
        </div>
        <div className="icons">
          <i class="bi bi-heart-fill text-white"></i>
        </div>
        <div className="icons">
          <i class="bi bi-bell-fill text-white"></i>
        </div>
      </div>

      <div className="flex flex-col px-5">
        <i class="bi bi-grid-fill text-white text-xl"></i>
      </div>

      <div className="profile">
        <img
          src={profile}
          alt="profle-img"
          className="rounded-full h-14 w-14 "
        />
      </div>
    </header>
  );
}
