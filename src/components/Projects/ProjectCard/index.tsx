import React from 'react';

import styles from './projectCard.module.scss';
const { main, button, buttonWrapper, description } = styles;

export type ProjectCardProps = {
  image: string;
  alt: string;
  desc: string;
  url: string;
  github: string;
  gif: string;
};

const ProjectCard = ({ image, alt, desc, url, github, gif }: ProjectCardProps) => {
  return (
    <div className={main}>
      <div>
        <img src={`/assets/images/projectImages/webprojects/${gif}`} alt={alt}></img>
        <p className={description}>{desc}</p>
      </div>
      <div className={buttonWrapper}>
        <a className={button} href={github} target="_blank" rel="noopener noreferrer">
          <i className="fab fa-github" style={{ paddingRight: '8px' }}></i> Github
        </a>
        <a className={button} href={url} target="_blank" rel="noopener noreferrer">
          <i className="fas fa-pager" style={{ paddingRight: '8px' }}></i> Live
        </a>
      </div>
    </div>
  );
};

export default ProjectCard;
