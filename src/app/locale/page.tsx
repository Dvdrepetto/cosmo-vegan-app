// app/page.tsx
import Header from "./context/components/Header";
import Navbar from "./context/components/Navbar";
// Componente para mostrar productos

export default function HomePage() {
  return (
    <main className="min-h-screen bg-gray-50 dark:bg-gray-900">
      {/* Encabezado de la página */}
      <Navbar />
      <Header />
    </main>
  );
}
