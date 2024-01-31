import React from 'react'

const LogingSignup = () => {
  return (
    <div className='flex h-svh bg-slate-100 login-signup'>
      <div className="flex flex-col gap-6 m-auto bg-white p-14 loginsignup-container">
        <h1 className='text-4xl font-bold '>Sign Up</h1>
        <div className="flex flex-col gap-6 loginsignup-field *:p-3 *:border border-zinc-950">
          <input type="text" placeholder='Name' />
          <input type="email" placeholder='Email' />
          <input type="password" placeholder='Password' />
        </div>
        <div className="flex gap-2 mr-8 text-xs">
          <input type="checkbox" name="" id="" />
          <p>By continuing, i agree to thr terms of use & privacy policy.</p>
        </div>
        <button className='p-3 text-lg text-white bg-red-500 '>Continue</button>
        <p className="text-xs loginsignup-login">Already have an account? <span className='text-red-600 '>Login here</span></p>
      </div>
    </div>
  )
}

export default LogingSignup