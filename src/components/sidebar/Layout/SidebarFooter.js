import { faLongArrowAltUp, faSignOutAlt } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useEffect, useState } from "react";
import User from '../../../assets/img/user.png';

import '../css/SidebarFooter.css'

function SidebarFooter() {

    useEffect(() => {
        
        const value =localStorage.getItem('dark-mode');
        const button = document.getElementById("switch");

        if(value==="true"){
            button.classList.toggle("active");
        }
    }, [])
    const switchClick = () => {
        const button = document.getElementById("switch");
        button.classList.toggle("active");

        const body = document.body;
        body.classList.toggle("dark-mode")
        const value = body.classList.contains('dark-mode');
        localStorage.setItem('dark-mode', value);

    }
    return (
        <>
            <div className="appearance">
                <nav className="menu">
                    <ul>
                        <li className="menu-item" onClick={switchClick}>
                            <div className="menu-icon">
                                <FontAwesomeIcon icon='moon' />
                            </div>
                            <span>
                                dark mode
                            </span>
                            <div className="angle-sub-menu">
                                <button className="switch" id="switch" >
                                    <span>
                                        <FontAwesomeIcon icon='sun' />
                                    </span>
                                    <span>
                                        <FontAwesomeIcon icon='moon' />
                                    </span>
                                </button>
                            </div>
                        </li>
                    </ul>
                </nav>
            </div>
            <div className="sidebar-footer" >
                <div className="user">
                    <div className="avatar">
                        <img src={User} />
                    </div>
                    <div className="user-info">
                        <div className="user-name">
                            <span>k3v1n Ct</span>
                        </div>
                        <div className="rol">
                            <span>admin</span>
                        </div>
                    </div>
                </div>
                <div className="logout" >
                    <FontAwesomeIcon icon={faSignOutAlt} />
                </div>
            </div>


        </>
    )
}

export default SidebarFooter
