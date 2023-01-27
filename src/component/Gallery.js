import React, { useState } from 'react'
import Banner from './Banner'

const Gallery = () => {
    // 이미지 클릭시 숨겨져 있는 검정 바탕화면 나오고 사라지게 하는 데이터값
    let [toggle,toggleSet] = useState(false);

    // 클릭한 이미지의 순번값이 담기는 값
    let [imgNum, imgNumSet] = useState(0);
    
    // 9개 이미지 반복문 돌리기 위해 배열로 이미지 파일명 담는 스테이트
    let [lists] = useState(["list1","list2","list3","list4","list5","list6","list7","list8","list9"]);
    
return (
    <>
        {/* props사용방법 <Banner 작명="값"></Banner> */}
        <Banner main="Home" title="Gallery"></Banner>
        <div className='gallery'>
            <div className='center'>
                {
                    lists.map((item,index) => {
                        return(
                            // ↓ onClick={()=>{toggleSet(true)}}에서 toggleSet에 쓴 값이
                            // 클릭시 상단의 toggle에 담기게 된다.
                            // imgNumSet가 해당 이미지의 순번값으로 바뀌어야 한다.
                            // {} → 배열로 불러오겠다. / [] → 객체로 불러오겠다.
                            <div className='list' key={index} onClick={()=>{toggleSet(true); imgNumSet(index); }} >
                                <img src={"/img/"+item+".jpg"} alt="인테리어 이미지" />
                            </div>
                        )
                    })
                }
            </div>
        </div>
        {/* 조건문으로 특정 조건에서는 className이 붙도록 설정, 아니면 안붙도록 설정 */}
        <div id='blackBg' className={toggle === true ? "show" : null} >
            <img src={"/img/list"+(imgNum+1)+".jpg"} alt='이미지' />
            <div className='prev' onClick={() => {imgNum === 0 ? imgNumSet(8) : imgNumSet(imgNum-1)}}>이전이미지</div>
            <div className='next' onClick={() => {imgNum === 8 ? imgNumSet(0) : imgNumSet(imgNum+1)}}>다음이미지</div>
            <div className='close' onClick={() => {toggleSet(false)}}>닫기</div>
        </div>
    </>
)
}

export default Gallery
