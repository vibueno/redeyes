/**
 * @module constants
 */

const BODY = document.body;

const SEL_HEADER_CONTENT = 'header-content';

const SEL_HAMBURGER = 'hamburger-menu';
const HAMBURGER = document.getElementById('hamburger-menu');
const HAMBURGER_MENU_CLASS_TOP = 'top';
const HAMBURGER_MENU_CLASS_BOTTOM = 'bottom';
const HAMBURGER_CLASS_IN_HEADER = 'in-header';
const HAMBURGER_CLASS_OUT_HEADER = 'out-header';

const X = document.getElementById('x');

const NAV = document.getElementById('header-nav');

const MENU = document.querySelector('.menu');
const MENU_ENTRIES = document.getElementsByClassName('menu-entry');

const SEL_FOOTER_CONTENT = 'footer-content';

const SEL_BACK_TO_TOP = 'back-to-top';
const BACK_TO_TOP = document.getElementById('back-to-top');
const BACK_TO_TOP_CLASS_IN_FOOTER = 'in-footer';
const BACK_TO_TOP_CLASS_OUT_FOOTER = 'out-footer';

const NODE_CLASS_VISIBLE = 'visible';
const NODE_CLASS_HIDDEN = 'hidden';

export {
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
  MENU,
  MENU_ENTRIES,
  SEL_FOOTER_CONTENT,
  SEL_BACK_TO_TOP,
  BACK_TO_TOP,
  BACK_TO_TOP_CLASS_IN_FOOTER,
  BACK_TO_TOP_CLASS_OUT_FOOTER,
  NODE_CLASS_VISIBLE,
  NODE_CLASS_HIDDEN,
};
