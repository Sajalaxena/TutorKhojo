import React from 'react'

const Plans = () => {
    return (
        <>
            <div className='font-poppins flex flex-col justify-center items-center py-28 px-14' style={{ backgroundColor: "#F8F9FF" }}>

                <h1 className='font-extrabold text-4xl mb-5'>Pick Your Perfect Plan</h1>
                <p>Find the prefect plan for your bussiness with out flexible pricing options.</p>

                <div className='flex justify-between w-full mt-14' style={{ backgroundColor: "#F8F9FF" }}>
                    <div className='px-10 py-8 rounded-3xl bg-white' style={{ boxShadow: '35px 29px 48px rgba(51, 102, 255, 0.05)', width: '370px' }}>
                        <div className='h-32 flex flex-col justify-between mb-6'>
                            <p>Free</p>
                            <span><h1 className=' text-5xl font-bold inline '>Rs 0</h1>/month</span>
                            <p style={{ color: "#2D2D2D" }}>Best for Small Teamss and Individuals.</p>
                        </div>
                        <div className='flex flex-col justify-between h-24'>
                            <p>Write feature details here</p>
                            <p>Write feature details here</p>
                            <p>Write feature details here</p>
                        </div>
                        <button className='text-center font-semibold mt-7 rounded-2xl w-full py-3' style={{ color: '#4849FF', backgroundColor: "#E3E3F3" }}>Get Started</button>
                    </div>

                    <div className='px-10 py-8 rounded-3xl bg-white' style={{ boxShadow: '35px 29px 48px rgba(51, 102, 255, 0.05)', width: '370px' }}>
                        <div className='h-32 flex flex-col justify-between mb-6'>
                            <p>Pro</p>
                            <span><h1 className=' text-5xl font-bold inline '>Rs 190</h1>/month</span>
                            <p style={{ color: "#2D2D2D" }}>Ideal for Growing Companies.</p>
                        </div>
                        <div className='flex flex-col justify-between h-24'>
                            <p>Write feature details here</p>
                            <p>Write feature details here</p>
                            <p>Write feature details here</p>
                        </div>
                        <button className='text-center font-semibold mt-7 rounded-2xl w-full py-3' style={{ color: '#4849FF', backgroundColor: "#E3E3F3" }}>Get Started</button>
                    </div>

                    <div className='text-white px-10 py-8 rounded-3xl ' style={{ backgroundColor: "#4849FF", boxShadow: '35px 29px 48px rgba(51, 102, 255, 0.05)', width: '370px' }}>
                        <div className='h-32 flex flex-col justify-between mb-6'>
                            <p>Enterprise</p>
                            <span><h1 className=' text-5xl font-bold inline '>Rs 490</h1>/month</span>
                            <p>Ultimate for Enterprise Solutions.</p>
                        </div>
                        <div className='flex flex-col justify-between h-24'>
                            <p>Write feature details here</p>
                            <p>Write feature details here</p>
                            <p>Write feature details here</p>
                        </div>
                        <button className='bg-white text-center font-semibold mt-7 rounded-2xl w-full py-3' style={{ color: '#4849FF' }}>Get Started</button>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Plans