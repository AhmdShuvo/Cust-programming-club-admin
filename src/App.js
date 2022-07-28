import React, { useState } from 'react';
import PersistentDrawerLeft from './Components/Dashboard/Dashboard';
import {
  BrowserRouter,
  Routes,
  Route,
  Link,
} from "react-router-dom";
import SignInSide from './Pages/Login/Login';
import Dashboard from './Components/Dashboard/Dashboard';
import MakeAdmin from './Components/Dashboard/Make Admin/MakeAdmin';
import PostEvent from './Components/Dashboard/Events/PostEvent';
import NotFound from './Pages/NotFound/NotFound';



const App = () => {

  return (
    <BrowserRouter>
    <Routes>
  

    <Route path='/'
            element={<Dashboard />}>
           <Route path='makeAdmin' element={<MakeAdmin />}></Route>
           <Route path='postevents' element={<PostEvent />}></Route>
            {/* <Route path='manage' element={<ManageOrders />} />
            <Route path='all' element={<AllGames />} />
            <Route path='addReview' element={<AddReview />}></Route>
            <Route path='orders' element={<Myorders />}></Route>
            <Route path='newproduct' element={<AddNew />}></Route>
           
            <Route path='orders/payment/:productId' element={<Payment />}></Route> */}
           
          </Route>
      <Route path='login' element={<SignInSide/>} />
     <Route path="*" element={<NotFound/>}></Route>
    </Routes>
  </BrowserRouter>
  );
};

export default App;