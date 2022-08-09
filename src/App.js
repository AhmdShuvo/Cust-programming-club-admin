import React, { useState } from 'react';
import {
  BrowserRouter,
  Routes,
  Route,

} from "react-router-dom";
import SignInSide from './Pages/Login/Login';
import Dashboard from './Components/Dashboard/Dashboard';
import MakeAdmin from './Components/Dashboard/Make Admin/MakeAdmin';
import PostEvent from './Components/Dashboard/Events/CurrentEvents';
import NotFound from './Pages/NotFound/NotFound';
import DeleteEvents from './Components/Dashboard/DeleteEvents/DeleteEvents';
import Blogs from './Components/Dashboard/ManageBlogs/Blogs';
import Notice from './Components/Dashboard/PostNotice/Notice';
import DashboardHome from './Components/Dashboard/DashboardHome/DashboardHome';
import UpcommingEvents from './Components/Dashboard/Events/UpcommingEvents';



const App = () => {

  return (
    <BrowserRouter>
    <Routes>
  

    <Route path='/'
            element={<Dashboard />}>
              <Route path='/' element={<DashboardHome></DashboardHome>}></Route>
           <Route path='makeAdmin' element={<MakeAdmin />}></Route>
           <Route path='currentevents' element={<PostEvent />}></Route>
           <Route path='comingevents' element={<UpcommingEvents />}></Route>
           <Route path='deleteevents' element={<DeleteEvents/>} />
           <Route path='manageblogs' element={<Blogs/>} />
           <Route path='notice' element={<Notice/>} />
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