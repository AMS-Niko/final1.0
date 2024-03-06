import * as React from 'react';
import { PersonIcon} from'@radix-ui/react-icons';
import bgGmbr from './Foto/bg.jpg';
function ProfilePage(){
    return(
        <div className='text-white h-[100vh] flex justify-center items-center bg-cover'  style={{backgroundImage: `url(${bgGmbr})`}}>
            <div className='bg-slate-800 border border-slate-400 rounded-md p-8 shadow-lg backdrop-filter backdrop-blur-sm bg-opacity-30 relative'>
                <h1 className='text-4xl text-white font-bold text-center mb-6'>Profile</h1>
                <form>
                <div className='relative my-4'>
                    <input type='username' className='block w-72 py-2.3 px-0 text-sm text-white bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:text-white focus:border-blue-600 peer' placeholder='' />
                    <label htmlFor='' className='absolute text-sm text-white duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:sacle-75 peer-focus:-translate-y-6'>Your UserName</label>
                </div>
                <div className='relative my-4'>
                    <input type='email' className='block w-72 py-2.3 px-0 text-sm text-white bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:text-white focus:border-blue-600 peer' placeholder=''/>
                    <label htmlFor='' className='absolute text-sm text-white duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:sacle-75 peer-focus:-translate-y-6'>Your Email</label>
                </div>
                <div className='relative my-4'>
                    <input type='password' className='block w-72 py-2.3 px-0 text-sm text-white bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:text-white focus:border-blue-600 peer' placeholder='' />
                    <label htmlFor='' className='absolute text-sm text-white duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:sacle-75 peer-focus:-translate-y-6'>Your PassWord</label>
                </div>
                <div className='flex justify-between'>
                    <button className='w-full mb-4 text-[18px] mt-6 rounded-full bg-white text-red-600 hover:bg-red-500 hover:text-white py-2 transition-colors duration-500' type='submit'>Back</button>
                    <button className='w-full mb-4 text-[18px] mt-6 rounded-full bg-white text-red-600 hover:bg-red-500 hover:text-white py-2 transition-colors duration-500' type='submit'>LogOut</button>
                </div>

                </form>
            </div>

        </div>
    );
    
}

export default ProfilePage;