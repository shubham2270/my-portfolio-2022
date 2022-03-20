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

  return (
    <div className={main}>
      <div>
        <h2 className="heading">Skills & Experience</h2>
        <div className="bodyText">
          Currently working as Front End Developer in{' '}
          <a href={aicrowdUrl} target="_blank" rel="noopener noreferrer" className={linkStyle}>
            AIcrowd
          </a>{' '}
          using Next Js as main library. Previously worked in{' '}
          <a href={unifizeUrl} target="_blank" rel="noopener noreferrer" className={linkStyle}>
            Unifize
          </a>{' '}
          one year as a Front end developer used React Js, Redux, styled components etc , as main library and tools.
          <br /> <br />
          Beside I keep working on some side projects either for learning new things or just for fun, Checkout my{' '}
          <a href={githubUrl} target="_blank" rel="noopener noreferrer" className={linkStyle}>
            github
          </a>{' '}
          &{' '}
          <a href={linkedinUrl} target="_blank" rel="noopener noreferrer" className={linkStyle}>
            linkedin{' '}
          </a>{' '}
          for more info.
        </div>
      </div>
    </div>
  );
};

export default Skills;
