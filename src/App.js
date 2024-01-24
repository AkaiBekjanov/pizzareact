
import './App.scss';
import { Header } from './components/Header/Header';
import { Provider } from 'react-redux';
import { store } from './redux/store';
import { Main } from './pages/Main/Main';
import { useLocation } from 'react-router-dom';



function App() {
  const location=useLocation();
  return (
    <div className="App">
  
       <Provider store={store}>
           <div className='container'>
             {location.pathname === '/' ? <>
             <Header />
           <hr className='line' />
           <Main /></>:"NOT FOUND 404"}
           </div>
       </Provider>
       
    </div>
  );
}
{/* <Header />
           <hr className='line' />
           <Main /> */}

export default App;
