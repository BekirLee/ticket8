import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router'
import { FaBars } from "react-icons/fa";
import './navbar.css'


const Navbar = () => {
  const basketItems = useSelector((state) => state.basket.items);
  console.log(basketItems);

  const dispatch = useDispatch();

  const basketCount = basketItems.reduce((all, initial) => all + initial.count, 0)

  return (
    <div className='navBar '>
      <div className="container-custom">

        <div className="heroNavbar ">
          <div className="logo">Tasty</div>
          <div className="wrapper">

            <ul>
              <li>
                <Link to='/basket'>Basket</Link>
                <sup>{basketCount}</sup>
              </li>
              <li>
                <Link to='/admin'>Admin</Link>
              </li>
            </ul>
          </div>
          <div className="menuResponsive">
            <FaBars />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Navbar
