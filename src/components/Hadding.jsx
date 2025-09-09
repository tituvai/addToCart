import React from 'react'

const Hadding = (props) => {
  return (
    <props.as className={`${props.className}`}>{props.text}</props.as>
  )
}

export default Hadding