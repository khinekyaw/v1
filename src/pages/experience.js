import Position from '../components/position'

import { experienceList } from '../data'

export default function Experience() {
  return (
    <div className="content">
      {experienceList.map((i, idx) => (
        <Position key={idx} {...i} />
      ))}
    </div>
  )
}
