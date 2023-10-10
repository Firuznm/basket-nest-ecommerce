import { Route, Routes } from 'react-router-dom';
import { ContextFunc } from './Context/GlobalState';
import Header from './components/header/Header';
import Home from './pages/home/Home';
import BasketPage from './pages/BasketPage/BasketPage';

function App() {
  return (
  <>
  <ContextFunc>
      <Header/>

    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='basket' element={<BasketPage/>}/>
    </Routes>
  
   </ContextFunc>
  </>
  );
}

export default App;
