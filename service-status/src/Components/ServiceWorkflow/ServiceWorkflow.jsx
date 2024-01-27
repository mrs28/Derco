import styles from "./ServiceWorkflow.module.css";
import Logo from "../Atoms/Logo/Logo";
import { Typography, CssBaseline } from "@mui/material";
import "@fontsource/roboto/400.css";
import Input from "../Atoms/Input/Input";

const ServiceWorkflow = () => {
  return (
    <div className={styles.serviceWorkFlow}>
      <CssBaseline />
      <Logo width="120px" height="120px" marginBottom="2px" />

      <Input mt="0.5rem"
        type="text"
        // name="plate"
        // width="55%"
        height=""
        // onChange={handleChange}
        placeholder="EJEM - PLO"
      />

      {/* <div className={styles.boxLineServices}>
        <div className={styles.lineServices}></div>
      </div>
      */}

      {/* ******* */}
      <div className={styles.boxIconsServices}>
        <div className={styles.boxIconContainer}>
          <div className={styles.boxIcon}>
            <img
              src="https://res.cloudinary.com/dzjf00pvx/image/upload/v1692381882/assignment_kqhwlg.png"
              width="35px"
              alt="ícono de herramientas"
            />
          </div>
        </div>

        <div className={styles.boxText}>
          <Typography
            // className={styles.plateCheckMessage}
            variant="body1"
            fontSize="18px"
          >
            Asignación
          </Typography>
        </div>
      </div>

      <div className={styles.boxIconsServices}>
        <div className={styles.boxIconContainer}>
          <div className={styles.boxIcon}>
            <img
              src="https://res.cloudinary.com/dzjf00pvx/image/upload/v1692381882/assignment_kqhwlg.png"
              width="35px"
              alt="ícono de herramientas"
            />
          </div>
        </div>

        <div className={styles.boxText}>
          <Typography
            // className={styles.plateCheckMessage}
            variant="body1"
            fontSize="18px"
          >
            asogancion
          </Typography>
        </div>
      </div>

      <div className={styles.boxIconsServices}>
        <div className={styles.boxIconContainer}>
          <div className={styles.boxIcon}>
            <img
              src="https://res.cloudinary.com/dzjf00pvx/image/upload/v1692381882/assignment_kqhwlg.png"
              width="35px"
              alt="ícono de herramientas"
            />
          </div>
        </div>

        <div className={styles.boxText}>
          <Typography
            // className={styles.plateCheckMessage}
            variant="body1"
            fontSize="18px"
          >
            asogancion
          </Typography>
        </div>
      </div>

      <div className={styles.boxIconsServices}>
        <div className={styles.boxIconContainer}>
          <div className={styles.boxIcon}>
            <img
              src="https://res.cloudinary.com/dzjf00pvx/image/upload/v1692381882/assignment_kqhwlg.png"
              width="35px"
              alt="ícono de herramientas"
            />
          </div>
        </div>

        <div className={styles.boxText}>
          <Typography
            // className={styles.plateCheckMessage}
            variant="body1"
            fontSize="18px"
          >
            asogancion
          </Typography>
        </div>
      </div>

      <div className={styles.boxIconsServices}>
        <div className={styles.boxIconContainer}>
          <div className={styles.boxIcon}>
            <img
              src="https://res.cloudinary.com/dzjf00pvx/image/upload/v1692381882/assignment_kqhwlg.png"
              width="35px"
              alt="ícono de herramientas"
            />
          </div>
        </div>

        <div className={styles.boxText}>
          <Typography
            // className={styles.plateCheckMessage}
            variant="body1"
            fontSize="18px"
          >
            asogancion
          </Typography>
        </div>
      </div>

      <div className={styles.boxIconsServices}>
        <div className={styles.boxIconContainer}>
          <div className={styles.boxIcon}>
            <img
              src="https://res.cloudinary.com/dzjf00pvx/image/upload/v1692381882/assignment_kqhwlg.png"
              width="35px"
              alt="ícono de herramientas"
            />
          </div>
        </div>

        <div className={styles.boxText}>
          <Typography
            // className={styles.plateCheckMessage}
            variant="body1"
            fontSize="18px"
          >
            asogancion
          </Typography>
        </div>
      </div>

    </div>
  );
};

export default ServiceWorkflow;
