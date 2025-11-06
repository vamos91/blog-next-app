import Link from "next/link";
interface HeaderInterface{
    isAdmin: boolean
}


const Header = ({isAdmin}: HeaderInterface) => {
    return (
        <nav className="bg-gray-800 text-white">
            <div className="container mx-auto px-4 py-4 flex justify-between items-center">
                <div className="text-lg font-bold">MyWebsite</div>
                <ul className="flex space-x-6">
                    <li>
                        <Link href="/" className="hover:text-gray-300">
                            Home
                        </Link>
                    </li>
                    <li>
                        <Link href="/products" className="hover:text-gray-300">
                            Product
                        </Link>
                    </li>
                    {
                        isAdmin && (
                            <li>
                                <Link href="/dashboard" className="hover:text-gray-300">
                                    Dashboard
                                </Link>
                            </li>
                        )
                    }
                    <li>
                        <Link href="/signin" className="hover:text-gray-300">
                            Logout
                        </Link>
                    </li>
                </ul>
            </div>
        </nav>
    );
};

export default Header;