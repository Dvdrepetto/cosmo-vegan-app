"use client";


const Navbar = () => {
    return (
        <nav className="...">
            <h1>Cosmo Vegan</h1> 
            <ul className="flex space-x-4   text-lg font-semibold   text-gray-700 dark:text-gray-200">
                <li>
                    <a href="#home" className="text-gray-700 hover:text-gray-900">Home</a>
                </li>
                <li>
                    <a href="#about" className="text-gray-700 hover:text-gray-900">About</a>
                </li>
                <li>
                    <a href="#products" className="text-gray-700 hover:text-gray-900">Products</a>
                </li>
                <li>
                    <a href="#contact" className="text-gray-700 hover:text-gray-900">Contact</a>
                </li>
                </ul>
        </nav>
    );
};

export default Navbar;
