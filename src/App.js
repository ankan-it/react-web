import React ,{useEffect} from 'react';
import { RouterProvider} from "react-router-dom";

import AppRouter from './routes/route';


function App() {




  // const router =createBrowserRouter([
  //     {
  //         path:"/",
  //         element:<Dashboard/>
  //     }
  // ]);


  return (
    <>
      <RouterProvider router={AppRouter} />  
    </>
  );
}

export default App;
