import makeid from './makeid';
import {useNavigate} from 'react-router-dom';


const navigate = useNavigate();

const addNewRow =  async (e , table , object) => {

    e.preventDefault();
   
  

    const packages = await setDoc(doc(db, table , makeid(20)), {

      package_name: object.title,
      package_price: object.price,
      package_total_price: object.totalPrice,
      user_choose: object.userChoosen,
      notes: object.notes,
      userId: object.userAssignedId,

    });
  

    setTimeout(() => {
     
      return navigate('/confirm');
    } , 1800  );
  }

  export default addNewRow;