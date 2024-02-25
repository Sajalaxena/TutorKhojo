import React from 'react';
import * as variables from '../../assets/variables.js';
import star from '../../assets/Images/star.png'
import empty_star from '../../assets/Images/empty_star.png'


const UserCard = ({ image, name, experience, statement, rating }) => {
    return (
        <div className='rounded-3xl bg-white w-96 py-10 px-8' style={{ boxShadow: '35px 29px 48px rgba(51, 102, 255, 0.05)', width: '370px' }}>
            <div className='flex flex-col justify-between items-center'>
                <img src={image} alt={`pic_${name}`} className='h-14 w-14' />
                <div className='flex flex-col items-center justify-around h-20 mt-4'>
                    <h2 className='font-bold text-xl text-center'>{experience}</h2>
                    <span className='text-sm'>{name}</span>
                </div>
            </div>

            <div className='h-80 text-center text-base mt-8'>
                <p>{statement}</p>
            </div>
            <div className='mt-8 flex justify-center items-center'>
                <div className="flex mt-4">
                    {Array.from({ length: rating }, (_, index) => (
                        <img key={index} src={star} alt="rating" />
                    ))}
                    {Array.from({ length: 5 - rating }, (_, index) => (
                        <img key={index + rating} src={empty_star} alt="rating" />
                    ))}
                </div>
            </div>
        </div>
    );
};

const Testimonial = () => {
    const { testimonialHeading, testimonialSubhead, userVariables } = variables;

    return (
        <>
            <div className='flex flex-col justify-center items-center py-28 px-14 font-poppins' style={{ backgroundColor: "#F8F9FF" }}>
                <h1 className='font-extrabold text-4xl mb-5'>{testimonialHeading}</h1>
                <p>{testimonialSubhead}</p>

                <div className='flex justify-between w-full mt-14' style={{ backgroundColor: "#F8F9FF" }}>
                    {userVariables.map((item, index) => (
                        <UserCard
                            key={index}
                            image={item.image}
                            name={item.name}
                            experience={item.experience}
                            statement={item.statement}
                            rating={item.rating}
                        />
                    ))}
                </div>
            </div>
        </>
    );
};

export default Testimonial;