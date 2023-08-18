import styles from "./Logo.module.css";

const Logo = (props) => {
  return (
    <figure className={styles.logo}>
      <img
        width={props.width}
        height={props.height}
        marginBottom={props.marginBottom}
        src="https://res.cloudinary.com/dzjf00pvx/image/upload/v1692202619/Derco_pxifxm.png"
        alt="Logo_Derco"
      />
    </figure>
  );
};

export default Logo;
