import React from 'react'

const Banner = (props) => {
  return (
    <div className='banner' style={{backgroundImage:"url(/img/innerbg.jpg)"}}>
      <p>{props.main}/{props.title}</p>
      <h2>{props.title}</h2>
    </div>
  )
}

export default Banner
