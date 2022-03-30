import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useEffect, useState } from 'react'
import '../css/SidebarHeader.css'
function SiderbarHeader(props) {
    const [inactive, setInactive] = useState(true);

    return (
        <div className="sidebar-header" >
            <div className="logo">
                <img src={props.logo} alt="nombre de la marca" />
            </div>
            <div className="name">
                <h3 >{props.nameHeader} </h3>
            </div>

        </div>
    )
}

export default SiderbarHeader
