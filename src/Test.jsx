import React from 'react'

export default function Test() {
    return (
        <div className='hero-section min-h-screen bg-gray-400 flex flex-col'>
            <div className='menu container mx-auto flex justify-between items-center'>
                <img src="/img/logo.png" className='w-16' alt="logo" />
                <ul className='flex gap-2'>
                    <li>Home</li>
                    <li>About</li>
                    <li>Contact</li>
                </ul>
            </div>
            <div className='border container mx-auto content flex-1 grid  place-content-center text-center'>
                <h1>This is hello world</h1>
                <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Illum, laudantium velit facilis at officiis accusamus, vitae corrupti aliquam eveniet pariatur ab quaerat ad quae tempore? Iusto veritatis aperiam adipisci odit.</p>
                <button>click here</button>
            </div>
        </div>
    )
}
