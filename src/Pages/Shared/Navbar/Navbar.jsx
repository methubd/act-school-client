import { Link } from "react-router-dom";


const Navbar = () => {

    const navigationOptions =   <>
                                <li><Link to='/'>Home</Link></li>
                                <li><Link to='/instructors'>Instructors</Link></li>
                                <li><Link to='/classes'>Classes</Link></li>
                                <li><Link to='/dashboard'>Dashboard</Link></li>
                                <li><Link to='/login'>Login</Link></li>
                                <img className="w-10 rounded-full" src="https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png" alt="" />
                                </>
    return (
        <div className="navbar bg-base-100">
        <div className="navbar-start">
            <div className="dropdown">
            <label tabIndex={0} className="btn btn-ghost lg:hidden">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
            </label>
            <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                {navigationOptions}
            </ul>
            </div>
            <a className="btn btn-ghost uppercase text-xl">Act School</a>
        </div>
        <div className="navbar-center hidden lg:flex">
            <ul className="menu menu-horizontal px-1">
            {navigationOptions}
            </ul>
        </div>
        </div>
    );
};

export default Navbar;