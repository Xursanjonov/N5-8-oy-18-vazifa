import React, { memo } from 'react'
import EmailIcon from '../../assets/icons/EmailIcon'
import payme1 from '../../assets/images/payme-1.png'
import payme2 from '../../assets/images/payme-2.png'
import payme3 from '../../assets/images/payme-3.png'
import payme4 from '../../assets/images/payme-4.png'
import payme5 from '../../assets/images/payme-5.png'

const Footer = () => {
    return (
        <div className='w-full'>
            <div className='max-w-[1240px] w-full min-h-[180px] mx-auto px-[64px]
             flex items-center justify-between transform translate-y-[50%] rounded-[20px] bg-black'>
                <h4 className='max-w-[555px] w-full text-[40px] leading-[45px] font-extrabold text-white'>
                    STAY UPTO DATE ABOUT OUR LATEST OFFERS
                </h4>
                <div className="w-[350px] flex flex-wrap flex-col gap-3.5">
                    <label htmlFor="emails" className='max-w-[400px] w-full h-[48px] px-5 rounded-3xl flex items-center gap-3 bg-white'>
                        <span> <EmailIcon /> </span>
                        <input className='w-full h-[60%]' type="email" id='emails' placeholder="Enter your email address" />
                    </label>
                    <button className='max-w-[400px] w-full h-[48px] px-5 rounded-3xl text-center bg-white'>
                        Subscribe to Newsletter
                    </button>
                </div>
            </div>
            <footer className='max-w-[1920px] pt-[140px] w-full min-h-[500px] h-full mx-auto bg-[#F0F0F0]'>
                <div className="max-w-[1240px] w-full mx-auto">Center</div>
                <p className='max-w-[1240px] w-full mt-[50px] mb-[25px] h-[1px] mx-auto bg-[#0000001A]'></p>
                <div className="max-w-[1240px] w-full mx-auto flex flex-wrap items-center justify-between">
                    <p>Shop.co © 2000-2023, All Rights Reserved</p>
                    <figure className='flex mt-1.5'>
                        <img src={payme1} alt="" />
                        <img src={payme2} alt="" />
                        <img src={payme3} alt="" />
                        <img src={payme4} alt="" />
                        <img src={payme5} alt="" />
                    </figure>
                </div>
            </footer>
        </div>
    )
}

export default memo(Footer)