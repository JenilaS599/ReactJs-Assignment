import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faYoutube,
  faFacebook,
  faTwitter,
  faInstagram,
} from "@fortawesome/free-brands-svg-icons";
export default function SocialFollow() {
  return (
    <div class="social-container">
      <h3>Social Follow</h3>
      <br></br>
      <a className="youtube social">
        <FontAwesomeIcon icon={faYoutube} size="2x" />
      </a>
      <span> </span>
      <a className="facebook social">
        <FontAwesomeIcon icon={faFacebook} size="2x" />
      </a>
      <span> </span>
      <a className="twitter social">
        <FontAwesomeIcon icon={faTwitter} size="2x" />
      </a>
      <span> </span>
      <a className="instagram social">
        <FontAwesomeIcon icon={faInstagram} size="2x" />
      </a>
      <span>
        <br></br>
      </span>
      <em>Developed by</em>
      <br></br>
      <em>Jenila S, Thumathi Durai, Shivam Vatsa</em>
    </div>
  );
}
