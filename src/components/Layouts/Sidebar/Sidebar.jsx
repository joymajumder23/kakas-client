import logo from "../../../assets/images/Kakas.png";
import { useState } from "react";
import { AiOutlineBars } from "react-icons/ai";
import { BiSolidBookContent } from "react-icons/bi";
import { FaHome, FaUsers } from "react-icons/fa";
import { FiUpload } from "react-icons/fi";
import { GrLogout } from "react-icons/gr";
import { ImProfile } from "react-icons/im";
import { MdAddCard, MdHomeWork } from "react-icons/md";
import { VscGitPullRequestDraft } from "react-icons/vsc";
import { Link, NavLink } from "react-router-dom";

const Sidebar = () => {
  const [isActive, setActive] = useState(false)

  // Sidebar Responsive Handler
  const handleToggle = () => {
    setActive(!isActive);
  }
  return (
    <div>
      {/* Small Screen Navbar */}
      <div className='bg-gray-100 text-gray-800 flex justify-between md:hidden'>
        <div>
          <div className='block cursor-pointer p-4 font-bold'>
            <Link to='/'>
              <img
                // className='hidden md:block'
                src={logo}
                alt='logo'
                width='50'
                height='50'
              />
              <p>KAKAS</p>
            </Link>
          </div>
        </div>

        <button
          onClick={handleToggle}
          className='mobile-menu-button p-4 focus:outline-none focus:bg-gray-200'
        >
          <AiOutlineBars className='h-5 w-5' />
        </button>
      </div>

      {/* Sidebar */}
      <div
        className={`z-10 md:fixed flex flex-col justify-between overflow-x-hidden bg-gray-100 w-64 space-y-6 px-2 py-4 absolute inset-y-0 left-0 transform ${isActive && '-translate-x-full'
          }  md:translate-x-0  transition duration-200 ease-in-out`}
      >
        <div>
          <div>
            <div className='w-full hidden md:flex px-4 py-2 shadow-lg rounded-lg justify-center items-center bg-rose-100 mx-auto'>
              <Link to='/'>
                <img
                  // className='hidden md:block'
                  src={logo}
                  alt='logo'
                  width='100'
                  height='100'
                />
                <p className='text-xl font-bold text-red-500'>KAKAS</p>
              </Link>
            </div>
          </div>

          {/* Nav Items */}
          <div className='flex flex-col justify-between flex-1 mt-6'>
            {/* Conditional toggle button here.. */}

            {/*  Menu Items */}
            <nav>

              <>
                {/* Admin Home */}
                <NavLink
                  to='/dashboard/adminHome'
                  className={({ isActive }) =>
                    `flex items-center px-4 py-2 my-5  transition-colors duration-300 transform  hover:bg-gray-300   hover:text-gray-700 ${isActive ? 'bg-gray-300  text-gray-700' : 'text-gray-600'
                    }`
                  }
                >
                  <MdHomeWork className='w-5 h-5' />

                  <span className='mx-4 font-medium'>Admin Home</span>
                </NavLink>
                {/* All Users */}
                <NavLink
                  to='all-users'
                  className={({ isActive }) =>
                    `flex items-center px-4 py-2 my-5  transition-colors duration-300 transform  hover:bg-gray-300   hover:text-gray-700 ${isActive ? 'bg-gray-300  text-gray-700' : 'text-gray-600'
                    }`
                  }
                >
                  <FaUsers className='w-5 h-5' />

                  <span className='mx-4 font-medium'>All Users</span>
                </NavLink>
                {/* All Blood Donation Request */}
                <NavLink
                  to='all-blood-donation'
                  className={({ isActive }) =>
                    `flex items-center px-4 py-2 my-5  transition-colors duration-300 transform  hover:bg-gray-300   hover:text-gray-700 ${isActive ? 'bg-gray-300  text-gray-700' : 'text-gray-600'
                    }`
                  }
                >
                  <VscGitPullRequestDraft className='w-7 h-10' />

                  <span className='mx-4 font-medium'>Request</span>
                </NavLink>
                {/* Content Management*/}
                <NavLink
                  to='content-management'
                  className={({ isActive }) =>
                    `flex items-center px-4 py-2 my-5  transition-colors duration-300 transform  hover:bg-gray-300   hover:text-gray-700 ${isActive ? 'bg-gray-300  text-gray-700' : 'text-gray-600'
                    }`
                  }
                >
                  <MdAddCard className='w-5 h-5' />

                  <span className='mx-4 font-medium'>Add Content</span>
                </NavLink>
                {/* Content Management*/}
                <NavLink
                  to='content-management'
                  className={({ isActive }) =>
                    `flex items-center px-4 py-2 my-5  transition-colors duration-300 transform  hover:bg-gray-300   hover:text-gray-700 ${isActive ? 'bg-gray-300  text-gray-700' : 'text-gray-600'
                    }`
                  }
                >
                  <BiSolidBookContent className='w-5 h-5' />

                  <span className='mx-4 font-medium'>Content Management</span>
                </NavLink>
                {/* Content Management*/}
                <NavLink
                  to='upload'
                  className={({ isActive }) =>
                    `flex items-center px-4 py-2 my-5  transition-colors duration-300 transform  hover:bg-gray-300   hover:text-gray-700 ${isActive ? 'bg-gray-300  text-gray-700' : 'text-gray-600'
                    }`
                  }
                >
                  <FiUpload className='w-5 h-5' />

                  <span className='mx-4 font-medium'>Upload</span>
                </NavLink>
              </>


            </nav>
          </div>
        </div>

        <div>
          <hr />

          {/* Profile Menu */}
          <NavLink
            to='/dashboard/profile'
            className={({ isActive }) =>
              `flex items-center px-4 py-2 my-5  transition-colors duration-300 transform  hover:bg-gray-300   hover:text-gray-700 ${isActive ? 'bg-gray-300  text-gray-700' : 'text-gray-600'
              }`
            }
          >
            <ImProfile className='w-5 h-5' />

            <span className='mx-4 font-medium'>Profile</span>
          </NavLink>
          {/* Home */}
          <NavLink
            to='/'
            className={({ isActive }) =>
              `flex items-center px-4 py-2 my-5  transition-colors duration-300 transform  hover:bg-gray-300   hover:text-gray-700 ${isActive ? 'bg-gray-300  text-gray-700' : 'text-gray-600'
              }`
            }
          >
            <FaHome className='w-5 h-5' />

            <span className='mx-4 font-medium'>Home</span>
          </NavLink>
          <button
            className='flex w-full items-center px-4 py-2 mt-5 text-gray-600 hover:bg-gray-300   hover:text-gray-700 transition-colors duration-300 transform'
          >
            <GrLogout className='w-5 h-5' />

            <span className='mx-4 font-medium'>Logout</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;