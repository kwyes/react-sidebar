import React from 'react';
import { ProSidebar, Menu, MenuItem, SubMenu } from 'react-pro-sidebar';
import 'react-pro-sidebar/dist/css/styles.css';
import { Link } from 'react-router-dom';
import { FaGem,FaHeart } from "react-icons/fa";

const Sidebar = () => {
    const activeStyle = {
        color: 'green',
        fontSize: '2rem'
    };

    return (

        <ProSidebar>
        <Menu iconShape="square">
            <MenuItem><Link to="/">Home</Link></MenuItem>
            <MenuItem><Link to="/about">About</Link></MenuItem>
        </Menu>
      </ProSidebar>
        
    );
};

export default Sidebar;