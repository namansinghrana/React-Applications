import App from "../App";

const HeroSection = () =>{

    return (
        <main className="hero container">
            <div className="hero-content">
                <h1>YOUR FEET DESERVE THE BEST</h1>
                <p>Your feet deserve the best and we are here to help you with our shoes. Your feet deserve the best we are here to help you with our shoes</p>
       
                <div className="hero-btn">
                <button className="shop-btn">Shop Now</button>
                <button className="cat-btn">Category</button>
            </div>
            <div className="shopping">
                <p>Avialable Only On</p>                
                <div className="am-fl">
                <img src="/public/amazon.png" alt="" />
                <img src="/public/flipkart.png" alt="" />
                </div>
                </div>
            </div>
       
            <div className="hero-image">
                <img src="shoe_image.png" alt="" />
            </div>
        </main>
    );
};

export default HeroSection;