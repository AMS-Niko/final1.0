import * as React from 'react';

export default function Form() {
    return (

        <div className='bg-white px-10 py-20 rounded-3xl border-2 border-gray-200'>
            <h1 className='text-5xl font-extralight'>Justice League</h1>
            <p>Welcome! Please enter Your details</p>

            <div className='mt-8'>
            {/* Buat type Emai; */}
                <div>
                    <label className='text-lg font-medium'>Email</label>
                    <input 
                        className='w-full border-2 border border-gray-100 rounded-xl p-4 mt-1 bg-transparent'
                        placeholder='Enter Your Email'
                    />
                </div>
            
            {/* Buat Type password */}
                <div>
                    <label className='text-lg font-medium'>Password</label>
                    <input 
                        className='w-full border-2 border border-gray-100 rounded-xl p-4 mt-1 bg-transparent'
                        placeholder='Enter Your Password'
                    />
                </div>
            {/* Buat Remember & Forgot Password*/}
                <div className='mt-8 flex justify-between items-center'>
                    <div>
                        <input
                            type="checkbox"
                            id='remember'
                        />
                        <label className='ml-2 font-medium text-base' for="remember">Remember for 30 days</label>
                    </div>
                </div>
                <div className='mt-8 flex flex-col gap-y-4'>
                    <a href='home' className='py-3 rounded-xl active:scale-[.98] active:duration-75 transition-all hover:scale-[1.01] ease-in-out py-3 rounded-xl bg-yellow-300 text-black text-lg font-bold justify-center align-items:'>
                    <button className='py-3 rounded-xl active:scale-[.98] active:duration-75 transition-all hover:scale-[1.01] ease-in-out py-3 rounded-xl bg-yellow-300 text-black text-lg font-bold justify-center items-center' >Sign In</button>
                    </a>
                    <button>Sign In with Google</button>
                </div>
            </div>
        </div>

    )
}

