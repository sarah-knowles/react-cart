
import './index.css';

function App() {
  return (

    <header className='heading'>
      <div className='overlay'>
        <nav className='nav'>
          <h2>Shop</h2>
          <ul>
            <li><a href='#'>Home</a></li>
            <li><a href='#'>About</a></li>
            <li><a href='#'><ion-icon name="basket-outline"></ion-icon>Cart: <span>0</span></a></li>
          </ul>
        </nav>
      </div>
    </header>

  );
}

export default App;
