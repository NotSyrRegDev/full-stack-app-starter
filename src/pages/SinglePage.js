import React, {   useContext  } from 'react';
import './SingleProduct.css';
import {  useNavigate } from 'react-router-dom';
import { AppContext } from '../context/AppContext';


const SinglePage = ( {userAssignedId , setUserAssignedId} ) => {

  // to avigate to another page
  const navigate = useNavigate();

  // to use context and app context
  const {retrive} = useContext(AppContext);

  const [retreivealProduct  ] = retrive;



  return (
    <div>
  
    here is the single product page 

    </div>
  )
}

export default SinglePage