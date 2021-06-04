import React from "react";
import ReactDOM from "react-dom";
import fetch from "fetch";
import { useState, useEffect } from "react";
import Navbar from "../components/Navbar";
import SocialFollow from "../components/SocialFollow";
import * as FcIcons from "react-icons/fc";
function Posts() {
  let [users, accessUsers] = useState([]);
  useEffect(() => {
    console.log("Hello");
    fetch.fetchUrl(
      "https://jsonplaceholder.typicode.com/posts",
      (err, meta, data) => {
        accessUsers(JSON.parse(data));
      }
    );
  }, []);
  return (
    <>
      <div className="dashboard">
        <Navbar />
        <h1>Posts</h1>
        <ul>
          {users.map((val) => (
            <li className="postList" key={val.id}>
              <b>POST: {val.id}</b>
              {val.userId} <br />
              {val.title} <br />
              {val.body} <br />
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

export default Posts;
