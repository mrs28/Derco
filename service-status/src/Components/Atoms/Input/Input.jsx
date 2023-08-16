import styles from './Input.module.css'

const Input = (props) => {
  return (
    <input
      className={styles.input}
      name={props.name}
      type={props.type}
      value={props.value}
      onChange={props.onChange}
      placeholder={props.placeholder}
    />
  );
};

export default Input;
