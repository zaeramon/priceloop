
import { ShoppingCart } from 'lucide-react'

function App() {
  return (
    <main className="min-h-screen flex flex-col items-center justify-center p-4">
      <ShoppingCart className="w-16 h-16 text-teal-600 mb-4" />

      <h1 className="text-3xl font-bold text-gray-900 mb-2">
        Priceloop Foundation
      </h1>

      <p className="text-gray-600 text-center max-w-md">
        React + TypeScript + Tailwind CSS + Lucide setup complete.
      </p>
    </main>
  )
}

export default App
