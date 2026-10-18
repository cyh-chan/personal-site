import React from 'react';
import { Link } from 'react-router-dom';

import ContactIcons from '../Contact/ContactIcons';

const { PUBLIC_URL } = process.env; // set automatically from package.json:homepage

const SideBar = () => (
  <section id="sidebar">
    <section id="intro">
      <Link to="/" className="logo">
        <img src={`${PUBLIC_URL}/images/me.jpg`} alt="" />
      </Link>
      <header>
        <h2>Chan YH</h2>
        <p><a href="mailto:c@chanyh.com">c@chanyh.com</a></p>
      </header>
    </section>

    <section className="blurb">
      <h2>About</h2>
      <p>
        Hi, I&apos;m YH. My research interests lie at the intersection of statistical
        inference, machine learning, and computational statistics, with a particular
        focus on developing reliable, interpretable, and scalable methodologies
        for high-dimensional and evolving data.
      </p>
      <ul className="actions">
        <li>
          {!window.location.pathname.includes('/resume')
            ? <Link to="/resume" className="button">Learn More</Link>
            : <Link to="/about" className="button">About Me</Link>}
        </li>
      </ul>
    </section>

    <section id="footer">
      <ContactIcons />
      <p className="copyright">&copy; CHAN YH <Link to="/">chanyh.com</Link>.</p>
    </section>
  </section>
);

export default SideBar;
