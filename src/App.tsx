import Navbar from '@/modules/Navbar/Navbar.tsx'
import AppRouter from './providers/router/AppRouter'

function App() {
  return (
    <div className="text-primary mx-xl">
      <Navbar />
      <AppRouter />
    </div>
  )
}

export default App
