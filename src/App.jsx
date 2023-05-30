import React from 'react'

const App = () => {
  return (
    <>
      <section className='container bg-slate-500 mx-auto h-screen grid grid-cols-1 grid-rows-6'>
        {/* menu  */}
        <nav className='row  bg-blue-400'>
          {/* logo */}
          <img className='w-20' src="/img/logo.png" alt="" />
          {/* menu  */}
          <ul className=''>
            <li className=''><a href="">Home</a></li>
          </ul>
        </nav>
        {/* content  */}
        <div className=' bg-red-400'>
          <div>
            <p>Lorem, ipsum dolor.</p>
            <h1>Lorem ipsum dolor sit.</h1>
            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Itaque, aut!</p>
          </div>
          <div>
            <button>contact us</button>
            <button>contact us</button>
          </div>
        </div>
      </section>

    </>
  )
}

export default App