import React from "react"

const Card = (pullCardProperty) => {
  return (
    <div className="handStyles">
      {pullCardProperty.hand.map((card, index) => {
        return (
          <div className="cardStyles" key={index}>
            {card}
          </div>
        )
      })}
    </div>
  )
}
export default Card