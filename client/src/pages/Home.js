import React from 'react'
import {Link} from 'react-router-dom'
import everywhereTogether from '../assets/images/EverywhereTogether.svg'

function Home() {
    return (
        <div className='container mx-auto p-4 font-inter text-center'>
            <div className="flex items-center mt-12">
                <img className="mx-auto w-2/3 sm:w-1/2 xl:w-1/4" src={everywhereTogether} alt="Everywhere Together"/>
            </div>
            <div>
                <h1 className='text-4xl font-bold mt-24'>Keep in Touch</h1>
                <p className='text-neutral-500 text-sm mt-4'>KiT is a social network developed <br/> by <span
                    className='text-neutral-200'>@BogdanDonici</span> as a project for the course PAWM</p>
            </div>
            <div className='mt-12 space-y-4 flex flex-col'>
                <Link to="/login">
                    <button className='bg-blue-700 text-white text-base font-semibold w-full md:w-1/3 py-3 rounded-md'>Login</button>
                </Link>
                <Link to="/register">
                    <button className='bg-neutral-700 text-white text-base font-semibold w-full md:w-1/3 py-3 rounded-md'>Register</button>
                </Link>
            </div>
        </div>
    )
}

export default Home