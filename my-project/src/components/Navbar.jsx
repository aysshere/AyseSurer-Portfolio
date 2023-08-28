import React from 'react'
import PDF from '../assets/soncv.pdf'
const Navbar = () => {
  return (
    <main>
        <div className=' border-gray-50'>
            <div className='max-w-screen-xl flex flex-wrap item-center justify-between mx-auto p-4  '>
                <a className=' text-2xl text-white' href="aysesurerererererer.com"> Ayşe Sürer</a>
                <button type="button" onClick={PDF}  class="text-white bg-gradient-to-r from-teal-400 via-teal-500 to-teal-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-teal-300 dark:focus:ring-teal-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2">Teal</button>
            </div>
        </div>

    </main>
  )
}

export default Navbar