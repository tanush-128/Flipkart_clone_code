import './incompletePage.css'
import { Link } from 'react-router-dom';
function IncompletePage(){
    return(
      <div className='incomplete'>
        <div className='incompleteBody'>
        <div className='heading'>
           {'This part of the website is under devolopment'.toUpperCase()}
        </div>
        <div className='para'>
            I am working on it and it will be available soon
        </div>
        <div className='links'>
            Pages currently availiable are:
            <ul>
            <li><Link to={'/'} >Home Page</Link></li>
            <li><Link to={'/products'} >Products List view</Link></li>
            <li><Link to={'/products/0'} >Product view</Link></li>
            <li><Link to={'/cart'} >Cart</Link></li>
            <li><Link to={'/login'} >Login</Link></li>



             
            </ul> 
        </div>
      </div>
      </div>
    );
}

export default IncompletePage;