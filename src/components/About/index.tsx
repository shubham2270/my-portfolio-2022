import Image from 'next/image';
import classNames from 'classnames';

import styles from './about.module.scss';

const { heading, main, description, imageContainer, socialIconContainer, icon, buttonContainer, button } = styles;

// Since 2019, I've been working as a front-end developer. I've always been someone who can think creatively as well as logically.

//   I've taken an Arena Animation visual web design and development course, as well as online Full Stack Web Development course, so that I can advance my web development skills while also learning new technologies.

//   I have been working as front-end developer since 2019, I’ve always been someone who has both a creative and a logical side.
// I have done Graphic web design/Development course from Arena Animation and also taken Full Stack Web Development course available online so that I can take my web skills to next level and also keep learning new technologies.

const About = () => {
  return (
    <div className={main}>
      <div>
        <h2 className="heading">About me</h2>
        <div className="bodyText">
          Since 2019, I&apos;ve been working as a front-end developer. I've always been someone who can think creatively
          as well as logically.
          <p>
            I&apos;ve taken an Arena Animation visual web design and development course, as well as online Full Stack
            Web Development course, so that I can advance my web development skills while also learning new
            technologies.
          </p>
        </div>
        <div className={buttonContainer}>
          <div className={socialIconContainer}>
            <a href="https://twitter.com/shubham2272" target="_blank" rel="noopener noreferrer">
              <i className={classNames('fab', 'fa-twitter', icon)}></i>
            </a>
            <a href="https://github.com/shubham2270" target="_blank" rel="noopener noreferrer">
              <i className={classNames('fab', 'fa-github', icon)}></i>
            </a>
            <a href="https://linkedin.com/in/shubham2270" target="_blank" rel="noopener noreferrer">
              <i className={classNames('fab', 'fa-linkedin-in', icon)}></i>
            </a>
          </div>
          <a
            className={button}
            href="https://drive.google.com/file/d/1qjMf_Umeb7Hd7AgYAd5BHP9_-CtyPqwU/view"
            target="_blank"
            rel="noopener noreferrer">
            <i className="fas fa-file" style={{ paddingRight: '8px' }}></i> Resume
          </a>
        </div>
      </div>
      <div className={imageContainer}>
        <Image
          src="/assets/images/me.jpg"
          objectFit="cover"
          alt="me"
          width={400}
          height={400}
          placeholder="blur"
          blurDataURL="data:image/gif;base64,R0lGODlhAQABAIAAAP///wAAACH5BAEAAAAALAAAAAABAAEAAAICRAEAOw=="
          className={styles.myImage}
        />
      </div>
    </div>
  );
};

export default About;
