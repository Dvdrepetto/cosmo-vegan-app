// pages/home/index.tsx
import Link from "next/link";
import { Navbar } from "../components/Navbar";

const Home = () => {
    return (
        <div>
            <Navbar />
            <section className="text-center py-10">
                <h1 className="text-4xl font-bold">Bienvenidos a Cosmo Vegan</h1>
                <p className="text-lg mt-4">Tu tienda de productos veganos y recetas saludables.</p>
            </section>

            <section className="flex justify-center space-x-8 py-10">
                <Link href="/products">
                    <a className="text-xl text-blue-500 hover:underline">Ver Productos</a>
                </Link>
                <Link href="/recipes">
                    <a className="text-xl text-blue-500 hover:underline">Recetas Gratis</a>
                </Link>
            </section>
        </div>
    );
};

export default Home;
// This is the main page of the application. It includes a welcome message and links to the products and recipes pages.
