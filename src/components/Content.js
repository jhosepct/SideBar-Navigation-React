import { faBarsStaggered } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useEffect, useState } from 'react';
import { Outlet } from 'react-router-dom';
import './sidebar/css/Content.css';
function Content(props) {

    const [inactive, setInactive] = useState(true);

    useEffect(() => {
        props.sideBar(inactive);
    })

    return (
        <div className={`content ${inactive ? "inactive" : ""}`}>

            <div className='section-content'>
                <div onClick={() => setInactive(!inactive)} className="toggle-menu-btn">
                    {inactive ? (
                        /* => icon right */
                        <FontAwesomeIcon icon={'bars'} />
                    ) : (
                        /* <= icon left */
                        <FontAwesomeIcon icon={'bars-staggered'} />
                    )}
                </div>
                <div className='content-body'>
                    <Outlet />
                </div>
            </div>
        </div>
    )
}

export default Content