import React from 'react'

const Card = (props) => {
  const { handleClickBox, hideFalg = false, cardValue, color } = props
  const { sequence, available } = cardValue
  let flagFalse = !hideFalg ? available : false
  return (
    <div
      onClick={() => handleClickBox(sequence)}
      style={{
        backgroundColor: flagFalse ? `#${color}` : 'white',
        width: '5em',
        height: '5em',
      }}
    />
  )
}
export default Card