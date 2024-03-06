import * as React from 'react';
import Header from './Header';
import { Link } from 'react-router-dom';
import JusticeLeague from './Foto/JusticeLeague.png';
import { EnvelopeClosedIcon } from '@radix-ui/react-icons';
import { EyeClosedIcon } from'@radix-ui/react-icons';


export default function Form() {
    return (
        <>
<div className="flex w-full h-screen">
    <div className=" w-full flex items-center justify-center lg:w-1/2">
        <div className='bg-white px-12 py-20 rounded-3xl border-2 border-gray-200'>
            <h1 className='text-5xl font-extralight'>Justice League</h1>
            <p className='mt-2'>Welcome! Please enter Your details</p>

            <div className='mt-8'>
            {/* Buat type Emai; */}
                <div className='relative'>
                    <label className='text-lg font-medium'>Email</label>
                    <div className='relative'>
                    <input 
                        className='w-full border-2 border border-gray-100 rounded-xl p-4 mt-1 bg-transparent'
                        placeholder='Enter Your Email'
                    />
                    <EnvelopeClosedIcon className='absolute top-1 right-4 h-14 '/>
                    </div>
                </div>
            
            {/* Buat Type password */}
                <div>
                    <label className='text-lg font-medium'>Password</label>
                    <div className='relative'>
                    <input 
                    type='password'
                        className='w-full border-2 border border-gray-100 rounded-xl p-4 mt-1 bg-transparent'
                        placeholder='Enter Your Password'
                    />
                    <EyeClosedIcon className='absolute top-1 right-4 h-14 '/>
                    </div>
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
                    <button className='ml-10 font-medium text-red-500'>Forgot Password</button>
                </div>
                <div className='mt-8 flex flex-col gap-y-4 py-3 rounded-xl active:scale-[.98] active:duration-75 transition-all hover:scale-[1.01] ease-in-out py-3 rounded-xl bg-yellow-300 text-black text-lg font-bold justify-center items-center'>
                    {/* Button */}
                    <Link to= "/afterlogin" >
                        <button className='items-center'>
                        Sign In
                        </button>
                    </Link>
                </div>
                <div className='mt-5'>
                    <p>Don't have an Account ?<Link to="/signup">Click Here</Link></p>
                </div>
            </div>
        </div>
    </div>

    <div className="hidden relative lg:flex h-full w-1/2 items-center justify-center bg-gray-200">
        <img src={JusticeLeague} className="w-100 h-60 animate-bounce"/>
        <div className="w-full h-1/2 absolute bottom-0"/>
    </div>

</div>

        </>
    )
}

