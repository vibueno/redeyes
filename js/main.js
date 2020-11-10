import { BACK_TO_TOP } from './constants.js';
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

  /**
   * @description click event of the button Back to top.
   */
  BACK_TO_TOP.addEventListener('click',(
    function() {
      functions.scrollToTop();
    })
  );
};