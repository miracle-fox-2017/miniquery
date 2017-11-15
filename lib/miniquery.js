/*!
 * miniquery
 */

/*
 * ----------------------------------------------------------------------------
 * Element Selector
 * ----------------------------------------------------------------------------
 */
 const SweetSelector = {
   select: tag => {
     return document.querySelector(tag)
   }
 }

/*
 * -----------------------------------------------------------------------------
 * DOM Manipulators
 * -----------------------------------------------------------------------------
 */
const DOM = {
  hide: tag => {
    let objs = document.querySelectorAll(tag)
    objs.forEach(obj => {
      obj.style.display = "none";
    })
  },
  show: tag => {
    let objs = document.querySelectorAll(tag)
    objs.forEach(obj => {
      obj.style.display = "block";
    })
  },
  removeClass: (tag, className) => {
    let objs = document.querySelectorAll(tag)
    objs.forEach(obj => {
      obj.classList.remove(className);
    })
  },
  addClass: (tag, className) => {
    let objs = document.querySelectorAll(tag)
    objs.forEach(obj => {
      obj.classList.add(className);
    })
  }
}

/*
 * ----------------------------------------------------------------------------
 * Event Dispatcher
 * ----------------------------------------------------------------------------
 */
const EventDispatcher = {
  on: (tag, eventName, print) => {
    let obj = document.querySelector(tag)
    obj.addEventListener(eventName, print())
  }
}

/*
 * ----------------------------------------------------------------------------
 * AJAX Wrapper
 * ----------------------------------------------------------------------------
 */


/*
 * ----------------------------------------------------------------------------
 * Alias miniquery
 * ----------------------------------------------------------------------------
 */
