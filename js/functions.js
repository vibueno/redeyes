/**
 * @module functions
 */

import {
  BODY,
  SEL_HEADER_CONTENT,
  TPL_MENU,
  SEL_HAMBURGER,
  HAMBURGER,
  HAMBURGER_CLASS_TOP,
  HAMBURGER_CLASS_BOTTOM,
  HAMBURGER_CLASS_IN_HEADER,
  HAMBURGER_CLASS_ALIGN_LEFT,
  FOOTER_NAV
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
   * @description Sets hamburger icon style and position
   */
  setHamburger: function() {

    //Sets style of hamburger icon
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

    //Sets position of hamburger icon
    if (functions.getNodeViewportTop(SEL_HAMBURGER)>functions.getNodeViewportBottom(SEL_HEADER_CONTENT)){
      HAMBURGER.classList.remove(HAMBURGER_CLASS_IN_HEADER);
      HAMBURGER.classList.add(HAMBURGER_CLASS_ALIGN_LEFT);
    }

    else if (functions.getNodeViewportBottom(SEL_HAMBURGER)<functions.getNodeViewportBottom(SEL_HEADER_CONTENT)){
      HAMBURGER.classList.remove(HAMBURGER_CLASS_ALIGN_LEFT);
      HAMBURGER.classList.add(HAMBURGER_CLASS_IN_HEADER);
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
  }

};

export { functions };