import React from 'react'
import { Link, useLocation } from 'react-router-dom'

import LogoIcon from '../components/icons/logo'
import Titleline from '../components/icons/titleline'

const pageTitles = {
  '/experience': "Where I've Worked",
  '/work': 'Projects',
  '/contact': 'Contact Me',
}

export default function Header() {
  const location = useLocation()
  const title = pageTitles[location.pathname]

  const Title = title && (
    <div className="title">
      <div className="page_title">{title}</div>
      <Titleline />
    </div>
  )

  return (
    <header>
      <Link to={''} className="logo">
        <LogoIcon />
      </Link>
      {Title}
    </header>
  )
}
