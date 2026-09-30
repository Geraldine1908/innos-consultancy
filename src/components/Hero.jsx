import React from "react";
function Hero(){
    return(
        <section id="hero" className="hero"> 
        <div className="hero-shape shape-1"></div>
      <div className="hero-shape shape-2"></div>
        <div className="hero-left">
 <h1 className="hero-title">See The World. Build Your Future.</h1>
        <p className="hero-subtitle">Explore exciting destinations, discover opportunities abroad, and get the guidance you need to make your next move with confidence.</p>
        <button className="hero-btn">Explore Destinations</button>
        
        </div>
        <div className="hero-right">
            <img src="https://images.unsplash.com/photo-1541339907198-e08756dedf3f?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" className="hero-img img-1" />
            <img src= " https://images.unsplash.com/photo-1605130284535-11dd9eedc58a?q=80&w=1332&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"className="hero-img img-2" />
            <img src= "https://images.unsplash.com/photo-1558369178-6556d97855d0?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" className="hero-img img-3" />
        </div>
       
        </section>
    )
}
export default Hero;