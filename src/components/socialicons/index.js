import React from "react";
import "./style.css";
import {
  FaGithub,
  FaTwitter,
  FaFacebookF,
  FaLinkedin,
  FaYoutube,
  FaTwitch,
  FaDiscord,
  FaSkype,
  FaSlack,
  FaTelegram,
  FaNetworkWired,
} from "react-icons/fa";
export const Socialicons = (params) => {
  return (
    <div className="stick_follow_icon">
      <ul>
        {socialprofils.github && (
          <li>
            <a href={socialprofils.github} target='_blank'>
              <FaGithub />
            </a>
          </li>
        )}
        {/* {socialprofils.facebook && (
          <li>
            <a href={socialprofils.facebook} target='_blank'>
              <FaFacebookF />
            </a>
          </li>
        )} */}
        {/* {socialprofils.linkedin && (
          <li>
            <a href={socialprofils.linkedin} target='_blank'>
              <FaLinkedin />
            </a>
          </li>
        )} */}
        {/* {socialprofils.youtube && (
          <li>
            <a href={socialprofils.youtube} target='_blank'>
              <FaYoutube />
            </a>
          </li>
        )} */}
        {socialprofils.discord && (
          <li>
            <a href={socialprofils.discord} target='_blank'>
              <FaDiscord />
            </a>
          </li>
        )}
        {socialprofils.twitch && (
          <li>
            <a href={socialprofils.twitch} target='_blank'>
              <FaTwitch />
            </a>
          </li>
        )}
        {socialprofils.slack && (
          <li>
            <a href={socialprofils.slack} target='_blank'>
              <FaSlack />
            </a>
          </li>
        )}
        {socialprofils.telegram && (
          <li>
            <a href={socialprofils.telegram} target='_blank'>
              <FaTelegram />
            </a>
          </li>
        )}
      </ul>
      <p>Follow Me</p>
    </div>
  );
};
