import React from 'react'

function PricingCard() {
  return (
    <div>
        <div className="Pricingcard">
            <div className="cardTitle">
                <h1>Premium Package</h1>
            </div>
            <div className="infoContainer">
            <p>R900 <span>/mon</span></p>
            <ul className="PriceOptions">
                <li> Hosting</li>
                <li> Maintenance</li>
                <li> SSL certificate</li>
                <li> Google Ads </li>
                <li> Hosting</li>
                <li> Hosting</li>
            </ul>
            <a href=""> Choose me</a>
            </div>
        </div>
    </div>
  )
}

export default PricingCard