import React from 'react'
import { Link } from 'react-router-dom'
import "../css/footer.css"

const Footer = () => {
  return (
   <>
   
    <div className="f-one">
        <div className="f-two">
        {/* <p className="f-p1">ShopX</p> */}
        <p className='f-p2'><Link to="/contact">Visit help center</Link></p>

        <div className="f-three">
            <div className="f-three-child">
                <ul className="f-list">
                    <li className="list-head">Company</li>
                    <li className="f-list-ele"><Link to="/aboutus">About Us</Link></li>
                    <li className="f-list-ele">Our offering</li>
                    <li className="f-list-ele">Gift cards</li>
                    <li className="f-list-ele">Newsroom</li>
                    <li className="f-list-ele">Blog</li>
                    <li className="f-list-ele">Investors</li>
                    <li className="f-list-ele">Careers</li>
                </ul>
            </div>
            <div className="f-three-child">
                <ul className="f-list">
                    <li className="list-head">Products</li>
                    <li className="f-list-ele">Fashion</li>
                    <li className="f-list-ele">Sports</li>
                    <li className="f-list-ele">Electronics</li>
                    <li className="f-list-ele">Home Applicances</li>
                    <li className="f-list-ele">Kitchen </li>
                </ul>
            </div>
            <div className="f-three-child">
            <ul className="f-list f-list-lastone ">
                    <li className="list-head">Contact Us</li>
                    <li className="f-list-ele cutoff">&nbsp;</li>
                    <li className="f-list-ele"></li>
                    <li className="f-list-ele f-l-e-over"><i className="fa-brands fa-instagram f-icon"></i></li>
                    <li className="f-list-ele cutoff">&nbsp;</li>
                    <li className="f-list-ele f-l-e-over"><i className="fa-brands fa-linkedin f-icon"></i></li>
                </ul>
            </div>
            <div className="f-three-child">
            <ul className="f-list f-list-lastone">
                    <li className="list-head cutoff">&nbsp;</li>
                    <li className="f-list-ele cutoff">&nbsp;</li>
                    <li className="f-list-ele cutoff"></li>
                    <li className="f-list-ele "><i className="fa-brands fa-facebook f-icon"></i></li>
                    <li className="f-list-ele cutoff">&nbsp;</li>
                    <li className="f-list-ele"><i className="fa-solid fa-envelope f-icon"></i></li>
                </ul>
            </div>
        </div>
        <p className='f-last-p'>&#169;  2022  Myknot.com</p>
        </div>
</div>

   </>
  )
}

export default Footer
