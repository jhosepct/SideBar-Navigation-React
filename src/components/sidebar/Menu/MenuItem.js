import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useEffect, useRef, useState } from "react";
import { NavLink } from "react-router-dom";

function MenuItem(props) {
    const { name, subMenus, iconClassName, onClick, to, exact } = props;
  
    return (
        <>

            <li onClick={onClick} >
                <NavLink
                    to={to}
                    // onClick={() => {
                    //   setExpand((e) => !e);
                    // }}
                    className={`menu-item menu-item-select`}>

                    <div className="menu-icon">
                        <FontAwesomeIcon icon={['fas', iconClassName]} />
                    </div>
                    <span>{name}</span>
                    {subMenus && subMenus.length > 0 ?(
                        <div className="angle-sub-menu">
                            <FontAwesomeIcon icon={'angle-down'} />
                        </div>    
                    ) : null}
                </NavLink>
                {subMenus && subMenus.length > 0 ? (
                    <ul className={`sub-menu`}>
                        {subMenus.map((menu, index) => (
                            <li key={index}>

                                <NavLink to={menu.to} className='sub-menu-item'>
                                    <div className="menu-icon">
                                        <FontAwesomeIcon icon={['fas', menu.iconClassName]} />
                                    </div>
                                    <span>
                                        {menu.name}
                                    </span>
                                </NavLink>

                            </li>
                        ))}
                    </ul>
                ) : null}
            </li>
        </>
    )
}

export default MenuItem
