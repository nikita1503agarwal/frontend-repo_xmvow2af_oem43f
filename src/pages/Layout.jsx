import Navbar from '../components/Navbar'

export default function Layout({ children }) {
  return (
    <div className="min-h-screen bg-white text-zinc-900">
      <Navbar />
      {children}
    </div>
  )
}
