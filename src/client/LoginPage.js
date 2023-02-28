import React, { useState } from 'react'
import { Link, useNavigate } from "react-router-dom";
import axios from 'axios';
import swal from 'sweetalert';


function LoginPage() {
    const navigate = useNavigate();

    const [loginInput, setLogin] = useState({
        email: '',
        password: '',
        error_list: [],
    });

    const handleInput = (e) => {
        e.persist();
        setLogin({ ...loginInput, [e.target.name]: e.target.value });
    }

    const loginSubmit = (e) => {
        e.preventDefault();

        const data = {
            email: loginInput.email,
            password: loginInput.password,
        }

        axios.get('/sanctum/csrf-cookie').then(response => {
            axios.post(`api/login`, data).then(res => {
                if (res.data.status === 200) {
                    localStorage.setItem('auth_token', res.data.token);
                    localStorage.setItem('auth_email', res.data.username);
                    swal("Success", res.data.message, "success");
                    navigate('/');
                }
                else if (res.data.status === 401) {
                    swal("Error", res.data.message, "error");
                }
                else {
                    setLogin({ ...loginInput, error_list: res.data.validation_errors });
                }
            });
        });
    }


    return (
        <div className='w-full h-full bg-[#323232]'>
            <div className="sgn">
                <div className="sgncard">
                    <h1 className="sgntitle">
                        Get started today
                    </h1>

                    <form onSubmit={loginSubmit} className="sgnform">
                        <p className="sgnsub">Sign in to your account</p>

                        <div>
                            <label className="sgnlbl">Email</label>
                            <div className="relative mt-1">
                                <input type="email" id="email" name='email' onChange={handleInput} value={loginInput.name} className="sgninp" placeholder="Enter email" />
                                <span className='text-red-600'>{loginInput.error_list.email}</span>
                            </div>
                        </div>

                        <div>
                            <label className="sgnlbl">Password</label>
                            <div className="relative mt-1">
                                <input type="password" id="password" name='password' onChange={handleInput} value={loginInput.password} className="sgninp" placeholder="Enter password" />
                                <span className='text-red-600'>{loginInput.error_list.password}</span>
                            </div>
                        </div>

                        <button type="submit" className="sgnbtn">Sign in</button>

                        <div className="mt-2 w-64 mx-auto">
                            <button type="submit" className="sgnbtn">
                                Login with Google
                            </button>
                        </div>

                        <p className="text-center text-sm text-white"> No account?
                            <Link to='/register'><button className="underline">
                                Sign up
                            </button></Link>
                        </p>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default LoginPage