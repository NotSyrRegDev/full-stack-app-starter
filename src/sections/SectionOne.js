import React, { useContext }  from 'react';
import data from '../data';
import NewProduct from '../components/NewProduct';
import Product from '../components/Product';
import StarProduct from '../components/StarProduct';
import { AppContext } from '../context/AppContext';

const SectionOne = (  ) => {

  const {retrive} = useContext(AppContext);

  const [retreivealProduct , setRetreivalProduct ] = retrive;

 


  return (
    <div>
         <div className='section setion_offer' >

<h1 className="section_headline"> {data[0]['section']} </h1>

  <div className="grid_offer mt-3">

  { data[0]['products'].map(( {title , price , status , description , image , period , stars , services} ) => {
      if (status === "new") {
        return (
          <div key={title} onClick={() => setRetreivalProduct({
            title,
            price,
            image,
            period,
            stars,
            services
          }) } >  
          <NewProduct price={price} description={description} image={image} headline={title}  period={period} stars={stars }  services={services} />
    
          </div>
        );
      } 
      if (status === "star") {
        return (
          <div key={title} onClick={() => setRetreivalProduct({
            title,
            price,
            image,
            period,
            stars,
            services
          }) } >  
          <StarProduct price={price} image={image} description={description} headline={title}  period={period} stars={stars } services={services} />
          </div>
        );
      } 
      if (status === "reg") {
        return (
          <div key={title} onClick={() => setRetreivalProduct({
            title,
            price,
            image,
            services,
            period,
            stars
          }) } >  
          <Product price={price} image={image} headline={title} description={description} period={period} stars={stars } services={services}  />
          </div>
        );
      } 
  })  }
  
   
    

  </div>

</div>

    </div>
  )
}

export default SectionOne