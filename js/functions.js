/**
 * @module functions
 */

import {
  BODY,
  TPL_MENU,
  FOOTER_NAV,
  HEADER_NAV,
  HAMBURGER,
  HAMBURGER_TOP_CLASS,
  HAMBURGER_BOTTOM_CLASS
} from './constants.js';

let functions = {

  /**
   * @description Shows the menus based on a template.
   */
  showMenus: function() {
    /*
    const HEADER_MENU = TPL_MENU.content.cloneNode(true);
    HEADER_NAV.appendChild(HEADER_MENU);
    */

    const FOOTER_MENU = TPL_MENU.content.cloneNode(true);
    FOOTER_NAV.appendChild(FOOTER_MENU);
  },

  /**
   * @description Sets the visibility of the back to top button
   */
  setHamburger: function() {

    if (((window.innerHeight + window.pageYOffset) >= (BODY.offsetHeight/1.75))) {
      window.setTimeout( function() {
        HAMBURGER.classList.remove(HAMBURGER_TOP_CLASS);
        HAMBURGER.classList.add(HAMBURGER_BOTTOM_CLASS);
      }, 100);

    }
    else {
      window.setTimeout( function() {
        HAMBURGER.classList.remove(HAMBURGER_BOTTOM_CLASS);
        HAMBURGER.classList.add(HAMBURGER_TOP_CLASS);
      }, 100);
    }
  }
}

export { functions };