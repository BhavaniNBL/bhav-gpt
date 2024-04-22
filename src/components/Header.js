import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom';
import { signOut } from "firebase/auth";
import { useSelector } from 'react-redux';
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "../utils/firebase";
import { useDispatch } from "react-redux";
import { addUser, removeUser } from "../utils/userSlice";
import { LOGO, SUPPORTED_LANGUAGES } from '../utils/constants';
import { toggleGptSearchView } from '../utils/gptSlice';
import { changeLanguage } from '../utils/configSlice';


const Header = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const user = useSelector((store) => store.user);
  const showGptSearch = useSelector((store) => store.gpt.showGptSearch);
  const handleLanguageChange = (e) => {
    dispatch(changeLanguage(e.target.value));
  }
  const handleSignout = () => {
    signOut(auth).then(() => {})
    .catch((error) => {
      // An error happened.
      navigate("/error");
    });
  }

  const handleGptSeachClick = () => {
    dispatch(toggleGptSearchView());
  }

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        const { uid, email, displayName, photoURL } = user;
        dispatch(
          addUser({
            uid: uid,
            email: email,
            displayName: displayName,
            photoURL: photoURL,
          })
          
        );
        navigate('/browse');
      } else {
        dispatch(removeUser());
        navigate('/');
      }
    });
    // this is called when component unmounts (unsubscribe when component unmounts)
    return () => unsubscribe();
  }, []);

  return (
    <div className='absolute w-screen px-8 py-2 z-10 bg-gradient-to-b from-black flex justify-between'>
      <img 
      className='w-44'
      src={LOGO}
      alt="netflix=logo" />
      {user && (
      <div className='flex p-2'>
        (showGptSearch && 
          <select className='p-2 m-2 bg-gray-900 text-white' onChange={handleLanguageChange}>
        {SUPPORTED_LANGUAGES.map((lang) => (
                <option key={lang.identifier} value={lang.identifier}>
                  {lang.name}
                </option>
              ))}
        </select>
        )
       
         <button
            className="px-2 mx-4 bg-purple-800 text-white rounded-lg"
            onClick={handleGptSeachClick}
          >
            {showGptSearch ? "Homepage" : "GPT Search"}
          </button>
        <img className="w-12 h-12 mt-2" src={user?.photoURL} alt="OutLogo" />
        <button onClick={handleSignout} className='text-white'>Signout</button>
      </div>
    )}
    </div>
  )
}

export default Header;
