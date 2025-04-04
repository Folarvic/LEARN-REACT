export default function Header() {
  return (
    <header className="header">
      <img src="/logo512.png" alt="React logo" width={100} />
      <nav>
        <ul className="nav-list">
          <li className="nav-item">Home</li>
          <li className="nav-item">About</li>
          <li className="nav-item">Contact</li>
        </ul>
      </nav>
      <h1>Welcome to My React App</h1>
    </header>
  )
}