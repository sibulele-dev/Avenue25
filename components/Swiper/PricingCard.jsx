import React from 'react'

function PricingCard(props) {

  const Price = props.Data


  return (
    <div>
        <div className="Pricingcard">
                  <div className="cardTitle">
                  <h1>{props.Package}</h1>
                  </div>
                  <div className="infoContainer">
                  <p>R{props.Cost}<span>/mon</span></p>
                  <ul className="PriceOptions">
                      {/* {Prices.Deals.map((deal, index) => {
                        return(
                          <li key={index}>
                            {deal}
                          </li>
                        )
                      })} */}
                      <li>Maintena</li>
                      <li>Maintena</li>
                      <li>Maintena</li>
                      <li>Maintena</li>
                  </ul>
                  <a href=""> Choose me</a>
                  </div>
        </div>
    </div>
  )
}

export default PricingCard