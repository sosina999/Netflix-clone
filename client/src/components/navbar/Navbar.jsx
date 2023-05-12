import "./navbar.scss";
import SearchIcon from '@material-ui/icons/Search';
import NotificationsIcon from '@material-ui/icons/Notifications';
import ArrowDropDownIcon from '@material-ui/icons/ArrowDropDown';
import { useState } from "react";

const Navbar = () => {
    const [isScrolled, setIsScrolled] = useState(false)
    window.onscroll = () =>{
        setIsScrolled(window.scrollY === 0 ? false : true);
        return () => window.onscroll = null
    }

    console.log(isScrolled)
    // console.log(window.scrollY)
  return (
    <div className= {isScrolled ? "navbar scrolled" : 'navbar'}>
      <div className="container">
       
        <div className="left">

        <span>
        <img
            src="https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/12c6f684-d447-4457-84fa-12033cfd581e/d9z3o32-2c299a83-49a9-44c2-bc23-b0b5070a546b.png/v1/fill/w_1024,h_512,strp/netflix_logo_background__2_by_sixmonthslate_d9z3o32-fullview.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOiIsImlzcyI6InVybjphcHA6Iiwib2JqIjpbW3siaGVpZ2h0IjoiPD01MTIiLCJwYXRoIjoiXC9mXC8xMmM2ZjY4NC1kNDQ3LTQ0NTctODRmYS0xMjAzM2NmZDU4MWVcL2Q5ejNvMzItMmMyOTlhODMtNDlhOS00NGMyLWJjMjMtYjBiNTA3MGE1NDZiLnBuZyIsIndpZHRoIjoiPD0xMDI0In1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmltYWdlLm9wZXJhdGlvbnMiXX0.WKy-rj_8y7ziLuhhtAES7jddy-eUpz6PQQ331bp7rRI"
            alt="Netflix Logo"
          />
            </span>
         
          <span>HomePage</span>
          <span>Series</span>
          <span>Movies</span>
          <span>New and Popular</span>
          <span>My list</span>
        </div>
        <div className="right">
            <SearchIcon className="icon"/>
            <span>KID</span>
            <NotificationsIcon className="icon"/>
            <img src="" alt="" />

            <div className="profile">
            <ArrowDropDownIcon className="icon"/>
            <div className="options">
            <span>Settings</span>
            <span>Logout</span>
            </div>
           

            </div>
          

        </div>
      </div>
    </div>
  );
};

export default Navbar;
