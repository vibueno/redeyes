import {
  TPL_MENU,
  FOOTER_NAV,
  HEADER_NAV
} from './constants.js';

/**
 * @description Shows the menus based on a template.
 */
function showMenus() {
  /*
  const HEADER_MENU = TPL_MENU.content.cloneNode(true);
  HEADER_NAV.appendChild(HEADER_MENU);
  */

  const FOOTER_MENU = TPL_MENU.content.cloneNode(true);
  FOOTER_NAV.appendChild(FOOTER_MENU);
}

/*
 *
 * Initial calls
 *
 */

window.onload = function(){
  showMenus();
};