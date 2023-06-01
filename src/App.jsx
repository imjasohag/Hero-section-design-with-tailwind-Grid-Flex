import React from 'react'

const App = () => {
  return (
    <>
      <section style={{ backgroundImage: 'url("/img/background.jpg")' }} className='mx-auto min-h-screen grid grid-cols-1 bg-black/50 bg-blend-overlay text-white px-12 py-4'>
        {/* nav part */}
        <nav className='grid grid-cols-2 items-center self-start '>
          {/* logo */}
          <img className='h-28' src="/img/logo.png" alt="" />
          {/* menu  */}
          <ul className='grid grid-cols-3 justify-self-end gap-4'>
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
            
            
          </div>
          <div className='grid grid-cols-2 justify-center items-center my-8'>
            <button className='px-4 py-2 w-1/3 justify-self-end bg-teal-400 rounded m-2'>contact us</button>
            <button className='px-4 py-2 w-1/3 bg-teal-400 rounded m-2'>contact us</button>
          </div>
        </div>
      </section>

    </>
  )
}

export default App