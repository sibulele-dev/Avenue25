import React from "react";

function PricingCard(props, { Package, Cost, Deals }) {
  return (
    <div>
      <div className="Pricingcard">
        <div className="cardTitle">
          <h1>Web Dev</h1>
        </div>
        <div className="infoContainer">
          <p>
            R250
            <span>/mon</span>
          </p>
          <ul className="PriceOptions">
            
            <li>Maintena</li>
            <li>Maintena</li>
            <li>Maintena</li>
            <li>Maintena</li>
          </ul>
          <a href=""> Choose me</a>
        </div>
      </div>
    </div>
  );
}

export default PricingCard;
