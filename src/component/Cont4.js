import React, { useState } from 'react'

const Cont4 = () => {
    // 스테이트 세팅
    let [imgs] = useState([
        {url:"/img/symbol01.png"},
        {url:"/img/symbol02.png"},
        {url:"/img/symbol03.png"},
        {url:"/img/symbol04.png"},
        {url:"/img/symbol05.png"}
    ])
  return (
    <div className='cont4'>
        <div className='center'>
            <div className='title'>
                <h2>Our Partners</h2>
                <p>We only work with the best companies around the globe</p>
            </div>
            <div className='imgBoxs'>
                {
                    imgs.map((item, index) => {
                        return(
                            <div className='box' key={index}>
                                <img src={item.url}/>
                            </div>
                        )
                    })
                }
            </div>
        </div>
    </div>
  )
}

export default Cont4
