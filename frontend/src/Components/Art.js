import React from 'react'

const style = {
  img:{
    width: "100%"
  },
  p: {
    color: "#2CD3E1"
  },
  h2: {
    color: "#FFB84C",
    marginTop: "10px",
    marginBottom: "10px"
  }
}


function Art({imageSrc, title, description}) {
  return (
    <div className="artwork">
      <img src={imageSrc} alt={title} style={style.img}/>
      <h2 style={style.h2}>{title}</h2>
      <p style={style.p}>{description}</p>
    </div>
  )
}

export default Art
