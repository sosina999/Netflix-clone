import { useState } from 'react';
import './register.scss';
import { useRef } from 'react';

const Register = () => {
    const [email, setEmail] = useState()
    const [password, setPassword] = useState()


    const emailRef= useRef()
    const passwordRef= useRef()


    const handleStart=()=>{
        setEmail(emailRef.current.value)
    }

    const handleFinish=()=>{
        setEmail(passwordRef.current.value)
    }
    return (
        <div className='register'>
            <div className="top">
                <div className="wrapper">
            <img 
            className='logo'
            src="https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/12c6f684-d447-4457-84fa-12033cfd581e/d9z3o32-2c299a83-49a9-44c2-bc23-b0b5070a546b.png/v1/fill/w_1024,h_512,strp/netflix_logo_background__2_by_sixmonthslate_d9z3o32-fullview.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOiIsImlzcyI6InVybjphcHA6Iiwib2JqIjpbW3siaGVpZ2h0IjoiPD01MTIiLCJwYXRoIjoiXC9mXC8xMmM2ZjY4NC1kNDQ3LTQ0NTctODRmYS0xMjAzM2NmZDU4MWVcL2Q5ejNvMzItMmMyOTlhODMtNDlhOS00NGMyLWJjMjMtYjBiNTA3MGE1NDZiLnBuZyIsIndpZHRoIjoiPD0xMDI0In1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmltYWdlLm9wZXJhdGlvbnMiXX0.WKy-rj_8y7ziLuhhtAES7jddy-eUpz6PQQ331bp7rRI" alt="" />

            <button className='loginButton'>Sign In</button>
            </div>
            </div>
            <div className="container">
                <h1>Unlimited movies, TV Shows, and more</h1>
                <h2>Watch anywhere. Cancel anytime </h2>
                <p>Ready to Watch your email to create or restart your membership</p>
                   {
                    !email ? (
                        <div className="input">
                    <input type="email" placeholder='email address' ref={emailRef}/>
                    <button className="registerButton" onClick={handleStart}>Get Started</button>
                </div> 

                    ):(
                    <form className="input">
                    <input type="password" placeholder='password' ref={passwordRef}/>
                    <button className="registerButton" onClick={handleFinish}>Start</button>
                </form>)
                   }
                
            </div>
            
        </div>
    );
}

export default Register;
