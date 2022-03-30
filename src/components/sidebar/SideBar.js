import React, { useEffect, useState } from 'react'
import './css/SideBar.css'
function SideBar(props) {
  const [inactive, setInactive] = useState(true);


  useEffect(() => {
    if (inactive) {
      removeActiveClassFromSubMenu();
    }
    setInactive(props.onCollapse)
  });
  



  useEffect(() => {
    let menuItems = document.querySelectorAll(".menu-item-select");
    menuItems.forEach((el) => {
      el.addEventListener("click", (e) => {
        const next = el.nextElementSibling;
        removeActiveClassFromSubMenu();
        menuItems.forEach((el) => el.classList.remove("active"));
        el.classList.toggle("active");
        if (next !== null) {
          next.classList.toggle("active");
        }
      });
    });
  }, []);
  const removeActiveClassFromSubMenu = () => {
    document.querySelectorAll(".sub-menu").forEach((el) => {
      el.classList.remove("active");
    });
  };
  return (

      <div className={`sidebar ${inactive ? "inactive" : ""}`} style={{ backgroundImage: `url(${props.background})` }}>
        {props.children}
      </div>
  )
}

export default SideBar
