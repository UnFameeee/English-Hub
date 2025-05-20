import { Link } from 'react-router-dom'
import { Button } from './ui/button'

const Navbar = () => {
  return (
    <header className="bg-background border-b">
      <div className="container max-w-6xl mx-auto px-4 py-3 flex items-center justify-between">
        <Link to="/" className="text-xl font-bold text-primary">English Hub</Link>
        <nav className="hidden md:flex items-center gap-6">
          <Link to="/" className="text-sm font-medium hover:text-primary transition-colors">
            Home
          </Link>
          <Link to="/vocabulary" className="text-sm font-medium hover:text-primary transition-colors">
            Vocabulary
          </Link>
          <Link to="/grammar" className="text-sm font-medium hover:text-primary transition-colors">
            Grammar
          </Link>
          <Link to="/study-tracker" className="text-sm font-medium hover:text-primary transition-colors">
            Study Tracker
          </Link>
        </nav>
        <div className="flex items-center gap-2">
          <Button variant="outline" size="sm">
            Login
          </Button>
        </div>
      </div>
    </header>
  )
}

export default Navbar
