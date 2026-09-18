import { Link, useNavigate } from 'react-router-dom'
import logo from '../../assets/velora.png'

const Header = () => {
    const navigate = useNavigate();
    const logout = () => {
        localStorage.removeItem('admintoken');
        navigate('/')
    }

    return (
        <nav className="sticky top-0 z-50 bg-white border-b border-black/5">

            {/* Main Header */}
            <div className="flex items-center justify-between py-3 px-4 sm:px-6 md:px-10">

                {/* Logo */}
                <Link to="/admin">
                    <img
                        src={logo}
                        alt="Velora"
                        loading="lazy"
                        className="w-auto h-12 sm:h-14 md:h-16"
                    />
                </Link>


                {/* Right Side */}
                <div className="flex items-center gap-3 sm:gap-5 md:gap-7">

                    <button
                        className="hidden md:block px-5 py-2.5 text-white bg-black rounded-lg hover:bg-black/80 transition-colors"
                        onClick={logout}
                    >
                        Logout
                    </button>

                </div>
            </div>

        </nav>
    )
}

export default Header