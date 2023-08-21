import React from 'react'

const Register = ():JSX.Element => {
  return (
    <div className='register'>
      {/*<h1>Register</h1>*/}
      <form action="">
        <div className="input-field">
          <input type="text" placeholder='First Name' />
        </div>
        <div className="input-field">
          <input type="text" placeholder='Last Name' />
        </div>
        <div className="input-field">
          <input type="email" placeholder='Email' />
        </div>
        <div className="input-field">
          <input type="password" placeholder='Password' />
        </div>
        <div className="input-field">
          <input type="password" placeholder='Repeat Password' />
        </div>
        <button>Register</button>
      </form>
    </div>
  )
}

export default Register;