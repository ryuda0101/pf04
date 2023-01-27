import React, { useState } from 'react'

const Cont2 = () => {
  let [cont2Text] = useState([
    {title:"Miami", subtit:"24 Properties"},
    {title:"Los Andeles",subtit:"18 Properties"},
    {title:"New york",subtit:"89 Properties"},
    {title:"Florida",subtit:"47 Properties"}
  ]);
  return (
    <div className='cont2'>
      <div className='center'>
        <div className='title'>
          <h2>Find Properties inThese Cities</h2>
          <p>Lrem Ipsum Dolor sit amet, consectetur adipiscing elit.</p>
        </div>
        <div className='contexts'>
      {
        cont2Text.map((item,index) => {
          return(
            // 따옴표 대신 ``쓰고 안에 ${}쓰고 그 안에 써준다.
            <div className='bg' key={index} style={{backgroundImage:`url(/img/pc${index + 1}.jpg)`}}>
              <div className='texts'>
                <h3>{item.title}</h3>
                <p>{item.subtit}</p>
              </div>
              {/* <img src={"/img/pc"+(index + 1)+".jpg"}/> */}
            </div>
          )
        })
      }   
        </div>
      </div>
    </div>
  )
}

export default Cont2