import { React, useState } from 'react'
import { Link,useNavigate } from "react-router-dom";
import Logo from '../assets/logo.jpg'
import { FaBars, FaTimes } from "react-icons/fa";
import { CgProfile } from "react-icons/cg";
import { ImSwitch } from "react-icons/im";
import axios from 'axios';
import swal from 'sweetalert';


function NavBAr() {
    const [nav, setNav] = useState(false);
    const navmenu = [
        {
            id: 1,
            link: 'event'
        },
        {
            id: 2,
            link: 'artist'
        },
        {
            id: 3,
            link: 'merch'
        },
        {
            id: 4,
            link: 'about'
        },
        {
            id: 5,
            link: 'contact'
        },
    ]

    const navigate = useNavigate();

    const logoutSubmit = (e) => {
        e.preventDefault();
        axios.post(`api/logout`).then(res => {
            if (res.data.status === 200) {
                localStorage.removeItem('auth_token');
                localStorage.removeItem('auth_email');
                swal("Success", res.data.message, "success");
                navigate('/login');
            }
        });
    }

    var AuthButtons = '';
    if (!localStorage.getItem('auth_token')) {
        AuthButtons = (
            <ul className='hidden  md:flex'>
                <Link to='/login'><li className='h2'><CgProfile size={30} /></li></Link>
            </ul>
        );
    }
    else {
        AuthButtons = (
            <ul className='hidden  md:flex'>
                <li className='h2'>
                    <button type='submit' onClick={logoutSubmit}><ImSwitch size={30} /></button>
                </li>
            </ul>
        );
    }
    return (
        <div className='nav'>
            <div className='logo'>
                <Link to='/'><img className='h-7 w-7 rounded-md' src={Logo} alt='/' /></Link>
                <Link to='/'><h1 className='h1'>NUMINOUS</h1></Link>
            </div>
            <ul className='hidden  md:flex'>
                {navmenu.map((obj) => (
                    <Link key={obj.id} to={obj.link} ><li className='h2'>{obj.link}</li></Link>
                ))}

                {AuthButtons}
            </ul>

            <div onClick={() => setNav(!nav)} className='cursor-pointer pr-4 z-10 md:hidden'>
                {nav ? <FaTimes size={30} /> : <FaBars size={30} />}
            </div>

            {nav && (
                <ul className='navmobile'>
                    {navmenu.map((obj) => (
                        <Link onClick={() => setNav(!nav)} key={obj.id} to={obj.link} smooth duration={300}> <li className='h3'>{obj.link}</li> </Link>
                    ))}
                    <Link onClick={() => setNav(!nav)} to='/login' smooth duration={300}><li className='h3'><CgProfile size={45} /></li></Link>
                </ul>
            )}
        </div>
    )
}

export default NavBAr