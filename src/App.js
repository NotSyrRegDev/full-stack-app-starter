import React , {useState}  from 'react';
import Navbar from './components/Navbar';
import './App.css';
import Footer from './components/Footer';

import { AppProvider } from './context/AppContext';
import {  BrowserRouter,  Route,   Routes, } from "react-router-dom";
 
import SingleProduct from './pages/SingleProduct';
import { Home } from './pages/Home';
import Loading from './components/Loading';
import ConfirmPage from './pages/ConfirmPage';


const App = () => {

  const [loadingWeb , setLoadingWeb ] = useState(true);

  const [userAssignedId , setUserAssignedId] = useState(0);

  setTimeout(() => {
    setLoadingWeb(false);
  } , 1500)

  return (

    <AppProvider>

    {loadingWeb ? (
        <Loading />
    ) : (
      <div className="iwaiter_container  " >
   <BrowserRouter>

        <Navbar />  

          <Routes>
            
              <Route
                path="/"
                element={
                  <Home />
                }
              />
              <Route
                path="/page"
                element={
                  <Page userAssignedId={userAssignedId} setUserAssignedId={setUserAssignedId} />
                }
              />
              <Route
                path="/page:page"
                element={
                  <SinglePage userAssignedId={userAssignedId} setUserAssignedId={setUserAssignedId} />
                }
              />

           
          </Routes>
          <Footer />
        </BrowserRouter>

</div>
    )}


    </AppProvider>
  )
}

export default App