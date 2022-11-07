import React from 'react'

import Project from '../components/project'
import { projectsList } from '../data'

export default function Work() {
  return (
    <div className="content">
      {projectsList.map((i, idx) => (
        <Project index={idx} {...i} key={idx} />
      ))}
    </div>
  )
}
