import './App.css';

function App() {
  return (
    <>
    <header>
      <nav className="barra">
        <p>Logo de la empresa</p>
        <ul className='nav-bar'>
          <li>Inicio</li>
          <li>Tortas</li>
          <li>Galletitas</li>
        </ul>
          <img className='carrito' src="https://cdn-icons-png.flaticon.com/512/3144/3144456.png" alt=""/>
      </nav>
    </header>
    <main>
      <div className='container-cards'>
        <div className='cards'>
          <h2>Torta oreo</h2>
          <p>$10.000</p>
          <button>Comprar</button>
        </div>
        <div className='cards'>
          <h2>Torta ricota</h2>
          <p>$15.000</p>
          <button>Comprar</button>
        </div>
        <div className='cards'>
          <h2>Tiramisu</h2>
          <p>$30.000</p>
          <button>Comprar</button>
        </div>
      </div>
    </main>
    {/* <footer className='footer'>
  
    </footer> */}
    </>
  );
};

export default App;
