import { Toaster } from 'react-hot-toast';
import { RouterProvider } from 'react-router-dom';
import './App.css';
import { router } from './Routes/Routes/Routes';



function App() {
  return (
    <div className='mx-28'>
      <RouterProvider router={router}>
      </RouterProvider>
      <Toaster />

    </div>
  );
}

export default App;
