import styles from './myName.module.scss';

const { helloStyle, nameStyle, frontEndStyle, main } = styles;

const MyName = () => {
  return (
    <div className={main}>
      <div className={helloStyle}>Hello I&apos;m</div>
      <div className={nameStyle}>Shubham Kumar</div>
      <div className={frontEndStyle}>Front End Developer</div>
    </div>
  );
};

export default MyName;
