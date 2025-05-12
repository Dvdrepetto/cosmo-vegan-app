// pages/products/index.tsx
import { Navbar } from "../components/Navbar";
import { ProductCard } from "../components/ProductCard";

const products = [
  { id: 1, name: "Producto 1", price: "$20", imageUrl: "/product1.jpg" },
  { id: 2, name: "Producto 2", price: "$25", imageUrl: "/product2.jpg" },
];

const Products = () => {
  return (
    <div>
      <Navbar />
      <h1 className="text-3xl text-center py-10">Productos</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 px-4">
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
};

export default Products;
