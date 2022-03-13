import Image from 'next/image';

import styles from './about.module.scss';

const { heading, main, description, imageContainer, socialIconContainer } = styles;

const About = () => {
  return (
    <div className={main}>
      <div>
        <h2 className="heading">About me</h2>
        <div className="bodyText">
          I have been working as front-end developer since 2019, I’ve always been someone who has both a creative and a
          logical side.
          <p>
            I have done Graphic web design/Development course from Arena Animation and also taken Full Stack Web
            Development course available online so that I can take my web skills to next level and also keep learning
            new technologies.
          </p>
        </div>
      </div>
      <div className={imageContainer}>
        <Image
          src="/assets/images/me.jpg"
          objectFit="cover"
          alt="me"
          width={400}
          height={400}
          className={styles.myImage}
        />
      </div>
      <div className={socialIconContainer}></div>
    </div>
  );
};

export default About;
