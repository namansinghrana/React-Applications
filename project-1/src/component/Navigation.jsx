import App from "../App";

const Navigation = () => {

    return(
        <div>
                <nav className="container">
                <div className="logo">
                    <img src="/brand_logo.png" alt="" />
                </div>

                <ul>
                  <li href="">Menu</li>
                  <li href="">Location</li>
                  <li href="">Contact</li>
                  <li href="">About</li>
                </ul>
                <button className="button">Login</button>
            </nav>
        </div>
    );
};


export default Navigation;