import { functions } from './functions.js';

/*
 *
 * Initial calls
 *
 */

window.onload = function(){

  /**
   * @description Checks on each scroll whether hamburger menu should be modified
   *
   */
  window.addEventListener('scroll', function() {
    functions.setHamburger();
  });

  functions.showMenus();
};