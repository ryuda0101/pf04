import React from 'react'

const AccordionsItems = (props) => {
    // console.log(props.toggle);
    // props에 전달받은 데이터값을 전부 담고있는 객체로 취급
    // ex. props.active    props.faqData.question    props.toggle    props.faqData.answer
    console.log(props.active);
  return (
    <li className={`accordion_item ${props.active ? "active" : ""}`}>
        <button className='button' onClick={props.toggle}>
            <p>{props.faqData.question}</p>
            <span className='control'>+</span>
        </button>
        <div className={`answer_wrapper ${props.active ? "open" : null}`}>
            <p className='answer'>{props.faqData.answer}</p>
        </div>
    </li>
  )
}

export default AccordionsItems
