import React, { Component } from "react";
import ReactDOM from "react-dom";
import fetch from "fetch";
import { useState, useEffect } from "react";
import Navbar from "../components/Navbar";
import SocialFollow from "../components/SocialFollow";
import * as FcIcons from "react-icons/fc";
function Users() {
  let [users, accessUsers] = useState([]);
  useEffect(() => {
    fetch.fetchUrl(
      "https://jsonplaceholder.typicode.com/users",
      (err, meta, data) => {
        accessUsers(JSON.parse(data));
      }
    );
  }, []);
  return (
    <>
      <div className="dashboard">
        <Navbar />
        <h1>Users</h1>
        <ul>
          {users.map((val) => (
            <li className="userList" key={val.id}>
              <b>
                {val.id}:{val.name}
              </b>
              <br></br> <br />
              <label>USERNAME:</label> {val.username} <br />
              <label>EMAIL:</label>
              {val.email} <br />
              <label>WEBSITE:</label>{" "}
              <em>
                {val.website} <br />
              </em>
            </li>
          ))}
        </ul>
      </div>
      <a
        id="goto-bottom"
        href="javascript: document.body.scrollIntoView(false);"
      >
        Goto Bottom
        <FcIcons.FcExpand size="2x" />
      </a>
      <a id="goto-top" href="javascript: document.body.scrollIntoView(true);">
        Goto Top
        <FcIcons.FcCollapse size="2x" />
      </a>
      <SocialFollow />
    </>
  );
}
export default Users;
