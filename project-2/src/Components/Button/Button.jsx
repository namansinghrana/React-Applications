import styles from "./Button.module.css";
import { MdMessage } from "react-icons/md";

const Button = ({isOutline,text,icon}) => {
  return (

    <div className={isOutline ? styles.outline_btn : styles.primary_btn}>
    {icon}
    {text}
    </div>
  )
}

export default Button