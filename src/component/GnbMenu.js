import React, { useState } from 'react'
import { gnbMenu } from '../data/gnbData'

const GnbMenu = () => {
    const [isOver,isOverSet] = useState("not")

    // 2depth에 있는 li태그 한개의 높이값 지정 → 숫자값 변경해서 사용 가능
    const [subHeight] = useState(25);


  return (
    <ul className='gnbmenu' style={{display:"flex"}}>
        {
            gnbMenu.map((depth, index) => {
                return (
                    <li key={index} onMouseEnter={() => {isOverSet(index)}} onMouseLeave={() => {isOverSet("not")}}>
                        <a href='#'>{depth.depth1}</a>
                        {/* <ul className='sub' style={{display:isOver === index ? "block" : "none"}}> */}
                        <ul className='sub' style={{overflow:"hidden", transition:"all 0.5s", height:isOver === index ? subHeight*depth.depth2.length+"px" : "0px"}}>
                            {
                                depth.depth2.map((sub,index) => {
                                    return (
                                        <li key={index}>
                                            <a href='#'>{sub}</a>
                                        </li>
                                    )
                                })
                            }
                        </ul>
                    </li>
                )
            })
        }
    </ul>
  )
}

export default GnbMenu
