import React, {useState} from 'react';
import { Navigate } from 'react-router-dom';
import { useAppDispatch, useAppSelector } from '../redux/hooks';
import { fetch } from '../redux/features/authSlice';


export default function Login(): JSX.Element {
  const auth = useAppSelector((state) => state.auth);
	const dispatch = useAppDispatch();

	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');
	const [rememberMe, setRememberMe] = useState(false);

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    dispatch(fetch({email, password}))
    console.log('works')
  };

  if (auth.isSuccess) return <Navigate to="/profile" />;

  return (
    <main className="main bg-dark">
      <section className="sign-in-content">
        <i className="fa fa-user-circle sign-in-icon"></i>
        <h1>Sign In</h1>
        <form onSubmit={handleSubmit}>
          <div className="input-wrapper">
            <label>Username</label>
            <input type="text" 
            id="username" 
            value={email} 
            onChange={(e: React.FormEvent<HTMLInputElement>) => setEmail(e.currentTarget.value)} />
          </div>
          <div className="input-wrapper">
            <label>Password</label>
            <input type="password" 
            id="password" 
            value={password} 
            onChange={(e: React.FormEvent<HTMLInputElement>) => setPassword(e.currentTarget.value)} />
          </div>
          <div className="input-remember">
            <input type="checkbox" 
            id="remember-me" 
            checked={rememberMe} 
            onChange={() => setRememberMe((checked) => !checked)} />
            <label>Remember me</label>
          </div>
          <button className="sign-in-button" type="submit">
            Sign In
          </button>
        </form>
      </section>
    </main>
  )
}