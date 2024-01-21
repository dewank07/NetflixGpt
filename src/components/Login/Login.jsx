import React, { useRef, useState } from "react";
import Header from "../Header/Header";
import { checkValidData } from "../../utils/validate";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  updateProfile,
} from "firebase/auth";
import { auth } from "../../utils/firebase";
import { useNavigate } from "react-router-dom";
import { BG_IMAGE } from "../../utils/constant";

const Login = () => {
  const [isSignInForm, setIsSignInForm] = useState(true);
  const [errorMessage, setErrorMessage] = useState("");

  const navigate = useNavigate();

  const name = useRef(null);
  const email = useRef(null);
  const password = useRef(null);

  const handleButtonClick = () => {
    //validate the form
    const message = checkValidData(email.current.value, password.current.value);
    setErrorMessage(message);

    if (message) return;

    if (!isSignInForm) {
      // signup
      createUserWithEmailAndPassword(
        auth,
        email.current.value,
        password.current.value
      )
        .then((userCredential) => {
          // Signed up
          const user = userCredential.user;
          navigate("/browse");

          // ...
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          setErrorMessage(errorCode + "-" + errorMessage);

          // ..
        });
    } else {
      //sign in
      signInWithEmailAndPassword(
        auth,
        email.current.value,
        password.current.value
      )
        .then((userCredential) => {
          // Signed up
          const user = userCredential.user;
          updateProfile(user, {
            displayName: name.current.value,
          })
            .then(() => {
              navigate("/browse");
            })
            .catch(() => {
              console.log("error:");
            });

          // ...
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          setErrorMessage(errorCode + "-" + errorMessage);

          // ..
        });
    }
    // navigate("/browse");
  };
  const toggleSignInForm = () => {
    setIsSignInForm(!isSignInForm);
  };
  return (
    <div>
      <Header />
      <div className='fixed '>
        <img
          src={BG_IMAGE}
          alt='Bg_image'
          className='h-screen md:h-auto object-cover '
        />
      </div>
      <form
        onSubmit={(e) => {
          e.preventDefault();
        }}
        className='w-11/12 md:w-3/12 my-56 md:my-28 mx-auto right-0 left-0 absolute p-12 bg-black bg-opacity-80 text-white rounded-md'
      >
        <h1 className='font-bold text-3xl py-4'>
          {isSignInForm ? "Sign In" : "Sign Up"}
        </h1>
        {!isSignInForm && (
          <input
            ref={name}
            type='text'
            placeholder='Full Name'
            className='p-4 my-4 w-full bg-gray-800 rounded-md'
          />
        )}
        <input
          ref={email}
          type='email'
          placeholder='Email Address'
          className='p-4 my-4 w-full bg-gray-800 rounded-md'
        />
        <input
          ref={password}
          type='password'
          placeholder='Password'
          className='p-4 my-4 w-full bg-gray-800 rounded-md'
        />
        <p className='text-red-500'>{errorMessage}</p>
        <button
          className='py-4 my-4  bg-red-700 w-full rounded-lg'
          onClick={handleButtonClick}
        >
          {isSignInForm ? "Sign In" : "Sign Up"}
        </button>
        <p className='py-4 cursor-pointer' onClick={toggleSignInForm}>
          {isSignInForm ? (
            <span>
              New to Netflix? <span className='text-red-700'>Sign Up Now</span>
            </span>
          ) : (
            <span>
              Already to Netflix?{" "}
              <span className='text-red-700'>Sign In Now</span>
            </span>
          )}
        </p>
      </form>
    </div>
  );
};

export default Login;
