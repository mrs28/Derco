import styles from "./ServiceWorkflow.module.css";
import Logo from "../Atoms/Logo/Logo";
import Input from "../Atoms/Input/Input";

const ServiceWorkflow = () => {
  return (
    <div className={styles.serviceWorkFlow}>
      <Logo 
       width="160px"
       height="160px"
      />

      <Input
        type="text"
        name="plate"
        // height="8px"
        // width="10px"
        // onChange={handleChange}
        placeholder="EJEM - PLO"
      />

      <div className={styles.boxLineServices}></div>

      <div className={styles.boxIconsServices}>
        <div className={styles.boxIcon}>
          <img
            src="https://res.cloudinary.com/dzjf00pvx/image/upload/v1692317374/maintainance_ek7yr5.png"
            width="55px"
            alt="ícono de herramientas"
          />
        </div>
        <text>recepcion </text>
      </div>
    </div>
  );
};

export default ServiceWorkflow;
