import styles from "./Background.module.css";

const Background = (props) => {
  return (
    <div className={styles.background}>
      <img
        className={styles.dercoImg1}
        src="https://res.cloudinary.com/dzjf00pvx/image/upload/v1692211931/Derco1_elxsel.png"
        alt=""
      />

      <img
        className={styles.dercoImg2}
        src="https://res.cloudinary.com/dzjf00pvx/image/upload/v1692212872/Derco2_vtbp6z.png"
        alt=""
      />

      <img
        className={styles.dercoImg3}
        src="https://res.cloudinary.com/dzjf00pvx/image/upload/v1692219097/Derco3_wrgye6.png"
        alt=""
      />

      <img
        className={styles.dercoImg4}
        src="https://res.cloudinary.com/dzjf00pvx/image/upload/v1692219994/Derco4_noicos.png"
        alt=""
      />

      <img
        className={styles.dercoImg5}
        src="https://res.cloudinary.com/dzjf00pvx/image/upload/v1692220651/Derco5_kqiqyu.png"
        alt=""
      />
      {props.children}
    </div>
  );
};

export default Background;
