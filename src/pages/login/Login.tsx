import {useState, useEffect} from 'react'
import {Link} from "react-router-dom";

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
          <div className="login-actions" style={{marginTop:'18px'}}>
              <Link to="/" style={{textDecoration:'none'}}>Forgot Password?</Link>
              <Link to='/register' style={{marginLeft:'15px', textDecoration:'none'}}>Don't have an account yet?</Link>
          </div>
        <button>Login</button>
      </form>
    </div>
  )
}

export default Login;