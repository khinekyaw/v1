import React from "react";

import { experienceList } from "../data";

function ListItem(props) {
  const { company, position, start, end } = props;

  return (
    <div className="exp_list_item">
      <span></span>
      <span></span>
      <div></div>
      <p>
        {position} <a>@ {company}</a>
      </p>
      <i>
        {start} - {end}
      </i>
    </div>
  );
}

export default function Experience() {
  return (
    <div className="content">
      {experienceList.map((i, idx) => (
        <ListItem key={idx} {...i} />
      ))}
    </div>
  );
}
