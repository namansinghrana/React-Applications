import styles from "./Navigation.module.css";

const Navigation = () => {
  return(
    <nav className={`${styles.navigation}`}>
        <div className="logo"><img src="/images/logo.png" alt="" /></div>

        <ul>
            <li>Home</li>
            <li>About</li>
            <li>Contact</li>
        </ul>
    </nav>
    );
};

export default Navigation;