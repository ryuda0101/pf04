import React, { useEffect } from 'react';
// 스테이트를 사용하려면 해당 컴포넌트 파일에 불러들여야 한다.
import { useState } from 'react';
import { Link } from 'react-router-dom';

import GnbMenu from './GnbMenu'

function Header() {
    // 데이터 저장공간  →   스테이트(state) 라고 부른다.
    // 스테이트 생성 방법
    // let [작명,데이터변경함수명(데이터가 변동사항이 없다면 생략해도 무방하다.)] = useState();
    // let [gnbMenu] = useState(["Home","Listing","Gallery","Pages","Blog","Contact"]);
    // 리액트 안에서 스크립트 짜는 법
    // useEffect 함수구간을 만들고 그 안에 평소 스크립트 태그 선택 / 이벤트 기능 들 평소 짜던대로 기능 구현 가능
    // useEffect는 무조건 이 위치에 있어야 한다! 아래로 내려가면 XXX!!
    useEffect(() => {
        const topHeader = document.querySelector("#header")
        
        window.addEventListener("scroll",() => {
            let windowScroll = window.scrollY;
            let cont2Start = document.querySelector(".cont2").offsetTop;
            if(windowScroll >= cont2Start) {
                topHeader.classList.add("on");
            }
            else {
                topHeader.classList.remove("on");
            }
        });
    });
    return (
        <div id='header'>
            <div className='center'>
                {/* <h1 className='logo'><a href='/'></a></h1> */}
                <h1 className='logo'><Link to='/'><img src='/img/sitelogo.jpg' alt='사이트로고'/></Link></h1>
                <GnbMenu></GnbMenu>
                {/* <ul className='gnb'>
                    {
                        // 리액트에서는 map()이라는 함수로 반복문을 돌린다. forEach문과 이름만 다르고 동일하게 사용! 
                        gnbMenu.map((item, index) => {
                            return (
                                // map을 사용할 때에는 꼭!! key를 써줘야 한다.
                                // <li key={index}><a href={"/"+gnbMenu[index]}>{gnbMenu[index]}</a></li>
                                <li key={index}><Link to={"/"+gnbMenu[index]}>{gnbMenu[index]}</Link></li>
                            )
                        })
                    }
                </ul> */}
                <a href='#' className='listing'>Create Listing</a>
            </div>
        </div>
    )
}

export default Header
