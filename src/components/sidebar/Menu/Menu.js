import React, { useRef, useState } from 'react'
import MenuItem from './MenuItem';
import '../css/Menu.css'
import { menuItems } from '../../helpers/data';

const data = menuItems;


function Menu() {

  const [error, setError] = useState('');


  const [inactive, setInactive] = useState(false);
  return (
    <nav className="menu" >
      <ul>
        {data.map((menuItem, index) => (
          <MenuItem
            key={index}
            name={menuItem.name}
            exact={menuItem.exact}
            to={menuItem.to}
            subMenus={menuItem.subMenus || []}
            iconClassName={menuItem.iconClassName}
            onClick={(e) => {
              if (inactive) {
                setInactive(false);
              }
            }}
          />
        ))}
      </ul>

    </nav>

  )
}

export default Menu
