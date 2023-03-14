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
import { socialprofils } from "../../content_option";
import UpworkIcon from '../../assets/images/download.png';
import FreelancerIcon from '../../assets/images/freelancer.jpg';
export const Socialicons = (params) => {
  return (
    <div className="stick_follow_icon">
      <ul>
        {socialprofils.twitter && (
          <li>
            <a href={socialprofils.twitter} target='_blank'>
              <FaTwitter />
            </a>
          </li>
        )}
        {socialprofils.upwork && (
          <li>
            <a href={socialprofils.upwork} target='_blank'>
              <img src={UpworkIcon} width={20} className='text-black' />
            </a>
          </li>
        )}
        {socialprofils.freelancer && (
          <li>
            <a href={socialprofils.freelancer} target='_blank'>
              <img src={FreelancerIcon} width={18} className='text-black' />
            </a>
          </li>
        )}
        {socialprofils.github && (
          <li>
            <a href={socialprofils.github} target='_blank'>
              <FaGithub />
            </a>
          </li>
        )}
        {socialprofils.skype && (
          <li>
            <a href={socialprofils.skype} target='_blank'>
              <FaSkype />
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
