// components/ProductCard.tsx
import Image from "next/image";

export const ProductCard = ({ product }: { product: { name: string, price: string, imageUrl: string } }) => {
    return (
        <div className="border rounded-lg overflow-hidden shadow-lg">
            <Image src={product.imageUrl} alt={product.name} className="w-full h-48 object-cover" />
            <div className="p-4">
                <h3 className="text-xl">{product.name}</h3>
                <p className="text-lg text-gray-500">{product.price}</p>
            </div>
        </div>
    );
};
