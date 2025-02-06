import { Routes } from 'react-router-dom';
import './App.css'
import { Route } from 'react-router-dom';
import Home from "./pages/home"
import Favorite from './pages/favourite';
import { MovieProvider } from './contexts/moviecontext';
import Navbar from './components/navbar';
function App() {
  return (
    <MovieProvider>
      <Navbar />
    <main className='main-content'>
     <Routes>
      <Route path='/' element={<Home />}/>
      <Route path='/favorites' element={<Favorite />}/>
     </Routes>
    </main>
    </MovieProvider>
  );
}
export default App;