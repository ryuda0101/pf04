import React, { useState } from 'react'
// data폴더 안의 faqs 변수 불러오기
import {faqs} from '../data/faq'
import AccordionsItems from './AccordionsItems'


const Accordion = () => {
    // 해당 아코디언 아이템을 클릭했는지 감지하는 데이터값 스테이트로 설정
    const [clicked,setClicked] = useState("not");

    // 클릭한 아코디언 아이템의 순번값을 가지고 clicked에 있는 not과 같은지 아닌지 체크해서 누구를 클릭했는지 확인하는 작업
    const handleToggle = (index) => {
        if(clicked === index){
            // 접을 때
            setClicked("not");
        }
        else {
            // 펼칠 때
            setClicked(index);
        }
    }

  return (
    // 부모 컴포넌트에서 자식 컴포넌트에게 데이터값을 보내줄 때 데이터의 유형(자료형)은 정수, 문자열, 불리언, 함수, 배열, 객체 전달 가능
    // 자식 컴포넌트에서 전달받은 데이터값을 가지고 사용할 수 있음
    <ul className='accordion'>
        {
            faqs.map((faq,index) => (
                // 태그를 집어넣을때에는 return(태그~~)를 쓰지만
                // 아래의 경우처럼 이미 완성된 컴포넌트가 이미 있는 경우에는 return을 쓰지 않고 컴포넌트를 바로 불러와서 쓴다.
                <AccordionsItems
                    key={index} faqData={faqs[index]}
                    toggle={() => handleToggle(index)}
                    active={clicked === index}
                >
                </AccordionsItems>
            ))
        }
    </ul>
  )
}

export default Accordion
