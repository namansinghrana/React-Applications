import { MdMessage } from 'react-icons/md';
import Button from '../Button/Button';
import styles from './ContactForm.module.css';
import { MdCall } from "react-icons/md";
import { MdMail } from "react-icons/md";


const ContactForm = () => {
  return (
    <section
    className={styles.container}>
        <div className={styles.contact_form}>
        <div className={styles.top_btn}>
        <Button text = "VIA SUPPORT CHAT" icon={<MdMessage/>}/>
            <Button text = "VIA CALL" icon ={<MdCall/>} />
        </div>
        <Button text = "VIA CALL" icon ={<MdMail/>} isOutline={true}/>
          
        <form action="">
          <div className={styles.form_control}>
            <label htmlFor="name">Name</label>
            <input type="text" name="name" />
          </div>

          <div className={styles.form_control}>
            <label htmlFor="email">Email</label>
            <input type="email" name="email" />
          </div>

          <div className={styles.form_control}>
            <label htmlFor="text">Text</label>
            <textarea name="text" rows={8}></textarea>
          </div>
          <div style={{
            display: "flex", 
            justifyContent: "end",
            marginRight: "4px"
          }}>
          <Button text = "SUBMIT" />
          </div>
        </form>
        </div>
        <div className={`submit_btn  ${styles.contact_image}`}>
          <img src="/images/contact1.svg" alt="" />
        </div>

    </section>
  )
}

export default ContactForm;