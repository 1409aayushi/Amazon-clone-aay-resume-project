import React from 'react';
import "./Home.css";
import Product from './Product';
function Home() {
    return (
        <div className="home">
          <div className="home_container">
           <img className = "home_image"
           src = "https://images-eu.ssl-images-amazon.com/images/G/31/img21/Fashion/Stores/SL_Clearance/GW/PC_bunk/ClearanceStore_SL_PCBunk_50._CB659141515_.jpg" alt="" />
           <div className="home_row">
   
   
          </div>
          <div className="home_row">
            
            <Product 
            id="12423452"
            title='The Lean Startup: How Constant Innovation Creates Radically Successful Businesses' price = {470} image="https://m.media-amazon.com/images/I/81vvgZqCskL._AC_UY218_.jpg" 
            rating={5}
            />
          <Product  id="2740325704"
          title="Kenwood kMix Stand Mixer for Baking, Stylish Kitchen Mixer with k-beater, Dough Hook and Whisk, 5 Litre Glass Bowl"
          price={42,500.0}
          rating={4}
          image="https://m.media-amazon.com/images/I/51ae8jtSakL._AC_UY218_.jpg"/>
            </div>
            <div className="home_row">
            {/*Product*/}<Product id="8470464"
            title="Samsung 59.8 cm (23.5 inch) Curved LED Backlit Computer Monitor - Full HD, VA Panel with VGA, HDMI, Audio Ports - LC24F390FHWXXL (Black)" 
            price={12,999}
            rating={4}
            image="https://m.media-amazon.com/images/I/71nplbAMwzL._AC_UY218_.jpg"
            />
            <Product id="8375376086"
            title="Echo Dot (3rd Gen) - #1 smart speaker brand in India with Alexa (White)" 
            price={3,499}
            rating={4}
            image="https://m.media-amazon.com/images/I/61fAoBkYQ1L._AC_UY218_.jpg"/>
            <Product id="3848089856"
            title="2021 Apple iPad Pro with Apple M1 chip (11-inch/27.96 cm, Wi-Fi + Cellular, 128GB) - Space Grey (3rd Generation)" 
            price={83,390}
            rating={5}
            image="https://m.media-amazon.com/images/I/81a-rN2A3DS._AC_UY218_.jpg"/>
          
            </div>
            <div className="home_row">
            <Product id="9385670864"
            title="2020 Apple MacBook Pro (13.3-inch/33.78 cm, Apple M1 chip with 8‑core CPU and 8‑core GPU, 8GB RAM, 256GB SSD) - Silver" 
            price={1,15,990}
            rating={4}
            image="https://m.media-amazon.com/images/I/71gD8WdSlaL._AC_UY218_.jpg"
            />
          
              </div>
           </div>
        
        </div>
    )
}

export default Home;
