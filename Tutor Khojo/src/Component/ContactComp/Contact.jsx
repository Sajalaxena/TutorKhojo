import React from 'react';
import * as variables from '../../assets/variables.js';
import profile_ico from '../../assets/Images/profile_ico.png'
import phone_ico from '../../assets/Images/phone_ico.png'
import details_ico from '../../assets/Images/details_ico.png'
import ring_phone from '../../assets/Images/ring_phone.png'
import mail_ico from '../../assets/Images/mail_ico.png'
import x from '../../assets/Images/x.png'
import insta from '../../assets/Images/insta.png'
import be from '../../assets/Images/be.png'
import path from '../../assets/Images/Path.png'

const Contact = () => {
    const { ContactHeading, ContactSubhead, MobileNo, Email } = variables;
    return (
        <>
            <div className='flex flex-col justify-center items-center py-16 px-14 font-poppins' style={{ backgroundColor: "#F8F9FF" }}>
                <div className='bg-white rounded-3xl px-16 py-16 w-full'>

                    <h2 className="font-extrabold text-4xl mb-5">{ContactHeading}</h2>
                    <p>{ContactSubhead}</p>

                    <div className='flex mt-14'>
                        {/* Left Section */}
                        <div className='flex flex-col justify-between w-1/2'>
                            <div className='space-y-6'>
                                <p className='flex'><img className='mr-4' src={ring_phone} alt="mobile" />{MobileNo}</p>
                                <p className='flex'><img className='mr-4' src={mail_ico} alt="email" />{Email}</p>
                            </div>
                            <div className='space-y-6 mb-16'>
                                <p className='font-semibold text-2xl'>Connect with us</p>
                                <div className='flex space-x-6'>
                                    <div className='h-8 w-8 flex items-center justify-center bg-gray-200 rounded-full'>
                                        <img src={x} alt="Instagram" />
                                    </div>
                                    <div className='h-8 w-8 flex items-center justify-center bg-gray-200 rounded-full'>
                                        <img src={path} alt="Instagram" />
                                    </div>
                                    <div className='h-8 w-8 flex items-center justify-center bg-gray-200 rounded-full'>
                                        <img src={be} alt="Instagram" />
                                    </div>
                                    <div className='h-8 w-8 flex items-center justify-center bg-gray-200 rounded-full'>
                                        <img src={insta} alt="Instagram" />
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Right Section */}
                        <div className='space-y-5 w-1/2'>
                            <div className='flex items-center rounded-3xl h-16 text-base border px-5 py-2 space-x-3 w-4/5'><img src={profile_ico} alt="name" className='h-5' /><input type="text" placeholder='Full Name' className='outline-none'/></div>
                            <div className='flex items-center rounded-3xl h-16 text-base border px-5 py-2 space-x-3 w-4/5'><img src={phone_ico} alt="name" className='h-5' /><input type="text" placeholder='Phone' className='outline-none'/></div>

                            <div className='flex rounded-3xl text-base border px-5 py-2 space-x-3 w-4/5'>
                                <img src={details_ico} alt="name" className='h-5' />
                                <textarea rows="4" placeholder='Details' className="w-full resize-none outline-none"></textarea>
                            </div>

                            <button className='h-16 w-40 text-center text-white rounded-3xl' style={{ backgroundColor: "#4849FF", boxShadow: '35px 29px 48px rgba(51, 102, 255, 0.05)' }}>
                                Submit
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Contact;
