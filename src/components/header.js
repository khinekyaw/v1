import React from "react";
import { Link, useLocation } from "react-router-dom";

import LogoIcon from "../components/icons/logo";
import Titleline from "../components/icons/titleline";

const pageTitles = {
  "/v1/experience": "Where I've Worked",
  "/v1/work": "Projects",
  "/v1/contact": "Contact Me",
};

export default function Header() {
  const location = useLocation();
  const title = pageTitles[location.pathname];

  const Title = title && (
    <>
      <div className="page_title">{title}</div>
      <Titleline />
    </>
  );

  return (
    <header>
      <Link to={""} className="logo">
        <LogoIcon />
      </Link>
      {Title}
    </header>
  );
}
