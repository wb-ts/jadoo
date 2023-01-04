import './App.css';
import Header from './components/Header';
import Home from './components/Home';
import Category from './components/Category';
import Selling from './components/Selling';

function App() {
  return (
    <div className='content'>
      <img src="/Decore.png" alt={"Decore Frame Background"} className="absolute top-0 left-0 w-full z-[-1]" />
      <div className='content mt-8'>
        <Header />
        <Home />
        <Category />
        <Selling />
      </div>
    </div>

  );
}

export default App;
