import React from "react";

import { NavLink } from "react-router-dom";
import HomeIcon from "./icons/home";
import BriefcaseIcon from "./icons/briefcase";
import CodeIcon from "./icons/code";
import EmailIcon from "./icons/email";

function Li(props) {
  const Props = { ...props };

  delete Props.children;
  delete Props.icon;

  return (
    <li>
      <NavLink {...Props} className="hover_glass">
        {props.icon}
      </NavLink>
      <p className="nav_link_text">{props.children}</p>
    </li>
  );
}

export default function Nav() {
  return (
    <nav>
      <ul>
        <Li to="" icon={<HomeIcon />} end>
          HOME
        </Li>
        <Li to="experience" icon={<BriefcaseIcon />}>
          EXPERIENCE
        </Li>
        <Li to="work" icon={<CodeIcon />}>
          WORK
        </Li>
        <Li to="contact" icon={<EmailIcon />}>
          CONTACT
        </Li>
      </ul>
    </nav>
  );
}
