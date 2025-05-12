// components/RecipeCard.tsx
import Image from "next/image";
export const RecipeCard = ({ recipe }: { recipe: { title: string, description: string, imageUrl: string } }) => {
    return (
        <div className="border rounded-lg overflow-hidden shadow-lg">
            <Image src={recipe.imageUrl} alt={recipe.title} className="w-full h-48 object-cover" />
            <div className="p-4">
                <h3 className="text-xl">{recipe.title}</h3>
                <p className="text-lg text-gray-500">{recipe.description}</p>
            </div>
        </div>
    );
};
