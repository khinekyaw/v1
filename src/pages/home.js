import React from "react";
import { Link } from "react-router-dom";

import ArrowrightIcon from "../components/icons/arrowright";

export default function Home() {
  return (
    <div className="content home">
      <div className="heading">
        Hi, I'm <span className="name">Khine Kyaw Tun</span>,
        <p className="occupation">a Full-stack Developer</p>
      </div>
      <Link to="/v1/work" className="btn hover_glass home_page_btn">
        View My Work
        <ArrowrightIcon />
      </Link>
    </div>
  );
}
