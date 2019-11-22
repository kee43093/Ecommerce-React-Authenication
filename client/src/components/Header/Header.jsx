import React from '../../../node_modules/react';
import "./Header.css";
import { Link } from '../../../node_modules/react-router-dom';
import ReactPlayer from '../../../node_modules/react-player'
import { PromiseProvider } from 'mongoose';
import LogIn from '../AUTHENTICATION/LogIn';
import LogOut from '../AUTHENTICATION/LogOut'



const Header = (props) => {
    return (
            <nav className="nav">
                <ul className="list">
                <img className="logo" src="/images/img.jpg" alt=""/>
                    <Link className="link" to="/">Home</Link>
                    
                    
                    {props.currentUser
                    ? (
                    <span>
                        <Link className="link" to="/products">Products</Link>
                        <Link className="link" to="/Logout">LogOut</Link>
                    </span>
                    )
                    : (
                        <span>
                            <Link className="link" to='/login'>LogIn</Link>
                            <Link className="link" to="/Contact">Contact</Link>
                            <Link className="link" to='/Signup'>SignUp</Link>
                        </span>
                    )
                    }
                    <a href="#footer" className="link">Subscribe</a>
                    <a href="#" className="link">About Us</a>
 
                </ul>
                         
            </nav>   
        )

    }


    export default Header;
