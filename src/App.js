import logo from './logo.svg';
import './App.css';
import HomePage from './pages/HomePage';
import Navbar from './components/Navbar';
import { ParallaxProvider } from 'react-scroll-parallax';

function App() {
  return (
    <div className='w-screen h-screen  flex flex-col overflow-x-hidden'>
      
      <HomePage/>
      

    </div>
  );
}

export default App;
