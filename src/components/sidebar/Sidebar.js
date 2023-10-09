import React from "react";
import { AiFillHome, AiFillLike } from "react-icons/ai";
import { MdSubscriptions, MdOutlineLibraryAdd } from "react-icons/md";
import { BiHistory } from "react-icons/bi";
import { ImSad2 } from "react-icons/im";
import { RiLogoutBoxRLine } from "react-icons/ri";
import "./Sidebar.css";

const sidebar = ({sidebar, handleToggle}) => {
  console.log(sidebar)
  return (
    <nav className={sidebar ? "app__sidebar open" : "app__sidebar"} onClick={() => handleToggle(false)}>
      <li>
        <AiFillHome />
        <span>Home</span>
      </li>
      <li>
        <MdSubscriptions />
        <span>Subscription</span>
      </li>
      <li>
        <AiFillLike />
        <span>Liked</span>
      </li>
      <li>
        <BiHistory />
        <span>History</span>
      </li>
      <li>
        <MdOutlineLibraryAdd />
        <span>Library</span>
      </li>
      <li>
        <ImSad2 />
        <span>History</span>
      </li>

      <hr />
      <li>
        <RiLogoutBoxRLine />
        <span>Logout</span>
      </li>
      <hr />
    </nav>
  );
};

export default sidebar;
