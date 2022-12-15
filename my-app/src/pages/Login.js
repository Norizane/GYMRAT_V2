import React, { useEffect } from 'react';
import { GoogleButton } from 'react-google-button';
import { UserAuth } from '../context/AuthContext';
import { useNavigate } from 'react-router-dom';

const Login = () => {
    const { googleSignIn, user } = UserAuth();
    const navigate = useNavigate();

    const handleGoogleSignIn = async () => {
        try {
            await googleSignIn();
        } catch (error) {
            console.log(error);
        }
    };

    useEffect(() => {
        if (user != null) {
            navigate('/home');
        }
    }, [user]);

    return (
        <>
            <div className="bg-slate-100 min-h-screen flex items-center justify-center px-16">
                <div className="relative w-full max-w-lg">
                    <div
                        className="absolute top-0 -left-4 w-80 h-80 bg-teal-400 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob"></div>
                    <div
                        className="absolute top-0 -right-4 w-80 h-80 bg-cyan-400 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-2000"></div>
                    <div
                        className="absolute -bottom-8 left-20 w-80 h-80 bg-blue-900 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-4000"></div>
                    <div className="m-8 relative flex  space-y-4">

                        <div className="flex flex-col items-center   text-2xl">
                            <div className='text-3xl text-sky-200'>
                                GYMRAT
                            </div>
                            <div className='mt-10'>
                                <label className='text-sky-200'>USERNAME</label>
                                <input className='bg-transparent rounded ml-2  border border-sky-200 ' type="text"/>
                            </div>
                            <div className='mt-5'>
                                <label className='text-sky-200 '>PASSWORD</label>
                                <input className='bg-transparent  rounded ml-2 border border-sky-200 ' type="password"/>
                            </div>
                            <div className='flex'>
                                <div className='flex justify-center mt-4 mr-2 '>
                                    <GoogleButton onClick={handleGoogleSignIn} type="light"/>
                                </div>
                                <button  className='mt-4 border py-2 px-6 rounded bg-transparent  text-sky-200'>SIGNIN</button>

                            </div>
                        </div>
                    </div>
                </div>
            </div>


        </>
    );
};

export default Login;

