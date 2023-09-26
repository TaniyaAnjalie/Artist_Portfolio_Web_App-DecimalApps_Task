import React from 'react'


const style = {
  p: {
    color: "#2CD3E1"
  },
  h2: {
    color: "#FFB84C"
  }
}


function Art({imageSrc, title, description}) {
  return (
    <div className="artwork">
      <img src={imageSrc} alt={title} />
      <h2 style={style.h2}>{title}</h2>
      <p style={style.p}>{description}</p>
    </div>
  )
}

export default Art
