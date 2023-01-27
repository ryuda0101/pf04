import React, { useState } from 'react'

const Footer = () => {
    let [quick] = useState(["About Us", "Terms & Conditions", "User's Guide", "Support Center", "Press Info"])
    let [contact] = useState(["info@findhouse.com", "Collins Street West, Victoria", "8007, Australia", "+1 246-345-0699", "+1 246-345-0695"])
    let [gnb] = useState(["Home","Listing","Property","Pages","Blog","Contact"])
  return (
    <div id='footer'>
        <div className='top_line'>
            <div className='center'>
                <div className='about_menu'>
                    <h3>About Site</h3>
                    <p>Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
                </div>
                <div className='quick_menu'>
                    <h3>Quick Links</h3>
                    <ul>
                        {
                            quick.map((item, index) => {
                                return (
                                    <li key={index}><a href='#'>{item}</a></li>
                                )
                            })
                        }
                    </ul>
                </div>
                <div className='contact_menu'>
                    <h3>Contact Us</h3>
                    <ul>
                        {
                            contact.map((item, index) => {
                                return (
                                    <li key={index}><a href='#'>{item}</a></li>
                                )
                            })
                        }
                    </ul>
                </div>
            </div>
        </div>
        <div className='bot_line'>
            <div className='center'>
                <ul className='gnb_menu'>
                        {
                            gnb.map((item, index) => {
                                return (
                                    <li key={index}><a href='#'>{item}</a></li>
                                )
                            })
                        }
                </ul>
                <p>2020 Find House. Made with love.</p>
            </div>
        </div>
    </div>
  )
}

export default Footer
