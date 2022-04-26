import React from 'react';
import google from "../../../images/social/google.png"
import faceBook from "../../../images/social/Facebook-logo.png"
import github from "../../../images/social/github.png"
import { useSignInWithGithub, useSignInWithGoogle } from 'react-firebase-hooks/auth';
import auth from '../../../firebase.init';
import { useNavigate } from 'react-router-dom';

const SocialLogin = () => {
    const [signInWithGoogle, user, loading, error] = useSignInWithGoogle(auth);
    const [signInWithGithub, user1, loading1, error1] = useSignInWithGithub(auth);

    const navigate = useNavigate();
    let errorOccur;

    if (error || error1) {

        errorOccur = <div>
            <p className='text-danger'>Error: {error?.message} {error1?.message}</p>
        </div>

    }

    if (user || user1) {
        navigate('/home')
    }


    return (

        <div>
            <div className='d-flex align-items-center'>
                <div className='bg-primary w-50' style={{ height: '1px' }}></div>
                <p className='mt-2 px-2'>OR</p>
                <div className='bg-primary w-50' style={{ height: '1px' }}></div>
                <div />
            </div>

            <div className='d-flex flex-column align-items-center'>
                {errorOccur}
                <button
                    onClick={() => signInWithGoogle()}
                    className='btn btn-primary w-50 '>
                    <img style={{ width: '30px' }} src={google} alt="" />
                    <span>Google Sign In </span>
                </button>
                <button className='btn btn-primary w-50 my-2'>
                    <img style={{ width: '30px' }} src={faceBook} alt="" />
                    <span>Facebook Sign In </span>
                </button>
                <button
                    onClick={() => signInWithGithub()}
                    className='btn btn-primary w-50'>
                    <img style={{ width: '30px' }} src={github} alt="" />
                    <span>Github Sign In </span>
                </button>
            </div>
        </div >
    );
};

export default SocialLogin;