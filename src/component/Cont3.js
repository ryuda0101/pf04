import React, { useState } from 'react'

const Cont3 = () => {
    // 스테이트 세팅
    let [cont3Text] = useState([
        {img:"/img/icon01.jpg", title:"Trusted By Thousands", subText:"Lorem Ipsum is simply dummy text of the printing and typesetting industry."},
        {img:"/img/icon01.jpg", title:"Wide Rende Of Properties", subText:"Lorem Ipsum is simply dummy text of the printing and typesetting industry."},
        {img:"/img/icon01.jpg", title:"Financing Made Easy", subText:"Lorem Ipsum is simply dummy text of the printing and typesetting industry."},
    ])
  return (
    <div className='cont3'>
        <div className='center'>
            <div className='title'>
                <h2>Why Choose Us</h2>
                <p>We provide full service at every step.</p>
            </div>
            <div className='context'>
                {
                    cont3Text.map((item, index) => {
                        return (
                            <div className='box' key={index}>
                                <img src={item.img} alt='첫번째 아이콘 이미지'/>
                                <h3>{item.title}</h3>
                                <p>{item.subText}</p>
                            </div>
                        )
                    })
                }
            </div>
        </div>
    </div>
  )
}

export default Cont3
