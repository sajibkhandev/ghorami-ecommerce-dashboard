import {
  createRoutesFromElements,
  createBrowserRouter,
  Route,
  RouterProvider
} from "react-router-dom";
import Registration from './pages/Registration'
import Login from "./pages/Login";
import Home from "./pages/Home";
import Otp from "./pages/Otp";

const router = createBrowserRouter(
  createRoutesFromElements(
    <>
    <Route path="/" element={<Registration />}></Route>
    <Route path="/login" element={<Login />}></Route>
    <Route path="/otp/:email/:otp" element={<Otp />}></Route>
    <Route path="/home" element={<Home />}></Route>
    

    </>
  )
);



const App =  () => {
  
  return (
    <RouterProvider router={router} />
    
  )
}

export default App