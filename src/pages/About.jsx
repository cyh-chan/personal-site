import React from "react";
import { Link } from "react-router-dom";
import Markdown from "markdown-to-jsx";
import Main from "../layouts/Main";
import Personal from "../components/Stats/Personal";

import { markdown } from "../data/about";

const About = () => {
  const count = markdown
    .split(/\s+/)
    .map((s) => s.replace(/\W/g, ""))
    .filter((s) => s.length).length;

  return (
    <Main title="About" description="Learn about Chan YH">
      <article className="post markdown" id="about">
        <header>
          <div className="title">
            <h2>
              <Link to="/about">About Me</Link>
            </h2>
            <p>(in about {count} words)</p>
          </div>
        </header>
        <Markdown>{markdown}</Markdown>
        <Personal />
      </article>
    </Main>
  );
};

export default About;
