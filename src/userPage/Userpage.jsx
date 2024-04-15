import React from 'react';
import './Userpage.css';
import { MdOutlineEmail } from "react-icons/md";
import { RiLockPasswordLine } from "react-icons/ri";
import { IoPersonCircle } from "react-icons/io5";



function Userpage() {
    return (
        <div className='container'>
            <MdOutlineEmail />
            <RiLockPasswordLine />
            <IoPersonCircle />
            <div className="header">
                <div className="text">Sign up</div>
                <div className="underline">Sign up</div>
            </div>
        </div>
    )
}

export default Userpage;

