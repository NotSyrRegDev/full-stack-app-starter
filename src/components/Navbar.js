import React , {useState} from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => {

    const [mobileSection , setMobileSection] = useState(false);

  return (
    <div>
      { /* DESKTOP SECTION */}
        <p>   your navbar in desktop </p>

      { /*EMD  DESKTOP SECTION */}
      
        { /* MOBILE SECTION */}

    {mobileSection && (
      <p> your navbar in mobile </p>
    )}
       
     

        { /* END MOBILE SECTION */}
    </div>
  )
}

export default Navbar