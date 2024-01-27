import styles from "./CarPlateEntry.module.css";
import { Typography, CssBaseline } from "@mui/material";
import "@fontsource/roboto/400.css";
import Logo from "../Atoms/Logo/Logo";
import Input from "../Atoms/Input/Input";
import Button from "../Atoms/Button/Button";

// import Typography from "@mui/material/Typography";

const CarPlateEntry = () => {
  return (
    <div className={styles.carPlateEntry}>
      <CssBaseline />

      <Logo />

      <Typography
        className={styles.plateCheckMessage}
        // component="h2"
        variant="body1"
        fontSize="18px"
      >
        Ingrese el número de placa del vehículo para verificar el estado de su
        servicio.
      </Typography>

      <Input
        type="text"
        name="plate"
        // onChange={handleChange}
        placeholder="EJEM - PLO"
      />

      <Button
        className={styles.button}
        type="button"
        // onClick={props.onClick}
      >
        BUSCAR
      </Button>

      <figure className={styles.boxCarImg}>
        <img
          className={styles.car}
          src="https://res.cloudinary.com/dzjf00pvx/image/upload/v1692207882/Mazda-CX-5_ur0aug.png"
          alt="foto_Mazda_CX5"
        />

        <img
          className={styles.plateNumber}
          src="https://res.cloudinary.com/dzjf00pvx/image/upload/v1692208662/plate_mt9qit.png"
          alt="plate number"
        />
      </figure>

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
    </div>
  );
};

export default CarPlateEntry;
