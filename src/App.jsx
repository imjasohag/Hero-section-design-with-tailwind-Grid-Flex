import React from 'react'

const App = () => {
  return (
    <>
      <section style={{ backgroundImage: 'url("/img/background.jpg")' }} className='flex flex-col  relative w-full h-screen bg-blend-overlay bg-black/60   bg-cover bg-no-repeat px-4 py-4 md:px-12'>
        <nav className='grid grid-cols-2 items-center h-1/5 w-full  '>

          {/* logo  */}
          <img className='block w-20 md:w-28' src="/img/logo.png" alt="" />
          {/* menu big screen  */}
          <ul className='hidden md:flex text-white justify-self-end space-x-3  text-base uppercase '>
            <li className='hover:text-blue-700'  ><a href="#">Home</a></li>
            <li className='hover:text-blue-700'  ><a href="#">about</a></li>
            <li className='hover:text-blue-700'  ><a href="#">service</a></li>
            <li className='hover:text-blue-700'  ><a href="#">portfolio</a></li>
            <li className='hover:text-blue-700'  ><a href="#">contact</a></li>
          </ul>
          {/* hamberger icon  */}
          <img className='z-10 inline md:hidden  justify-self-end  w-8' src="/img/hamburger.png" alt="" srcset="" />




        </nav>
        {/* hamberger menu  */}
        <ul className='hidden bg-slate-800 w-full px-4 py-8 absolute top-0 bottom-0 right-0 left-0 md:hidden text-white space-y-3 text-base uppercase '>
          <li className='hover:text-blue-700' ><a href="">Home</a></li>
          <li className='hover:text-blue-700' ><a href="">about</a></li>
          <li className='hover:text-blue-700' ><a href="">service</a></li>
          <li className='hover:text-blue-700' ><a href="">portfolio</a></li>
          <li className='hover:text-blue-700' ><a href="">contact</a></li>
        </ul>

        {/* content  */}
        <div className='h-[80%] grid place-content-center flex-1'>

          <div className='text-white  space-y-4'>
            <p className=''>Lorem ipsum dolor sit amet.</p>
            <h1> Tilte Lorem ipsum dolor sit amet consectetu</h1>
            <p>description      Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolore doloremque fugit rem est, pariatur corporis harum beatae similique natus ipsa.</p>
          </div>
          <button>Contact us</button>
          <button>Portfolio</button>
          <div>
          </div>

        </div>
      </section>
    </>
  )
}

export default App