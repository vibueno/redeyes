/**
 * @module functions
 */

import {
  BODY,
  SEL_HEADER_CONTENT,
  SEL_HAMBURGER,
  HAMBURGER,
  HAMBURGER_MENU_CLASS_TOP,
  HAMBURGER_MENU_CLASS_BOTTOM,
  HAMBURGER_CLASS_IN_HEADER,
  HAMBURGER_CLASS_OUT_HEADER,
  X,
  NAV,
  MENU_ENTRIES,
  SEL_FOOTER_CONTENT,
  SEL_BACK_TO_TOP,
  BACK_TO_TOP,
  BACK_TO_TOP_CLASS_IN_FOOTER,
  BACK_TO_TOP_CLASS_OUT_FOOTER,
  NODE_CLASS_VISIBLE,
  NODE_CLASS_HIDDEN,
} from './constants.js';

let functions = {
  /**
   * @description Sets hamburger button and menu style and position.
   */
  setHamburgerMenu: function() {
    //Sets style of hamburger button
    if (window.innerHeight + window.pageYOffset >= BODY.offsetHeight / 1.75) {
      window.setTimeout(function() {
        HAMBURGER.classList.remove(HAMBURGER_MENU_CLASS_TOP);
        HAMBURGER.classList.add(HAMBURGER_MENU_CLASS_BOTTOM);
        NAV.classList.remove(HAMBURGER_MENU_CLASS_TOP);
        NAV.classList.add(HAMBURGER_MENU_CLASS_BOTTOM);

        Array.prototype.forEach.call(MENU_ENTRIES, menuEntry => {
          menuEntry.classList.remove(HAMBURGER_MENU_CLASS_TOP);
          menuEntry.classList.add(HAMBURGER_MENU_CLASS_BOTTOM);
        });
      }, 100);
    } else {
      window.setTimeout(function() {
        HAMBURGER.classList.remove(HAMBURGER_MENU_CLASS_BOTTOM);
        HAMBURGER.classList.add(HAMBURGER_MENU_CLASS_TOP);
        NAV.classList.remove(HAMBURGER_MENU_CLASS_BOTTOM);
        NAV.classList.add(HAMBURGER_MENU_CLASS_TOP);

        Array.prototype.forEach.call(MENU_ENTRIES, menuEntry => {
          menuEntry.classList.remove(HAMBURGER_MENU_CLASS_BOTTOM);
          menuEntry.classList.add(HAMBURGER_MENU_CLASS_TOP);
        });
      }, 100);
    }

    //Sets position of hamburger button
    if (
      functions.getNodeViewportTop(SEL_HAMBURGER) >
      functions.getNodeViewportBottom(SEL_HEADER_CONTENT)
    ) {
      HAMBURGER.classList.remove(HAMBURGER_CLASS_IN_HEADER);
      HAMBURGER.classList.add(HAMBURGER_CLASS_OUT_HEADER);
    } else if (
      functions.getNodeViewportBottom(SEL_HAMBURGER) <
      functions.getNodeViewportBottom(SEL_HEADER_CONTENT)
    ) {
      HAMBURGER.classList.remove(HAMBURGER_CLASS_OUT_HEADER);
      HAMBURGER.classList.add(HAMBURGER_CLASS_IN_HEADER);
    }
  },

  /**
   * @description Shows an HTML node.
   * @param {Node} HTMLNode HTML node of the button to be shown.
   */
  showNode: function(HTMLNode) {
    HTMLNode.classList.remove(NODE_CLASS_HIDDEN);
    HTMLNode.classList.add(NODE_CLASS_VISIBLE);
  },

  /**
   * @description Hides an HTML node.
   * @param {Node} HTMLNode HTML node of the button to be hidden.
   */
  hideNode: function(HTMLNode) {
    HTMLNode.classList.remove(NODE_CLASS_VISIBLE);
    HTMLNode.classList.add(NODE_CLASS_HIDDEN);
  },

  /**
   * @description Sets the visibility of the back to top button.
   */
  setBackToTopVisibility: function() {
    if (window.innerHeight + window.pageYOffset >= BODY.offsetHeight / 1.75) {
      window.setTimeout(function() {
        functions.showNode(BACK_TO_TOP);
      }, 100);
    } else {
      window.setTimeout(function() {
        functions.hideNode(BACK_TO_TOP);
      }, 100);
    }
  },

  /**
   * @description Sets the position of the back to top button.
   */
  setBackToTopPosition: function() {
    //Sets position of back to top button
    if (
      functions.getNodeViewportBottom(SEL_BACK_TO_TOP) <
      functions.getNodeViewportTop(SEL_FOOTER_CONTENT)
    ) {
      BACK_TO_TOP.classList.remove(BACK_TO_TOP_CLASS_IN_FOOTER);
      BACK_TO_TOP.classList.add(BACK_TO_TOP_CLASS_OUT_FOOTER);
    } else if (
      functions.getNodeViewportTop(SEL_BACK_TO_TOP) >
      functions.getNodeViewportTop(SEL_FOOTER_CONTENT)
    ) {
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
  getNodeViewportTop: function(id) {
    const NODE = document.getElementById(id);
    return NODE.getBoundingClientRect().top;
  },

  /**
   * @description Returns bottom position of node inside viewport.
   * @param {Number} id Identifier of the node.
   *
   * @returns {Number} Bottom position of the node.
   */
  getNodeViewportBottom: function(id) {
    const NODE = document.getElementById(id);
    return NODE.getBoundingClientRect().bottom;
  },

  /**
   * @description Scrolls to the top of the page.
   *
   */
  scrollToTop: function() {
    window.scrollTo(0, 0);
  },

  /**
   * @description Opens the side menu (small viewports).
   */
  openMenu: function() {
    NAV.classList.add('open');
    functions.hideNode(HAMBURGER);
    functions.showNode(X);
    functions.setBackToTopVisibility();
  },

  /**
   * @description Closes the side menu (small viewports).
   */
  closeMenu: function() {
    NAV.classList.remove('open');
    functions.showNode(HAMBURGER);
    functions.hideNode(X);
    functions.setBackToTopVisibility();
  },
};

export { functions };
