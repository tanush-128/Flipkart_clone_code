import React from "react";
import './loginPage.css'
import flipkart from './flipkart.png'
import { Link } from 'react-router-dom';
import Footer from "../../widgets/footer/footer";
function LoginPage() {
  
    return (
        <div>
        <div className="LoginPage">
            <div className="LoginPageLeft">
                <div className="Login">
                    Login
                </div>
                <p>
                    Get access to your Orders, Wishlist and Recommendations
                </p>
                <img src={flipkart} alt="" />
            </div>
            <div className="LoginPageRight">
                <div>
                    <input type="text" placeholder="Enter Mobile number/Email" />
                    <p>
                        By continuing, you agree to <span className="blue">Flipkart's Terms of Use </span>  and <span className="blue"> Privacy Policy.</span>
                    </p>



                    <button>Request OTP</button>
                </div>


                <div className="CreateAnAccount">
                    <Link  to={'/signUp'} className="blue">
                    

                    New to Flipkart? Create an account
                    </Link>
                    

                </div>
            </div>
        </div>
            <div className="footer">
                
            <Footer />
                </div>       
        </div>
    )
}

export default LoginPage;