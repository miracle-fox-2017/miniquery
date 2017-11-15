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
 const AjaxWrapper = {
   request: (obj) => {
     // console.log(obj.type, obj.url);
     let xhttp = new XMLHttpRequest();
     xhttp.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
          obj.success(this.responseText)
          // document.getElementById("demo").innerHTML =
          // this.responseText;
        }
      };
     xhttp.open(obj.type, obj.url, true);
     xhttp.send();
   }
 }

 // {
 //   url:,
 //   type:,
 //   success:,
 //   fail
 // }
/*
 * ----------------------------------------------------------------------------
 * Alias miniquery
 * ----------------------------------------------------------------------------
 */
