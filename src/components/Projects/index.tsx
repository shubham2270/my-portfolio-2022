import Image from 'next/image';
import classNames from 'classnames';

import ProjectCard from './ProjectCard';

import { projectData } from './projectData';

import styles from './projects.module.scss';
const { linkStyle, projectContainer } = styles;

const { heading, main, description, imageContainer, socialIconContainer, icon, buttonContainer, button } = styles;

const Projects = () => {
  return (
    <div className={main}>
      <h2 className="heading">Some personal projects</h2>
      <div className={projectContainer}>
        {projectData.map((project, index) => {
          const { image, alt, desc, url, github, name, gif } = project;
          return <ProjectCard image={image} alt={alt} desc={desc} url={url} github={github} key={name} gif={gif} />;
        })}
      </div>
    </div>
  );
};

export default Projects;
