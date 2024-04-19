import React from 'react'
import { useNavigate } from 'react-router-dom'
import { auth } from '../utils/firebase';
import { signOut } from "firebase/auth";
import { useSelector } from 'react-redux';

const Header = () => {
  const user = useSelector((store) => store.user);
  // const user = useSelector((store) => store.user);
  const navigate = useNavigate();
  const handleSignout = () => {
    signOut(auth).then(() => {
      // Sign-out successful.
      navigate("/");
    }).catch((error) => {
      // An error happened.
      navigate("/error");
    });
  }

  return (
    <div className='absolute w-screen px-8 py-2 z-10 bg-gradient-to-b from-black flex justify-between'>
      <img 
      className='w-44'
      src="https://cdn.cookielaw.org/logos/dd6b162f-1a32-456a-9cfe-897231c7763c/4345ea78-053c-46d2-b11e-09adaef973dc/Netflix_Logo_PMS.png" 
      alt="netflix=logo" />
      {user && (<div className='flex'>
        <img className="w-12 h-12" src={user?.photoURL} alt="OutLogo" />
        <button onClick={handleSignout} className='text-white'>Signout</button>
      </div>
    )}
    </div>
  )
}

export default Header;