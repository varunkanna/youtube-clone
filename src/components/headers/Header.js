import React from "react";
import { AiOutlineMenu } from "react-icons/ai";
import { BsSearch } from "react-icons/bs";
import { BiSolidBell } from "react-icons/bi";
import { MdApps } from "react-icons/md";
import "./Header.css";

const Header = ({handleToggle}) => {
  const onHandle = (e) => {
    e.preventDefault();
    console.log(e.target.search.value);
  };
  return (
    <div className="app__header">
      <div className="app__side">
        <AiOutlineMenu className="app__menu" onClick={() => handleToggle()} />
        <img src={"/images/YouTubeIcon.png"} className="app__icon" />
      </div>

      <form onSubmit={(e) => onHandle(e)}>
        <input placeholder="Search" type="text" name="search" id="search" className="app__search" />
        <button className="app__search-icon" type="submit">
          <BsSearch />
        </button>
      </form>

      <div className="app__user-side">
        <BiSolidBell className="app__bell" size={20} />
        <MdApps className="app__app-menu" size={20} />
        <img
          src={"/images/AppUser.png"}
          alt="user"
          width={"50px"}
          className="app__user"
        />
      </div>
    </div>
  );
};

export default Header;
