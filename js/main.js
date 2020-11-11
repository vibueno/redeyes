import { BACK_TO_TOP } from './constants.js';
import { functions } from './functions.js';

/*
 *
 * Initial calls
 *
 */

window.onload = function(){

  let backtoTopPushed = false;

  functions.setBackToTopPosition();
  functions.setBackToTopVisibility();

  /**
   * @description window scroll & resize events handling
   *
   */
  ['scroll','resize'].forEach( function(event) {
    window.addEventListener(event, function() {

      if (backtoTopPushed){
        backtoTopPushed = (window.pageYOffset!==0);
      }

      if (!backtoTopPushed){
        functions.setBackToTopPosition();
        functions.setBackToTopVisibility();
      }

      functions.setHamburger();
    }, false);
  });

  /**
   * @description click event of the button Back to top.
   */
  BACK_TO_TOP.addEventListener('click',(
    function() {
      backtoTopPushed = true;
      functions.hideBackToTop();
      functions.scrollToTop();
    })
  );
};