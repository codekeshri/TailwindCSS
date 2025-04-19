import React from 'react'

const Responsiveness = () => {
    return (
        <div>
            {/* <div className="md:bg-green-400 sm:bg-blue-300 bg-red-300">
                Hi There
            </div>
            <div className='md:flex justify-between'>
                <div className="bg-red-400">Hello Google</div>
                <div className="bg-green-400">Hello Google</div>
                <div className="bg-blue-400">Hello Google</div>
            </div> */}
            <div className='grid grid-cols-12'>
                <div className='col-span-12 md:col-span-2 bg-red-300'>Ha!</div>
                <div className='col-span-12 md:col-span-4 bg-blue-300'>Haaa!</div>
                <div className='col-span-12 md:col-span-6 bg-green-300'>Haaaaaaaaa!</div>
            </div>
        </div>
    )
}

export default Responsiveness