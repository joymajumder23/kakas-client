import { Link, NavLink } from "react-router-dom";
import logo from "../../../assets/images/Kakas.png";

const Navbar = () => {
    const links = <>
    <li><NavLink to="/">Home</NavLink></li>
    <li><NavLink to="/post">Post</NavLink></li>
    <li><NavLink to="/committee">Committee</NavLink></li>
    <li><NavLink to="/notice">Notice</NavLink></li>
    <li><NavLink to="/gallery">Gallery</NavLink></li>
    <li><NavLink to="/about">About</NavLink></li>
    </>;
    return (
        <div>
            <div className="navbar bg-base-100">
                <div className="navbar-start">
                    <div className="dropdown">
                        <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="h-5 w-5"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor">
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="M4 6h16M4 12h8m-8 6h16" />
                            </svg>
                        </div>
                        <ul
                            tabIndex={0}
                            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[10] mt-3 w-52 p-2 shadow">
                            {links}
                        </ul>
                    </div>
                    <a className="btn btn-ghost text-xs md:text-xl"><img className="w-6 md:w-12" src={logo} alt="" />শ্রীশ্রী করুণাময়ী কালীবাড়ি</a>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1">
                       {links}
                    </ul>
                </div>
                <div className="navbar-end">
                    <div className="dropdown dropdown-end">
                        <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar">
                            <div className="w-10 rounded-full">
                                <img
                                    alt="Tailwind CSS Navbar component"
                                    src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp" />
                            </div>
                        </div>
                        <ul
                            tabIndex={0}
                            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[10] mt-3 w-52 p-2 shadow">
                            <li>
                                <a className="justify-between">
                                    Profile
                                    <span className="badge">New</span>
                                </a>
                            </li>
                            <Link to="/dashboard"><li><a>Dashboard</a></li></Link>
                            <li><a>Logout</a></li>
                        </ul>
                    </div>
                    <Link to="/login"><a className="btn">Login</a></Link>
                </div>
            </div>
        </div>
    );
};

export default Navbar;