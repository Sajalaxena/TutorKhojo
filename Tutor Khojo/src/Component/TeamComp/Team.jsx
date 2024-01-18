import React from 'react';
import * as variables from '../../assets/variables.js';
import x from "../../assets/Images/x.png";
import Path from "../../assets/Images/Path.png";
import insta from "../../assets/Images/insta.png";

const TeamMemberCard = ({ image, name, expertise }) => {
    return (
        <div className='rounded-3xl bg-white' style={{ boxShadow: '35px 29px 48px rgba(51, 102, 255, 0.05)', width: '370px' }}>
            <img src={image} alt={`pic_${name}`} />
            <div className='flex flex-col items-center justify-start h-20 my-5 border-b-2'>
                <h2 className='font-bold text-xl'>{name}</h2>
                <span className='my-3'>{expertise}</span>
            </div>
            <div className='mb-8 flex justify-center'>
                <div className='flex items-center justify-between w-32'>
                    <div className='h-8 w-8 flex items-center justify-center bg-gray-300 rounded-full'>
                        <img src={x} alt="x" />
                    </div>

                    <div className='h-8 w-8 flex items-center justify-center bg-gray-200 rounded-full'>
                        <img src={Path} alt="path" />
                    </div>

                    <div className='h-8 w-8 flex items-center justify-center bg-gray-200 rounded-full'>
                        <img src={insta} alt="Instagram" />
                    </div>
                </div>
            </div>
        </div>
    );
};

const Team = () => {
    const { teamMembers, teamHeading, teamSubhead } = variables;

    return (
        <>
            <div className='flex flex-col justify-center items-center py-28 px-14 font-poppins' style={{ backgroundColor: "#F8F9FF" }}>
                <h1 className='font-extrabold text-4xl mb-5'>{teamHeading}</h1>
                <p>{teamSubhead}</p>

                <div className='flex justify-between w-full mt-14' style={{ backgroundColor: "#F8F9FF" }}>
                    {teamMembers.map((member, index) => (
                        <TeamMemberCard
                            key={index}
                            image={member.image}
                            name={member.name}
                            expertise={member.expertise}
                        />
                    ))}
                </div>
            </div>
        </>
    );
};

export default Team;
