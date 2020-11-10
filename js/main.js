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
  ['scroll','resize'].forEach( function(event) {
      window.addEventListener(event, function() {
    functions.setHamburger();
    functions.setBackToTop();
  }, false);
  });

  functions.showMenus();

};