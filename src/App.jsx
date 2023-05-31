import React from 'react'

const App = () => {
  return (
    <>
      <section style={{ backgroundImage: 'url("/img/background.jpg")' }} className='mx-auto min-h-screen grid grid-cols-1 bg-black/50 bg-blend-overlay text-white px-12 py-4'>
        {/* nav part */}
        <nav className='flex justify-between self-start '>
          {/* logo */}
          <img className='h-28' src="/img/logo.png" alt="" />
          {/* menu  */}
          <ul className='flex gap-3 items-center'>
            <li className=''><a href="">Home</a></li>
            <li className=''><a href="">Home</a></li>
            <li className=''><a href="">Home</a></li>
          </ul>
        </nav>
        {/* content  */}
        <div className=''>
          <div className='text-center space-y-5'>
            <p className='text-xl font-medium'>Lorem, ipsum dolor.</p>
            <h1 className='text-5xl'>Lorem ipsum dolor sit.</h1>
            <p >Lorem, ipsum dolor sit amet consectetur adipisicing elit. Itaque, aut!</p>
            <p >Lorem, ipsum dolor sit amet consectetur adipisicing elit. Itaque, aut!</p>
            <p >Lorem, ipsum dolor sit amet consectetur adipisicing elit. Itaque, aut!</p>
            <p >Lorem, ipsum dolor sit amet consectetur adipisicing elit. Itaque, aut!</p>
            <p >Lorem, ipsum dolor sit amet consectetur adipisicing elit. Itaque, aut!</p>
          </div>
          <div className='flex justify-center items-center my-8'>
            <button className='px-4 py-2 bg-teal-400 rounded m-2'>contact us</button>
            <button className='px-4 py-2 bg-teal-400 rounded m-2'>contact us</button>
          </div>
        </div>
      </section>

    </>
  )
}

export default App