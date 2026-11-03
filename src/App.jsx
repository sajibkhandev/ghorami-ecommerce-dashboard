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
import ForgetPassword from "./pages/ForgetPassword";
import ChangePassword from "./pages/ChangePassword";
import CreateCategory from "./pages/CreateCategory";
import ViewCategory from "./pages/ViewCategory";
import CreateSubCategory from "./pages/CreateSubCategory";
import ViewSubCategory from "./pages/ViewSubCategory";
import CreateProduct from "./pages/CreateProduct";
import ViewProduct from "./pages/ViewProduct";
import CreateVarient from "./pages/CreateVarient";
import ViewVarient from "./pages/ViewVarient";
import AddDiscount from "./pages/AddDiscount";

const router = createBrowserRouter(
  createRoutesFromElements(
    <>
    <Route path="/" element={<Registration />}></Route>
    <Route path="/login" element={<Login />}></Route>
    <Route path="/otp/:email/:otp" element={<Otp />}></Route>
    <Route path="/home" element={<Home />}></Route>
    <Route path="/forgetpassword" element={<ForgetPassword />}></Route>
    <Route path="/changepassword/:email" element={<ChangePassword />}></Route>
    <Route path="/createcategory" element={<CreateCategory />}></Route>
    <Route path="/viewcategory" element={<ViewCategory />}></Route>
    <Route path="/createsubcategory" element={<CreateSubCategory />}></Route>
    <Route path="/viewsubcategory" element={<ViewSubCategory />}></Route>
    <Route path="/createproduct" element={<CreateProduct />}></Route>
    <Route path="/viewproduct" element={<ViewProduct />}></Route>
    <Route path="/createvarient" element={<CreateVarient />}></Route>
    <Route path="/viewvarient" element={<ViewVarient />}></Route>
    <Route path="/adddiscount" element={<AddDiscount />}></Route>
    

    </>
  )
);



const App =  () => {
  
  return (
    <RouterProvider router={router} />
    
  )
}

export default App


