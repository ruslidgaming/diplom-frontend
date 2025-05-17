import { RouterProvider } from "react-router-dom";
import { AuthProvider } from "./core/hoc/AuthProvider";
import router from './core/routes/router';


function App() {
  return (
    <>
      <AuthProvider>
        <RouterProvider router={router} />
      </AuthProvider>
    </>
  )
}

export default App
