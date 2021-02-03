import { Navbar, NavbarBrand } from 'reactstrap';
import Menu from './components/MenuComponent';
// import './App.css';

function App() {
  return (
    <div>
      <Navbar dark color="secondary">
        <div className="container">
            <NavbarBrand href="/">Abhyuday</NavbarBrand>
        </div>
      </Navbar>
      <Menu />
    </div>
  );
}

export default App;
