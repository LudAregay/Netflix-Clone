import React from "react";
import "./Footer.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import {
  faYoutube,
  faInstagram,
  faTwitter,
  faFacebook,
} from "@fortawesome/free-brands-svg-icons";

function Footer() {
  return (
    <div className="check container" style={{ marginLeft: "100px" }}>
      <a href="https://www.youtube.com/user/NewOnNetflix">
        <FontAwesomeIcon
          icon={faYoutube}
          style={{ color: "#fff", marginLeft: "45px" }}
          size="2x"
        ></FontAwesomeIcon>
      </a>
      <a href="https://www.instagram.com/Netflix/">
        <FontAwesomeIcon
          icon={faInstagram}
          size="2x"
          style={{ color: "#fff", marginLeft: "45px" }}
        ></FontAwesomeIcon>
      </a>
      <a href="https://twitter.com/netflix">
        <FontAwesomeIcon
          icon={faTwitter}
          size="2x"
          style={{ color: "#fff", marginLeft: "45px" }}
        ></FontAwesomeIcon>
      </a>
      <a href="https://www.facebook.com/netflixus">
        {" "}
        <FontAwesomeIcon
          icon={faFacebook}
          size="2x"
          style={{ color: "#fff", marginLeft: "45px" }}
        ></FontAwesomeIcon>
      </a>

      <div className="Footer all row">
        <div className="col-sm-6 col-md-3">
          <ul>
            <li>
              <a href="">Audio description </a>
            </li>
            <li>
              <a href="">Investor Relations</a>
            </li>{" "}
            <li>
              <a href="">Privacy</a>
            </li>
            <li>
              <a href="">contact Us</a>
            </li>
          </ul>
        </div>
        <div className="col-sm-6 col-md-3">
          <ul>
            <li>
              <a href=""> Help center</a>
            </li>
            <li>
              <a href="">Jobs</a>
            </li>
            <li>
              <a href="">Legal Notices</a>
            </li>
            <li>
              <a href="">
                Do Not Sell or share my personal <br />
                information
              </a>
            </li>
          </ul>
        </div>
        <div className="col-sm-6 col-md-3">
          <ul>
            {" "}
            <li>
              <a href="">Gift Cards</a>
            </li>
            <li>
              <a href="">Netflix Shop</a>
            </li>
            <li>
              <a href="">Cookie Preferences</a>
            </li>
          </ul>
        </div>
        <div className="col-sm-6 col-md-3">
          <ul>
            <li>
              <a href="">Media Center</a>
            </li>
            <li>
              <a href="">Terms of Use</a>
            </li>
            <li>
              <a href=""> Corporate Information</a>
            </li>
          </ul>
        </div>
        <button
          style={{
            backgroundColor: "#000",
            color: "grey",
          }}
        >
          service code
        </button>
      </div>
    </div>
  );
}

export default Footer;
