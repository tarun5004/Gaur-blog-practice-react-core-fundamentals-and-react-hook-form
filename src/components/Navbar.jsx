import { Link, useLocation } from 'react-router-dom'

function Navbar() {
  const location = useLocation()

  return (
    <nav className="bg-bg border-b border-border px-6 py-3 sticky top-0 z-10">
      <div className="flex items-center justify-between max-w-6xl mx-auto">

        {/* LEFT — Brand */}
        <Link to="/" className="text-gbtext font-bold text-lg">
          Gaur Blog
        </Link>

        {/* CENTER — Nav Links */}
        <div className="flex items-center gap-8">
          <Link
            to="/"
            className={`text-sm font-medium pb-1 transition-colors ${
              location.pathname === '/'
                ? 'text-gbtext border-b-2 border-gbtext'
                : 'text-gbtext/60 hover:text-gbtext'
            }`}
          >
            Home
          </Link>
          <Link
            to="/profile"
            className={`text-sm font-medium pb-1 transition-colors ${
              location.pathname === '/profile'
                ? 'text-gbtext border-b-2 border-gbtext'
                : 'text-gbtext/60 hover:text-gbtext'
            }`}
          >
            Profile
          </Link>
          <Link
            to="/login"
            className="text-sm font-medium pb-1 text-primary border border-primary rounded px-3 py-1 hover:bg-primary/10 transition-colors"
          >
            Logout
          </Link>
        </div>

        {/* RIGHT — Icons */}
        <div className="flex items-center gap-4">

          {/* Search Icon */}
          <button className="text-gbtext/60 hover:text-gbtext transition-colors">
            <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M21 21l-4.35-4.35M17 11A6 6 0 1 1 5 11a6 6 0 0 1 12 0z" />
            </svg>
          </button>

          {/* Bell Icon */}
          <button className="text-gbtext/60 hover:text-gbtext transition-colors">
            <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M15 17h5l-1.405-1.405A2.032 2.032 0 0 1 18 14.158V11a6 6 0 1 0-12 0v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 1 1-6 0v-1m6 0H9" />
            </svg>
          </button>

          {/* Avatar */}
          <div className="w-8 h-8 rounded-full bg-accent flex items-center justify-center text-gbtext font-bold text-sm">
            A
          </div>

        </div>
      </div>
    </nav>
  )
}

export default Navbar

// underline shift logic - useLocation()` ek **live GPS** hai. Jab bhi URL change hota hai — ye automatically naya value deta hai. 
// React dobara render karta hai — naya URL check hota hai — sahi link pe underline lagti hai.