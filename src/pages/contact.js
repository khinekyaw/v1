import React from 'react'

import LinkedinIcon from '../components/icons/linkedin'
import GithubIcon from '../components/icons/github'
import MailIcon from '../components/icons/mail'

export default function Contact() {
  return (
    <div className="content contact">
      <h2>Let's Work Together</h2>
      <a
        className="btn hover_glass mail_btn"
        href="mailto:thekhinekyaw@gmail.com"
      >
        <MailIcon />
        Drop me a line
      </a>
      <div className="social_links">
        <a
          className="icon_link"
          href="https://www.linkedin.com/in/khine-kyaw-tun-b68455178/"
          aria-label="LinkedIn"
          target={'_blank'}
          rel="noopener noreferrer"
        >
          <LinkedinIcon />
        </a>
        <a
          className="icon_link"
          href="https://github.com/khinekyaw"
          aria-label="Github"
          target={'_blank'}
          rel="noopener noreferrer"
        >
          <GithubIcon />
        </a>
      </div>
    </div>
  )
}
