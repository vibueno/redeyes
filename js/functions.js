/**
 * @module functions
 */

import {
  BODY,
  SEL_HEADER_CONTENT,
  SEL_HAMBURGER,
  HAMBURGER,
  HAMBURGER_CLASS_TOP,
  HAMBURGER_CLASS_BOTTOM,
  HAMBURGER_CLASS_IN_HEADER,
  HAMBURGER_CLASS_OUT_HEADER,
  SEL_FOOTER_CONTENT,
  SEL_BACK_TO_TOP,
  BACK_TO_TOP,
  BACK_TO_TOP_CLASS_VISIBLE,
  BACK_TO_TOP_CLASS_HIDDEN,
  BACK_TO_TOP_CLASS_IN_FOOTER,
  BACK_TO_TOP_CLASS_OUT_FOOTER
} from './constants.js';

let functions = {

  /**
   * @description Sets hamburger button style and position
   */
  setHamburger: function() {

    //Sets style of hamburger button
    if (((window.innerHeight + window.pageYOffset) >= (BODY.offsetHeight/1.75))) {
      window.setTimeout( function() {
        HAMBURGER.classList.remove(HAMBURGER_CLASS_TOP);
        HAMBURGER.classList.add(HAMBURGER_CLASS_BOTTOM);
      }, 100);
    }
    else {
      window.setTimeout( function() {
        HAMBURGER.classList.remove(HAMBURGER_CLASS_BOTTOM);
        HAMBURGER.classList.add(HAMBURGER_CLASS_TOP);
      }, 100);
    }

    //Sets position of hamburger button
    if (functions.getNodeViewportTop(SEL_HAMBURGER)>functions.getNodeViewportBottom(SEL_HEADER_CONTENT)){
      HAMBURGER.classList.remove(HAMBURGER_CLASS_IN_HEADER);
      HAMBURGER.classList.add(HAMBURGER_CLASS_OUT_HEADER);
    }

    else if (functions.getNodeViewportBottom(SEL_HAMBURGER)<functions.getNodeViewportBottom(SEL_HEADER_CONTENT)){
      HAMBURGER.classList.remove(HAMBURGER_CLASS_OUT_HEADER);
      HAMBURGER.classList.add(HAMBURGER_CLASS_IN_HEADER);
    }
  },

  /**
   * @description Shows the back to top button
   */
  showBackToTop: function () {
    BACK_TO_TOP.classList.remove(BACK_TO_TOP_CLASS_HIDDEN);
    BACK_TO_TOP.classList.add(BACK_TO_TOP_CLASS_VISIBLE);
  },

  /**
   * @description Hides the back to top button
   */
  hideBackToTop: function () {
    BACK_TO_TOP.classList.remove(BACK_TO_TOP_CLASS_VISIBLE);
    BACK_TO_TOP.classList.add(BACK_TO_TOP_CLASS_HIDDEN);
  },

  /**
   * @description Sets the visibility of the back to top button
   */
  setBackToTopVisibility: function () {

    if (((window.innerHeight + window.pageYOffset) >= (BODY.offsetHeight/1.75))) {
      window.setTimeout( function() {
        functions.showBackToTop();
      }, 100);

    }
    else {
      window.setTimeout( function() {
        functions.hideBackToTop();
      }, 100);
    }
  },

  /**
   * @description Sets the position of the back to top button
   */
  setBackToTopPosition: function () {

    //Sets position of back to top button
    if (functions.getNodeViewportBottom(SEL_BACK_TO_TOP)<functions.getNodeViewportTop(SEL_FOOTER_CONTENT)){
      BACK_TO_TOP.classList.remove(BACK_TO_TOP_CLASS_IN_FOOTER);
      BACK_TO_TOP.classList.add(BACK_TO_TOP_CLASS_OUT_FOOTER);
    }

    else if (functions.getNodeViewportTop(SEL_BACK_TO_TOP)>functions.getNodeViewportTop(SEL_FOOTER_CONTENT)){
      BACK_TO_TOP.classList.remove(BACK_TO_TOP_CLASS_OUT_FOOTER);
      BACK_TO_TOP.classList.add(BACK_TO_TOP_CLASS_IN_FOOTER);
    }
  },

  /**
   * @description Returns top position of node inside viewport.
   * @param {Number} id Identifier of the node.
   *
   * @returns {Number} Top position of the node.
   */
  getNodeViewportTop: function (id) {
    const NODE = document.getElementById(id);
    return NODE.getBoundingClientRect().top;
  },


  /**
   * @description Returns bottom position of node inside viewport.
   * @param {Number} id Identifier of the node.
   *
   * @returns {Number} Bottom position of the node.
   */
  getNodeViewportBottom: function (id) {
    const NODE = document.getElementById(id);
    return NODE.getBoundingClientRect().bottom;
  },

  /**
   * @description Scrolls to the top of the page
   *
   */
  scrollToTop: function () {
    window.scrollTo(0, 0);
  }

};

export { functions };