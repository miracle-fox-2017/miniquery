/*!
 * miniquery
 */

/*
 * ----------------------------------------------------------------------------
 * Element Selector
 * ----------------------------------------------------------------------------
 */
 let SweetSelector = {
   select: (input) => {
     return document.querySelector(input);
   }
 }

/*
 * -----------------------------------------------------------------------------
 * DOM Manipulators
 * -----------------------------------------------------------------------------
 */
 let DOM = {
   hide: (input) => {
     let el = document.querySelectorAll(input)
     el.forEach(element => {
       element.classList.add("hide")
     })
   },
   show: (input) => {
     let el = document.querySelectorAll(input)
     el.forEach(element => {
       element.classList.remove("hide")
     })
   },
   removeClass: (input, remClass) => {
     let el = document.querySelectorAll(input)
     el.forEach(element => {
       element.classList.remove(remClass)
     })
   },
   addClass: (input, newClass) => {
     let el = document.querySelectorAll(input)
     el.forEach(element => {
       element.classList.add(newClass)
     })
   }
 }

/*
 * ----------------------------------------------------------------------------
 * Event Dispatcher
 * ----------------------------------------------------------------------------
 */
let EventDispatcher = {
  on: (input, trigger, next) => {
    let el = document.querySelector(input)
    el.addEventListener("click", next())
  }
}

/*
 * ----------------------------------------------------------------------------
 * AJAX Wrapper
 * ----------------------------------------------------------------------------
 */
let AjaxWrapper = {
  request: (input) => {
    var xmlhttp;
    if (window.XMLHttpRequest) {
      xmlhttp = new XMLHttpRequest();
    } else {
      // code for older browsers
      xmlhttp = new ActiveXObject("Microsoft.XMLHTTP");
    }
    xmlhttp.onreadystatechange = function() {
      if (this.readyState == 4 && this.status == 200) {
        input.success(this.responseText)
      }
    };
    xmlhttp.open(input.type, input.url, true);
    xmlhttp.send();
  }
}

/*
 * ----------------------------------------------------------------------------
 * Alias miniquery
 * ----------------------------------------------------------------------------
 */
class MiniQuery {
  constructor(input) {
    this.input = input
  }

  select() {
    return document.querySelector(this.input);
  }

  hide() {
    let el = document.querySelectorAll(this.input)
    el.forEach(element => {
      element.classList.add("hide")
    })
  }

  show() {
    let el = document.querySelectorAll(this.input)
    el.forEach(element => {
      element.classList.remove("hide")
    })
  }

  removeClass(remClass) {
    let el = document.querySelectorAll(this.input)
    el.forEach(element => {
      element.classList.remove(remClass)
    })
  }

  addClass(newClass) {
    let el = document.querySelectorAll(this.input)
    el.forEach(element => {
      element.classList.add(newClass)
    })
  }

  on(trigger, next) {
    let el = document.querySelector(this.input)
    el.addEventListener("click", next())
  }

  request(input) {
    var xmlhttp;
    if (window.XMLHttpRequest) {
      xmlhttp = new XMLHttpRequest();
    } else {
      // code for older browsers
      xmlhttp = new ActiveXObject("Microsoft.XMLHTTP");
    }
    xmlhttp.onreadystatechange = function() {
      if (this.readyState == 4 && this.status == 200) {
        input.success(this.responseText)
      }
    };
    xmlhttp.open(input.type, input.url, true);
    xmlhttp.send();
  }
}


let miniquery = (input) => {
  return new MiniQuery(input)
}

let $ = miniquery
