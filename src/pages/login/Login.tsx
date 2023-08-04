import {useState, useEffect} from 'react'

const Login = ():JSX.Element => {
  const [email, setEmail] = useState('')
  return (
    <div className='login'>
      <form>
        <div className="input-field">
          <input type="email" placeholder='email' required/>
        </div>
        <div className="input-field">
          <input type="password" placeholder='password' required/>
        </div>
        <button>Login</button>
      </form>
    </div>
  )
}

export default Login;