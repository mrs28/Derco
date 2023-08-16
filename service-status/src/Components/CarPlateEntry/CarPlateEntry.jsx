import styles from "./CarPlateEntry.module.css";
import { Typography, CssBaseline } from "@mui/material";
import '@fontsource/roboto/300.css';
import Logo from "../Atoms/Logo/Logo";
import Input from '../Atoms/Input/Input'

// import Typography from "@mui/material/Typography";

const CarPlateEntry = () => {
  return (
    <div className={styles.carPlateEntry}>
      <CssBaseline />

      <Logo />
    <div>
    <Typography
        className={styles.text}
        // component="h2"
        variant="body1"
      >
        Ingrese el número de placa de su vehículo para verificar el estado de su servicio.
      </Typography>
    </div>

    <Input 
        type= "text"
        name= "plate"
        // onChange={handleChange}
        placeholder= "EJEM - PLO"
    />

     
    </div>
  );
};

export default CarPlateEntry;
