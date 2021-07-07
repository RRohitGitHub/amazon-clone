import React, { useState } from 'react'
import './Header.css'
import SearchIcon from '@material-ui/icons/Search';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import { Link } from "react-router-dom"
import { useStateValue } from '../StateProvider';
import { auth } from '../firebase';

function Header() {
    const [{basket,user},dispatch] = useStateValue();


    const handleAuthentication = ()=>{
        if(user){
            auth.signOut();
            console.log("After sign out user object is",user);
        }
    }
    return (
        <div className="header">
            <Link to="/">
                <img src="https://1079life.com/wp-content/uploads/2018/12/amazon_PNG11.png" className="header__logo"/>
            </Link>
            <div className="header__search">
                <input type="text" placeholder="" className="header__searchInput"/>
                <SearchIcon className="header__searchIcon"/>
            </div>

            <div className="header__nav">
                <Link to={!user && "/login"} style={{ textDecoration: 'none' }} >
                    <div onClick={handleAuthentication} className="header__option">
                        <span className="header__optionLineOne">
                            Hello {!user?"Guest": user.email}
                        </span>
                        <span className="header__optionLineTwo">
                            {user ? "Sign Out":"Sign In"}
                        </span>
                    </div>
                </Link>

                <div className="header__option">
                    <span className="header__optionLineOne">
                        Returns
                    </span>
                    <span className="header__optionLineTwo">
                        Orders
                    </span>
                </div>

                <div className="header__option">
                    <span className="header__optionLineOne">
                        Your
                    </span>
                    <span className="header__optionLineTwo">
                        Prime
                    </span>
                </div>

                <Link to="/checkout" style={{ textDecoration: 'none' }}>
                    <div className="header__optionBasket">
                        <ShoppingCartIcon />
                        <span className="header__optionLineOne header__basketCount">{basket?.length}</span>
                    </div>
                </Link>
            </div>
        </div>
    )
}

export default Header
