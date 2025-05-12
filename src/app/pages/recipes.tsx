// pages/recipes/index.tsx
import { Navbar } from "../components/Navbar";
import { RecipeCard } from "../components/RecipeCard";

const recipes = [
  { id: 1, title: "Receta 1", description: "Receta fácil de ensalada", imageUrl: "/recipe1.jpg" },
  { id: 2, title: "Receta 2", description: "Receta rápida de smoothie", imageUrl: "/recipe2.jpg" },
];

const Recipes = () => {
  return (
    <div>
      <Navbar />
      <h1 className="text-3xl text-center py-10">Recetas Gratis</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 px-4">
        {recipes.map((recipe) => (
          <RecipeCard key={recipe.id} recipe={recipe} />
        ))}
      </div>
    </div>
  );
};

export default Recipes;
