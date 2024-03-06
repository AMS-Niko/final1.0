import * as React from 'react';
import bgGmbr from './Foto/bg.jpg';
import { PersonIcon} from'@radix-ui/react-icons';
import { EnvelopeClosedIcon } from '@radix-ui/react-icons';
import { EyeClosedIcon } from'@radix-ui/react-icons';
import {EyeOpenIcon} from'@radix-ui/react-icons';
import { Link } from 'react-router-dom';

export default function SignUp(){
    return (
        <div className='min-h-screen py-40 bg-slate-500'>
            <div className='container mx-auto'>
                <div className='flex flex-col lg:flex-row w-8/12 rounded-xl mx-auto shadow-lg overflow-hidden bg-white'>
{/* Kiri */}
                    <div className='w-full lg:w-1/2 flex flex-col items-center justify-center p-12 bg-no-repeat bg-cover bg-center w-1/2' style={{backgroundImage: `url(${bgGmbr})`}}>
                        <h1 className='text-white text-3xl mb-3'>
                            Welcome
                        </h1>
                        <div className='text-white'>
                            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eos deleniti quibusdam odit! Vero, soluta! Minima.
                        </div>
                    </div>

{/* Kanan */}
                    <div className='w-full  lg:w-1/2 py-16 px-12'>
                        <h2 className='text-3xl mb-8 text-center'>Sign Up</h2>
                        <p className='mb-4'>Create Your Account. It's free and only take a minute</p>
                        <form>
                            <div className='grid grid-cols-2 gap-5 relative'>
                                <input type='text' placeholder='FirstName' className='border border-gray-400 py-1 px-2 rounded-md'/>
                                <PersonIcon className='absolute top-2.5 right-56'/>
                                <input type='text' placeholder='LastName' className='border border-gray-400 py-1 px-2 rounded-md'/>
                                <PersonIcon className='absolute top-2.5 right-2'/>
                            </div>

                            <div className='mt-5 relative'>
                            <input type='text' placeholder='Email' className='border border-gray-400 py-1 px-2 w-full rounded-md'/>
                            <EnvelopeClosedIcon className='absolute top-2.5 right-4'/>

                            </div>
                            <div className='mt-5 relative'>
                                <input type='password' placeholder='Password' className='border border-gray-400 py-1 px-2 w-full rounded-md'/>
                                <EyeClosedIcon className='absolute top-2.5 right-4'/>
                            </div>
                            <div className='mt-5 relative'>
                                <input type='password' placeholder='Confirm Password' className='border border-gray-400 py-1 px-2 w-full rounded-md'/>
                                <EyeOpenIcon className='absolute top-2.5 right-4'/>
                            </div>

                            <div className='mt-5'>
                                <input type='checkbox' className='border border-gray-400'/>
                                <span className='ml-5'>
                                    I accept the <a href='#' className='text-violet-500 font-semibold'>Terms of Use</a> & <a href='' className='text-violet-500 font-semibold'>Privacy Policy</a>
                                </span>
                            </div>

                            <div className='mt-5'>
                                <Link to='/Form'>
                                <button className='w-full bg-blue-500 py-3 text-center text-white rounded-lg'>
                                    Register Now
                                </button>
                                </Link>
                            </div>
                        </form>
                    </div>
                </div>

            </div>
        </div>
    )
}