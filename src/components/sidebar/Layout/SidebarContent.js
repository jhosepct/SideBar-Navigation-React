import React, { useRef } from 'react'
import '../css/SidebarContent.css'

function SidebarContent({children}) {
    let sidebarContentRef = useRef();
    return (
        <div ref={sidebarContentRef} className="sidebar-content" >
            {children}
        </div>
    )
}

export default SidebarContent


