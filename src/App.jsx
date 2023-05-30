import React from 'react'

const App = () => {
  return (
    <>
      <section style={{ backgroundImage: "url('/img/background.jpg')" }} className='flex flex-col bg-blend-overlay bg-blue-800/30 text-white h-screen py-2 px-4'>
        <nav className='container mx-auto  w-full  h-1/5 flex items-center justify-between '>
          {/* logo  */}
          <img className='w-28' src="/img/logo.png" alt="" />
          {/* menu part  */}
          <ul>
            <li><a href=""></a>Home</li>
          </ul>
        </nav>
        {/* content part  */}
        <div className='container mx-auto h-4/5 flex flex-col justify-center space-y-8   '>
          <div className='text-center'>
            <h1 className='text-2xl my-8'>
              Lorem ipsum dolor sit.
            </h1>
            <p>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aspernatur neque, ducimus expedita, ipsa rem iusto quas non omnis sint modi deserunt? Officia eaque sapiente vero sunt reprehenderit possimus laudantium assumenda.
            </p>

          </div>
          <div className='flex justify-center'>

            <button className='px-3 py-2 m-2 rounded bg-black text-blue-50'>contact us</button>
            <button className='px-3 py-2 m-2 rounded bg-black text-blue-50'>contact us</button>
          </div>
        </div>
      </section>

    </>
  )
}

export default App