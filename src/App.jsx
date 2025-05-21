import { RouterProvider } from "react-router-dom";
import { AuthProvider } from "./core/hoc/AuthProvider";
import router from './core/routes/router';

import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


function App() {
  return (
    <>
      <AuthProvider>
        <RouterProvider router={router} />
      </AuthProvider>
      <ToastContainer />
    </>
  )
}

export default App


// toast('Обычное сообщение');
// toast.success('Успех!');
// toast.error('Ошибка!');
// toast.warning('Предупреждение');
// toast.info('Информация');
