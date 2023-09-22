import './App.css';
import { RouterProvider} from 'react-router-dom';
// import Home from './pages/Home/Home';
// import { Home, About } from './pages';
import router from './router/config';


function App() {
  return (
    <RouterProvider router={router} />
  );
}

export default App;
