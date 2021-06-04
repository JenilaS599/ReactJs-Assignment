import React, { useState } from "react";
import * as FcIcons from "react-icons/fc";
import * as FiIcons from "react-icons/fi";
import * as AiIcons from "react-icons/ai";
import { Link } from "react-router-dom";
import { SidebarData } from "./SidebarData";
import "./Navbar.css";
import * as BsIcons from "react-icons/bs";
import { IconContext } from "react-icons";
import {
  faYoutube,
  faFacebook,
  faTwitter,
  faInstagram,
} from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
export default function Navbar() {
  const [sidebar, setSidebar] = useState(false);
  const showSidebar = () => setSidebar(!sidebar);
  return (
    <>
      <IconContext.Provider value={{ color: "#fff" }}>
        <div className="navbar">
          <Link to="#" className="menu-bars">
            <FcIcons.FcList onClick={showSidebar} />
          </Link>
          <h4 id="Welcome">Welcome Admin</h4>

          <Link to="/users" id="users" className="side-nav">
            <BsIcons.BsFillPeopleFill />
            <span>Users</span>
          </Link>
          <Link to="/posts" id="posts" className="side-nav">
            <BsIcons.BsCollectionFill />
            <span>Posts</span>
          </Link>
          <Link to="/" className="side-nav">
            <FiIcons.FiLogOut />
            <span>Logout</span>
          </Link>
        </div>
        <p id="login-time">Login Time : {Date()}</p>
        <br />
        <nav className={sidebar ? "nav-menu active" : "nav-menu"}>
          <ul className="nav-menu-items" onClick={showSidebar}>
            <li className="navbar-toggle">
              <Link to="#" className="menu-bars">
                <AiIcons.AiOutlineClose />
              </Link>
            </li>
            {SidebarData.map((item, index) => {
              return (
                <li key={index} className={item.cName}>
                  <Link to={item.path}>
                    {item.icon}
                    <span>{item.title}</span>
                  </Link>
                </li>
              );
            })}
          </ul>
        </nav>
      </IconContext.Provider>
    </>
  );
}
