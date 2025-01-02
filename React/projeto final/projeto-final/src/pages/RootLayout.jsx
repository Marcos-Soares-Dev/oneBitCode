import { Link, Outlet } from "react-router-dom";

export default function RootLayout() {
  return (
    <>
    <header>
        <Link to="/" className="logo">React Storage</Link>
        <nav>
            <Link to="/">Home</Link>
            <Link to="/items">Items</Link>            
        </nav>
    </header>

    <div>
        <Outlet />
    </div>

    <footer>
        <p>Criado com React e React Router DOM</p>
    </footer>
    </>
  );
}