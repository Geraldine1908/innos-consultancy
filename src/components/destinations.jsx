import React from "react";
function Destinations() {
    

  const destinationsList = [
    { name: "USA", image: "https://images.unsplash.com/photo-1485738422979-f5c462d49f74?w=400" },
    { name: "UK", image: "https://images.unsplash.com/photo-1513635269975-59663e0ac1ad?w=400" },
    { name: "Cyprus", image: "https://images.unsplash.com/photo-1601581875309-fafbf2d3ed3a?w=400" },
    { name: "Europe", image: "https://images.unsplash.com/photo-1467269204594-9661b134dd2b?w=400" },
    { name: "Australia", image: "https://images.unsplash.com/photo-1506973035872-a4ec16b8e8d9?w=400" },
    { name: "Paris", image: "https://images.unsplash.com/photo-1502602898657-3e91760cbb34?w=400" },
    { name: "Dubai", image: "https://images.unsplash.com/photo-1512453979798-5ea266f8880c?w=400" },
  ];
 return(
<section  id="destinations" className="destinations">
    <h2 className="section-title">Where Dreams Take Flight</h2>
<p className="section-subtitle">Handpicked destinations to kickstart your journey.</p>
<div className="destinations-grid">

{destinationsList.map((destination) => (
          <div className="destination-card" key={destination.name}>
            <img src={destination.image} alt={destination.name} className="destination-img" />
            <h3 className="destination-name">{destination.name}</h3>
          </div>
        ))}
</div>
</section>
    )
}
export default Destinations;