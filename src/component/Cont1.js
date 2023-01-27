import React from 'react'

const Cont1 = () => {
  return (
    <div className='cont1'>
        <div className='center'>
            <div className='title'>
                <h2>Featured Properties</h2>
                <p>Handpicked properties by our team</p>
            </div>
            <div className='apart-list'>
                <div className='list' data-aos="fade-up">
                    {/* 
                        리액트에서 배경화면이미지를 넣고자 할 때 css에서 넣는게 아니라 태그에 style={{안에 넣어준다.}}
                        경로 문제때문에 그렇다.
                    */}
                    <div className='bg' style={{backgroundImage:"url(/img/fp1.jpg)"}}>
                        <div className='rent'>For Rent</div>
                        <div className='feat'>Featured</div>
                        <div className='price'>$13,000<span>/mo</span></div>
                    </div>
                    <div className='detail'>
                        <p>Apartment</p>
                        <h3>Renovated Apartment</h3>
                        <span>1421 San Pedro St. Los Andeles. CA 90015</span>
                    </div>
                    <div className='auther'>
                        <div>
                            <img src="/img/pposter1.png"/>
                        </div>
                        <p>4 years ago</p>
                    </div>
                </div>
                <div className='list' data-aos="fade-down">
                    <div className='bg' style={{backgroundImage:"url(/img/fp2.jpg)"}}>
                        <div className='rent'>For Rent</div>
                        <div className='feat'>Featured</div>
                        <div className='price'>$13,000<span>/mo</span></div>
                    </div>
                    <div className='detail'>
                        <p>Apartment</p>
                        <h3>Renovated Apartment</h3>
                        <span>1421 San Pedro St. Los Andeles. CA 90015</span>
                    </div>
                    <div className='auther'>
                        <div>
                            <img src="/img/pposter1.png"/>
                        </div>
                        <p>4 years ago</p>
                    </div>
                </div>
                <div className='list' data-aos="fade-up">
                    <div className='bg' style={{backgroundImage:"url(/img/fp3.jpg)"}}>
                        <div className='rent'>For Rent</div>
                        <div className='feat'>Featured</div>
                        <div className='price'>$13,000<span>/mo</span></div>
                    </div>
                    <div className='detail'>
                        <p>Apartment</p>
                        <h3>Renovated Apartment</h3>
                        <span>1421 San Pedro St. Los Andeles. CA 90015</span>
                    </div>
                    <div className='auther'>
                        <div>
                            <img src="/img/pposter1.png"/>
                        </div>
                        <p>4 years ago</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Cont1 
