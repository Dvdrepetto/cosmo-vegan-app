// components/Navbar.tsx
import Link from "next/link";

export const Navbar = () => {
    return (
        <nav className="bg-gray-800 p-4 text-white">
            <div className="flex justify-between">
                <Link href="/home">
                    <a className="text-xl">Cosmo Vegan</a>
                </Link>
                <div>
                    <Link href="/products">
                        <a className="px-4">Productos</a>
                    </Link>
                    <Link href="/recipes">
                        <a className="px-4">Recetas</a>
                    </Link>
                </div>
            </div>
        </nav>
    );
};
