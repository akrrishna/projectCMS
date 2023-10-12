import './Navbar.css'

const Navbar = () => {
  return (
    <header>
    <nav className="navbar">
        <div className="logo">
            <a href="#">Your Logo</a>
        </div>
        <ul className="nav-links">
            <li><a href="#">Home</a></li>
            <li><a href="#">About</a></li>
            <li><a href="#">Services</a></li>
            <li><a href="#">Portfolio</a></li>
            <li><a href="#">Contact</a></li>
        </ul>
    </nav>
</header>
  )
}

export default Navbar
