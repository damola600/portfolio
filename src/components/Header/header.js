import React, { useState } from  'react';
import {
    ProSidebar,
    Menu,
    MenuItem,
    SidebarHeader,
    SidebarContent,
  } from "react-pro-sidebar";
//import { FaList, FaRegHeart } from "react-icons/fa";
import { FiArrowLeftCircle, FiArrowRightCircle } from "react-icons/fi";
// import { RiPencilLine } from "react-icons/ri";
// import { BiCog } from "react-icons/bi";
import "react-pro-sidebar/dist/css/styles.css";
import "./header.css";

const Header = () => {
    const [menuCollapse, setMenuCollapse] = useState(false);

    const menuIconCLick = () => {
        menuCollapse ? setMenuCollapse(false) : setMenuCollapse(true);
    };

    return(
        <div id="container">
            <div id="header">
            <ProSidebar collapsed={menuCollapse}>
                <SidebarHeader>
                    <div className="logotext">
                        <p>{menuCollapse ? "Project Experience" : "Project Experience"}</p>
                    </div>

                    <div className="closemenu" onClick={menuIconCLick}>
                        {menuCollapse ? (
                            <FiArrowRightCircle/>
                        ) : (
                            <FiArrowLeftCircle/>
                        )}
                    </div>
                </SidebarHeader>

                <SidebarContent>
                    <Menu iconShape="square">
                        <MenuItem id="websiteMenu" active={true} data-bs-target="#websites" data-bs-toggle="collapse" role="button" aria-expanded="false" aria-controls="websites">Websites</MenuItem>
                        <MenuItem active={true} data-bs-target="#mobileApps" data-bs-toggle="collapse" role="button" aria-expanded="false" aria-controls="mobileApps">Mobile Apps</MenuItem>
                        <MenuItem active={true} data-bs-target="#algorithms" data-bs-toggle="collapse" role="button" aria-expanded="false" aria-controls="algorithms">Algorithms</MenuItem>
                        <MenuItem active={true} data-bs-target="#ds" data-bs-toggle="collapse" role="button" aria-expanded="false" aria-controls="ds">Distributed Systems</MenuItem>                        
                    </Menu>
                </SidebarContent>
            </ProSidebar>

        </div></div>
    );
};
export default Header;