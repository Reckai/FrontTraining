import Navbar from '@/modules/Navbar/Navbar.tsx'
import Sidebar from '@/modules/Sidebar/Sidebar.tsx'
import AppRouter from './providers/router/AppRouter'

function App() {
  return (
    <div className="text-primary h-screen flex-col flex ">
      <Navbar />
      <div className="flex grow">
        <Sidebar />
        <div className="flex grow p-sm">
          <AppRouter />
        </div>
      </div>
    </div>
  )
}

export default App
