import {
  HAMBURGER,
  X,
  MENU,
  BACK_TO_TOP } from './constants.js';
import { functions } from './functions.js';

/*
 *
 * Initial calls
 *
 */

window.onload = function(){

  let backtoTopPushed = false;

  functions.setHamburgerMenu();
  functions.setBackToTopPosition();
  functions.setBackToTopVisibility();

  /**
   * @description Window scroll & resize events handling.
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

      functions.setHamburgerMenu();
    }, false);
  });

  /**
   * @description Click event for Back to top button.
   */
  BACK_TO_TOP.addEventListener('click',(
    function() {
      backtoTopPushed = true;
      functions.hideNode(BACK_TO_TOP);
      functions.scrollToTop();
    })
  );

  /**
   * @description Opens the side menu.
   */
  HAMBURGER.addEventListener('click', function(e) {
    if (!this.classList.contains('open')) {
      functions.openMenu();
    }
    else {
      functions.closeMenu();
    }

    e.stopPropagation();
  });

  /**
   * @description Closes the side menu.
   *
   */

  MENU.addEventListener('click',  function() {
    if (event.target.tagName==='LI') {
      functions.closeMenu();
    }
  });

  /**
   * @description Closes the side menu.
   *
   */

  X.addEventListener('click',  function() {
    functions.closeMenu();
  });
};