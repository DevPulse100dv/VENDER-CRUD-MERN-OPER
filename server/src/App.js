import { createBrowserRouter, RouterProvider } from "react-router-dom";
//import { Route, BrowserRouter as Router, Routes,Link } from  'react-router-dom';
import './App.css';
import Add from './components/addVendors/add.jsx';
import Edit from "./components/updateVendors/Edit.jsx";
import Vender from "./components/getVendor/venders.jsx";
import "bootstrap/dist/css/bootstrap.min.css";



function App() {
  const router = createBrowserRouter([

    {
      path:"/",
      element:<Vender/> 
    },
    {
      path:"/create",
      element:<Add/> 
    },
      {
        path:"/update/:id",
        element:<Edit/> 
      }
     

  ])

  return (
    <div className="App">
      
       <RouterProvider router={router}></RouterProvider>
    </div>
  )
}

export default App;



