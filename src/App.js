import React from 'react';
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
import AuthProvider, { AuthContext } from './Components/Contexts/AuthProvider';
import AdminRoute from './Components/AdminRoute/AdminRoute';
import Pending from './Components/Dashboard/Pending/Pending';



const App = () => {

  return (
   <AuthProvider>
     <BrowserRouter>
    <Routes>
    <Route path='/'
            element={<Dashboard />}>
               <Route
              path='/'
              element={
                <AdminRoute>
                  {' '}
                  <DashboardHome />{' '}
                </AdminRoute>
              }
            ></Route>
         
           <Route path='makeAdmin' 
            element={
              <AdminRoute>
                {' '}
                <MakeAdmin />{' '}
              </AdminRoute>
            }
          ></Route>
           <Route path='currentevents' 
            element={
              <AdminRoute>
                {' '}
                <PostEvent />{' '}
              </AdminRoute>
            }
           
          ></Route>
           <Route path='comingevents' 
            element={
              <AdminRoute>
                {' '}
                <UpcommingEvents />{' '}
              </AdminRoute>
            }
          ></Route>
           <Route path='deleteevents'
           element={
            <AdminRoute>
              {' '}
              <DeleteEvents />{' '}
            </AdminRoute>
          }
           
           />
           <Route path='manageblogs'
           element={
            <AdminRoute>
              {' '}
              <Blogs />{' '}
            </AdminRoute>
          }
           
     />
           <Route path='applications'
           element={
            <AdminRoute>
              {' '}
              <Pending />{' '}
            </AdminRoute>
          }
           
     />
           <Route path='notice'
           
           element={
            <AdminRoute>
              {' '}
              <Notice />{' '}
            </AdminRoute>
          }
          />
           
          </Route>
      <Route path='login' 
      
      element={<SignInSide/>} />
     
     <Route path="*" element={<NotFound/>}></Route>
    </Routes>
  </BrowserRouter>
   </AuthProvider>
  );
};

export default App;