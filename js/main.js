import { functions } from './functions.js';

/*
 *
 * Initial calls
 *
 */

window.onload = function(){

  /**
   * @description window scroll & resize events handling
   *
   */
  ['scroll','resize'].forEach( function(event) {
    window.addEventListener(event, function() {
      functions.setHamburger();
      functions.setBackToTop();
    }, false);
  });
};