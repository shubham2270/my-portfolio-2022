import Image from 'next/image';
import classNames from 'classnames';

import styles from './about.module.scss';
const { linkStyle } = styles;

const { heading, main, description, imageContainer, socialIconContainer, icon, buttonContainer, button } = styles;

const Skills = () => {
  const githubUrl = 'https://www.github.com/shubham2270';
  const linkedinUrl = 'https://www.linkedin.com/in/shubham2270';
  const unifizeUrl = 'https://www.unifize.com/';
  const aicrowdUrl = 'https://www.aicrowd.com';

  //   At the moment, I'm working as a front-end developer at AIcrowd, where I'm utilising NextJS as my primary library. I previously worked as a front-end developer at Unifize for a year, using ReactJS, Redux, styled-components, and other frameworks and tools.

  // Aside from that, I continue to work on some side projects, either to learn new things or just for fun. For further information, see my GitHub and LinkedIn profiles.

  return (
    <div className={main}>
      <div>
        <h2 className="heading">Skills & Experience</h2>
        <div className="bodyText">
          At the moment, I'm working as a front-end developer at{' '}
          <a href={aicrowdUrl} target="_blank" rel="noopener noreferrer" className={linkStyle}>
            AIcrowd
          </a>{' '}
          , where I'm utilizing NextJS as my primary library. I previously worked as a front-end developer at{' '}
          <a href={unifizeUrl} target="_blank" rel="noopener noreferrer" className={linkStyle}>
            Unifize
          </a>{' '}
          for a year, using ReactJS, Redux, styled-components, and other frameworks and tools.
          <br /> <br />
          Aside from that, I continue to work on some side projects, either to learn new things or just for fun. For
          further information, check out my{' '}
          <a href={githubUrl} target="_blank" rel="noopener noreferrer" className={linkStyle}>
            GitHub
          </a>{' '}
          and{' '}
          <a href={linkedinUrl} target="_blank" rel="noopener noreferrer" className={linkStyle}>
            LinkedIn{' '}
          </a>{' '}
          profiles.
        </div>
      </div>
    </div>
  );
};

export default Skills;
