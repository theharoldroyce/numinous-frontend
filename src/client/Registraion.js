import React, {useState} from 'react'
import { Link, useNavigate  } from "react-router-dom";
import axios from 'axios';
import swal from 'sweetalert';


function Registraion() {

    const navigate = useNavigate()

    const [registerInput, setRegister] = useState({
        fname: '',
        lname: '',
        email: '',
        password: '',
        password_confirmation: '',
        error_list: [],
    });

    const handleInput = (e) => {
        e.persist();
        setRegister({ ...registerInput, [e.target.name]: e.target.value });
    }

    const registerSubmit = (e) => {
        e.preventDefault();

        const data = {
            fname: registerInput.fname,
            lname: registerInput.lname,
            email: registerInput.email,
            password: registerInput.password,
            password_confirmation: registerInput.password_confirmation,
        }


        axios.get('/sanctum/csrf-cookie').then(response => {
            axios.post(`/api/register`, data).then(res => {
                if (res.data.status === 200) {
                    localStorage.setItem('auth_token', res.data.token);
                    localStorage.setItem('auth_email', res.data.username);
                    swal("Success", res.data.message, "success");
                    navigate('/');
                }
                else {
                    setRegister({ ...registerInput, error_list: res.data.validation_errors });
                }
            });
        });

    }

    return (
        <div className="bg-[#323232] w-full h-full">
            <div className="regcard">
                <main className="regmain">
                    <div className="max-w-xl lg:max-w-3xl">
                        <h1 className="regtitle">Register Here</h1>
                        <form onSubmit={registerSubmit} className="regform">
                            <div className="regfrd">
                                <label className="reglbl">First Name</label>
                                <input type="text" id="FirstName" name="fname" onChange={handleInput} value={registerInput.fname} className="regimp" />
                                <span className='text-red-600'>{registerInput.error_list.fname}</span>
                            </div>

                            <div className="regfrd">
                                <label className="reglbl">Last Name</label>
                                <input type="text" id="LastName" name="lname" onChange={handleInput} value={registerInput.lname} className="regimp" />
                                <span className='text-red-600'>{registerInput.error_list.lname}</span>
                            </div>

                            <div className="col-span-6">
                                <label className="reglbl">Email</label>
                                <input type="email" id="Email" name="email" onChange={handleInput} value={registerInput.email} className="regimp" />
                                <span className='text-red-600'>{registerInput.error_list.email}</span>
                            </div>

                            <div className="regfrd">
                                <label className="reglbl">Password</label>
                                <input type="password" id="Password" name="password" onChange={handleInput} value={registerInput.password} className="regimp" />
                                <span className='text-red-600'>{registerInput.error_list.password}</span>
                            </div>

                            <div className="regfrd">
                                <label className="reglbl">Confirm Password</label>
                                <input type="password" id="Password_Confirm" name="password_confirmation" onChange={handleInput} value={registerInput.password_confirmation} className="regimp" />
                                <span className='text-red-600'>{registerInput.error_list.password_confirmation}</span>
                            </div>

                            <div className="col-span-6">
                                <label className="flex gap-4">
                                    <input type="checkbox" id="MarketingAccept" name="marketing_accept" className="h-5 w-5 rounded-md border-gray-200 bg-white shadow-sm" />
                                    <span className="text-sm text-white">
                                        I want to receive emails about events, product updates and
                                        company announcements.
                                    </span>
                                </label>
                            </div>

                            <div className="regfrd2">
                                <p className="text-sm text-white">
                                    By creating an account, you agree to our{" "}
                                    <span className="regspn">
                                        terms & conditions
                                    </span>{" "}
                                    and{" "}
                                    <span className="tregspn">privacy policy</span>
                                    .
                                </p>
                            </div>

                            <div className="regfrd2">
                                <button type="submit" className="regbtn"> Create an account </button>
                            </div>
                            <div className="regfrd2">
                                <p className="mt-4 text-sm text-white sm:mt-0">
                                    Already have an account?
                                    <Link to="/login">
                                        {" "}
                                        <span className="regspn">Log in</span>
                                    </Link>
                                    .
                                </p>
                            </div>
                        </form>
                    </div>
                </main>
            </div>
        </div>
    )
}

export default Registraion