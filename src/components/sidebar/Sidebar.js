import React from "react";
import { AiFillHome, AiFillLike } from "react-icons/ai";
import { MdSubscriptions, MdOutlineLibraryAdd } from "react-icons/md";
import { BiHistory } from "react-icons/bi";
import { ImSad2 } from "react-icons/im";
import { RiLogoutBoxRLine } from "react-icons/ri";
import "./Sidebar.css";
import { auth } from "../../firebase";
import { signOut } from "firebase/auth";
import { useDispatch } from "react-redux";
import { LogoutFun } from "../../redux/AuthSlice";

const Sidebar = ({ sidebar, handleToggle }) => {
  const dispatch = useDispatch();
  // console.log(sidebar)
  const handleLogOut = () => {
    signOut(auth)
      .then(() => {
        // Sign-out successful.
        dispatch(LogoutFun());
        console.log("sign-out-success")
      })
      .catch((error) => {
        console.log("sign-out error", error)
      });
  };
  return (
    <nav
      className={sidebar ? "app__sidebar open" : "app__sidebar"}
      onClick={() => handleToggle(false)}
    >
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
      <li onClick={handleLogOut}>
        <RiLogoutBoxRLine />
        <span>Logout</span>
      </li>
      <hr />
    </nav>
  );
};

export default Sidebar;
