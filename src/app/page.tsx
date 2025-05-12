
export default function Home() {
  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <div className="text-3xl font-bold text-center">
        <h1>Welcome to cosmo Vegan</h1>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
        <div className="bg-gray-200 p-4 rounded-lg shadow-md">
          <h2 className="text-xl font-semibold">Recipe Card</h2>
          <p>This is the recipe card component.</p>
        </div>
        <div className="bg-gray-200 p-4 rounded-lg shadow-md">
          <h2 className="text-xl font-semibold">Product Card</h2>
          <p>This is the product card component.</p>
        </div>
      </div>
      <div className="text-center">
        <p>&copy; 2023 Recipe App. All rights reserved.</p>
      </div>
    </div>
  );
}
