import Image from 'next/image';
import classNames from 'classnames';

import styles from './projects.module.scss';
const { linkStyle } = styles;

const { heading, main, description, imageContainer, socialIconContainer, icon, buttonContainer, button } = styles;

const Projects = () => {
  return (
    <div className={main}>
      <h2 className="heading">Some personal projects</h2>
    </div>
  );
};

export default Projects;
