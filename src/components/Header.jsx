import './Header.css';
import './Hero';

function Header({ namn, titel }) {
  return (
    <header className="header">
      <h1>{namn}</h1>
      <p>{titel}</p>
    </header>
  );
}

export default Header;