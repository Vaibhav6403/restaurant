import logo from './logo.svg';
import './App.css';
import HomePage from './pages/HomePage';
import Navbar from './components/Navbar';
import { ParallaxProvider } from 'react-scroll-parallax';

function App() {
  return (
    <div className='w-screen h-screen bg-richblack-900 flex flex-col overflow-x-hidden'>
      <ParallaxProvider>
      <HomePage/>
      </ParallaxProvider>

    </div>
  );
}

export default App;
