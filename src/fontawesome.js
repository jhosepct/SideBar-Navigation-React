// import the library
import { library } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import your icons
import {faAngleRight,faAngleLeft, faSignOutAlt, faBars, faAngleDown, faGripHorizontal, faEnvelope, faChartPie, faTruck, faPeopleArrows, faPerson, faBusinessTime,  faFile, faMoon, faSun, faBarsProgress, faBarsStaggered } 
from '@fortawesome/free-solid-svg-icons';

library.add(
  // icons for sidebar
  faGripHorizontal,
  faEnvelope,
  faChartPie,
  faTruck ,
  faPeopleArrows,
  faPerson,
  faBusinessTime,
  faFile,


  //bar
  faBars,
  faBarsStaggered,

  //icon sigout
  faSignOutAlt,  

  // icons arrows
  faAngleRight,
  faAngleLeft,
  faAngleDown,

  //darkMode
  faMoon,
  faSun

  // more icons go here
);