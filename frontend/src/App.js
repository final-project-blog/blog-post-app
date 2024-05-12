import {
  Route,
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
} from 'react-router-dom';
import MainLayout from './layouts/MainLayout';
import HomePage from './pages/HomePage';
import NotFoundPage from './pages/NotFoundPage';
import Loging from './pages/Loging';
import Register from './pages/Register';

  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path='/' element={<MainLayout />}>
      <Route index element={<HomePage />} />
      <Route path='/login' element={<Loging />} />
      <Route path='/register' element={<Register />} />
      <Route path= '*' element={<NotFoundPage />} />
      </Route>
    )
  );
  function App() {
    return <RouterProvider router={router} />;
  }

export default App;